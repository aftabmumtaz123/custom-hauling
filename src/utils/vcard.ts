/**
 * Generates and downloads a vCard (.vcf) for the contact shown on the page.
 * The values are passed in from the page so the file always matches the
 * currently displayed contact information.
 */

export interface VCardLink {
  name: string;
  value: string;
}

export interface VCardContact {
  name: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string | null;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  label?: string;
  website?: string;
  note?: string;
  links?: VCardLink[];
  photoUrl?: string;
  photoType?: 'JPEG' | 'PNG';
}

// Escape values according to the vCard 3.0 text-value rules.
function escapeVCardText(value = ''): string {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

function escapeVCardParam(value = ''): string {
  return String(value).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/:/g, '\\:');
}

function normalizeUrl(url = ''): string {
  const value = url.trim();
  if (!value) return '';
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function normalizePhoneNumber(phone = ''): string {
  const digits = String(phone).replace(/\D/g, '');
  if (!digits) return '';
  const international = digits.length === 10 ? `1${digits}` : digits;
  return `+${international}`;
}

function foldVCardValue(value: string, prefix: string): string {
  const firstChunkLength = Math.max(1, 72 - prefix.length);
  const chunks = [value.slice(0, firstChunkLength)];
  for (let i = firstChunkLength; i < value.length; i += 72) {
    chunks.push(` ${value.slice(i, i + 72)}`);
  }
  return `${prefix}${chunks.join('\r\n')}`;
}

async function imageToBase64(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to load contact photo (${response.status})`);
  const buffer = await response.arrayBuffer();
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export async function downloadVCard(contact: VCardContact) {
  const name = contact.name?.trim() || 'Contact';
  const website = normalizeUrl(contact.website);

  // Treat the configured company/contact name as one display name.
  // Splitting it into given/family names causes Android Contacts to display
  // names such as "Custom Hauling Inc." as "Custom" / "Hauling Inc.".
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${escapeVCardText(name)};;;`,
    `FN:${escapeVCardText(name)}`,
  ];

  if (contact.organization) {
    lines.push(`ORG:${escapeVCardText(contact.organization)}`);
  }

  if (contact.title) {
    lines.push(`TITLE:${escapeVCardText(contact.title)}`);
  }

  if (contact.phone) {
    const phone = normalizePhoneNumber(contact.phone);
    // Add the configured phone number once. Duplicating the same number as
    // both Work and Mobile makes Android Contacts show two identical fields.
    lines.push(`TEL;TYPE=CELL,VOICE:${phone}`);
  }

  if (contact.email) {
    lines.push(`EMAIL;TYPE=WORK:${escapeVCardParam(contact.email.trim())}`);
  }

  if (contact.address || contact.city || contact.state || contact.country) {
    lines.push(
      `ADR;TYPE=WORK:;;${escapeVCardText(contact.address)};${escapeVCardText(contact.city)};${escapeVCardText(contact.state)};${escapeVCardText(contact.postalCode)};${escapeVCardText(contact.country)}`
    );

    if (contact.label) {
      lines.push(`LABEL;TYPE=WORK:${escapeVCardText(contact.label)}`);
    }
  }

  if (website) {
    lines.push(`URL:${website}`);
  }

  if (contact.note) {
    lines.push(`NOTE:${escapeVCardText(contact.note)}`);
  }

  // Add each link only once. iOS can show duplicate entries when the same
  // WhatsApp URL is written as both X-SOCIALPROFILE and URL. Keep one clean
  // URL property and do not escape ':' or '/' in the URL itself.
  contact.links?.forEach((link) => {
    const url = normalizeUrl(link.value);
    if (!url) return;
    lines.push(`URL;TYPE=${escapeVCardParam(link.name || 'Website')}:${url}`);
  });

  if (contact.photoUrl) {
    try {
      const base64 = await imageToBase64(contact.photoUrl);
      const type = contact.photoType || 'JPEG';
      lines.push(foldVCardValue(base64, `PHOTO;ENCODING=b;TYPE=${type}:`));
    } catch (error) {
      console.warn('vCard photo could not be embedded; continuing without photo.', error);
    }
  }

  lines.push('END:VCARD');

  const blob = new Blob([lines.join('\r\n') + '\r\n'], {
    type: 'text/vcard;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'contact'}.vcf`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();

  // Keep the object URL alive briefly so Safari/iOS has time to consume it.
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}
