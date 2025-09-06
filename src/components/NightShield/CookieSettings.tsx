import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface CookieSettings {
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  marketing: boolean;
}

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<CookieSettings>({
    functional: false,
    analytics: false,
    performance: false,
    marketing: false
  });

  useEffect(() => {
    // Load existing settings from localStorage
    const savedConsent = localStorage.getItem('ns_consent');
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setSettings({
          functional: parsed.functional || false,
          analytics: parsed.analytics || false,
          performance: parsed.performance || false,
          marketing: parsed.marketing || false
        });
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    const consentData = {
      ...settings,
      strictly_necessary: true, // Always true
      ts: Date.now(),
      v: '1.0'
    };

    // Save to localStorage
    localStorage.setItem('ns_consent', JSON.stringify(consentData));

    // Update Google Consent Mode if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: settings.analytics ? 'granted' : 'denied',
        ad_storage: settings.marketing ? 'granted' : 'denied',
        ad_user_data: settings.marketing ? 'granted' : 'denied',
        ad_personalization: settings.marketing ? 'granted' : 'denied'
      });
    }

    onClose();
  };

  const handleAcceptAll = () => {
    setSettings({
      functional: true,
      analytics: true,
      performance: true,
      marketing: true
    });
  };

  const handleRejectAll = () => {
    setSettings({
      functional: false,
      analytics: false,
      performance: false,
      marketing: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-red-500/20 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Cookie Settings</h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-red-500 transition-colors"
              aria-label="Close"
            >
              <Icon icon="mdi:close" width="24" height="24" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Strictly Necessary - Always enabled */}
            <div className="border-b border-red-500/20 pb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-white">Strictly Necessary</label>
                <div className="bg-red-500/20 px-2 py-1 rounded text-xs text-red-500">
                  Always On
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Required for core site functionality. Cannot be disabled.
              </p>
            </div>

            {/* Functional */}
            <div className="border-b border-red-500/20 pb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-white" htmlFor="functional">
                  Functional
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={settings.functional}
                    onChange={(e) => setSettings({ ...settings, functional: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <p className="text-white/60 text-sm">
                Enhances usability and provides better experience.
              </p>
            </div>

            {/* Analytics */}
            <div className="border-b border-red-500/20 pb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-white" htmlFor="analytics">
                  Analytics
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <p className="text-white/60 text-sm">
                Helps us understand how visitors interact with our website.
              </p>
            </div>

            {/* Performance */}
            <div className="border-b border-red-500/20 pb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-white" htmlFor="performance">
                  Performance
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="performance"
                    checked={settings.performance}
                    onChange={(e) => setSettings({ ...settings, performance: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <p className="text-white/60 text-sm">
                Helps us monitor and improve website performance.
              </p>
            </div>

            {/* Marketing */}
            <div className="border-b border-red-500/20 pb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-white" htmlFor="marketing">
                  Marketing
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={settings.marketing}
                    onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <p className="text-white/60 text-sm">
                Used to measure marketing effectiveness (we never sell your data).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-white/60 hover:text-white transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-white/60 hover:text-white transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
