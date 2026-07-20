import { CONFIG } from '../config';

export function mailto(subject, body) {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${CONFIG.CONTACT_EMAIL}?${params.toString()}`;
}

export function donateHref(tierLabel) {
  if (CONFIG.DONATION_URL) return CONFIG.DONATION_URL;
  return mailto('Sponsor a Box', tierLabel ? `I'd like to give: ${tierLabel}` : '');
}
