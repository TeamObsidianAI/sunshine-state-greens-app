// Every value here is a placeholder to be replaced by whoever maintains
// this site after launch. Nothing else in the codebase should need
// editing when swapping in real links or assets.
export const CONFIG = {
  // Replace with the live PayPal Giving Fund / Square donation link once
  // nonprofit payment processing is set up. Leave as `null` to keep using
  // the mailto fallback in useDonateLink.js.
  DONATION_URL: null,

  // Used for the donate mailto fallback, the partner "reach out" link,
  // and the footer/social email icon.
  CONTACT_EMAIL: 'lucmuzie@gmail.com',

  // Confirm these handles are registered, then update if they change.
  TIKTOK_URL: 'https://www.tiktok.com/@sunshinestategreens',
  INSTAGRAM_URL: 'https://www.instagram.com/sunshinestategreens',
};

export const DONATION_TIERS = [
  { amount: 6, label: '$6 — 1 Box' },
  { amount: 30, label: '$30 — 5 Boxes' },
  { amount: 60, label: '$60 — 10 Boxes' },
];
