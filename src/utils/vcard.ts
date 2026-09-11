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

export function downloadVCard(contact: VCardContact) {
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
    const phone = contact.phone.trim();
    // Add the configured phone number once. Duplicating the same number as
    // both Work and Mobile makes Android Contacts show two identical fields.
    lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCardParam(phone)}`);
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
    lines.push(`URL:${escapeVCardParam(website)}`);
  }

  if (contact.note) {
    lines.push(`NOTE:${escapeVCardText(contact.note)}`);
  }

  contact.links?.forEach((link, index) => {
    const url = normalizeUrl(link.value);
    if (!url) return;
    const safeName = escapeVCardParam(link.name || `Social ${index + 1}`);

    // Keep X-SOCIALPROFILE for clients that understand it, and also expose
    // the same profile as a typed URL for broader Android/iOS compatibility.
    lines.push(`item${index + 1}.X-SOCIALPROFILE;TYPE=${safeName}:${escapeVCardParam(url)}`);
    lines.push(`URL;TYPE=${safeName}:${escapeVCardParam(url)}`);
  });

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
