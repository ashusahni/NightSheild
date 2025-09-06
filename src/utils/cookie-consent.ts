interface CookieConsent {
  strictly_necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  marketing: boolean;
  ts: number;
  v: string;
}

const CONSENT_KEY = 'ns_consent';
const CONSENT_VERSION = '1.0';

export const getDefaultConsent = (): CookieConsent => ({
  strictly_necessary: true, // Always true
  functional: false,
  analytics: false,
  performance: false,
  marketing: false,
  ts: Date.now(),
  v: CONSENT_VERSION
});

export const loadConsent = (): CookieConsent => {
  if (typeof window === 'undefined') {
    return getDefaultConsent();
  }

  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      return getDefaultConsent();
    }

    const parsed = JSON.parse(saved);
    return {
      ...getDefaultConsent(),
      ...parsed,
      strictly_necessary: true // Always ensure this is true
    };
  } catch (e) {
    console.error('Error loading cookie consent:', e);
    return getDefaultConsent();
  }
};

export const saveConsent = (consent: Partial<CookieConsent>) => {
  if (typeof window === 'undefined') return;

  const current = loadConsent();
  const updated = {
    ...current,
    ...consent,
    strictly_necessary: true, // Always ensure this is true
    ts: Date.now()
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(updated));
    updateGoogleConsent(updated);
  } catch (e) {
    console.error('Error saving cookie consent:', e);
  }
};

export const updateGoogleConsent = (consent: CookieConsent) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;

  (window as any).gtag('consent', 'update', {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied'
  });
};

export const hasValidConsent = (): boolean => {
  const consent = loadConsent();
  return !!consent.ts && consent.v === CONSENT_VERSION;
};
