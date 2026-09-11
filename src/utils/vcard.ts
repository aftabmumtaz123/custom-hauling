/**
 * Generates and triggers download of a vCard (.vcf) file for Custom Hauling Inc.
 */
export function downloadVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;Custom Hauling Inc.;;;',
    'FN:Custom Hauling Inc.',
    'ORG:Custom Hauling Inc. - Property Solutions',
    'TITLE:Property Solutions & Hauling',
    'TEL;TYPE=WORK,VOICE:(619) 634-5953',
    'TEL;TYPE=CELL,VOICE,MSG:(619) 634-5953',
    'ADR;TYPE=WORK:;;San Diego;CA;;USA',
    'NOTE:Property Solutions: Junk & Debris Removal, Cleanouts, Yard Cleanup, Small Repairs, Pressure Washing, Painting, Moving Help, Hauling & Delivery.',
    'URL:https://customhaulinginc.com',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Custom_Hauling_Inc.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
