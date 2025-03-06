'use client'

import { useState, useEffect } from 'react'

interface CookieModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export default function CookieModal({ isOpen, onClose, onSave }: CookieModalProps) {
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setAnalyticsCookies(localStorage.getItem('analyticsCookies') === 'true')
      setMarketingCookies(localStorage.getItem('marketingCookies') === 'true')
    }
  }, [isOpen])

  const handleSave = () => {
    localStorage.setItem('cookieConsent', 'custom')
    localStorage.setItem('analyticsCookies', String(analyticsCookies))
    localStorage.setItem('marketingCookies', String(marketingCookies))
    onSave()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <h3 className="text-2xl font-semibold mb-6">Cookie-Einstellungen</h3>
        
        <div className="space-y-6">
          <div className="cookie-option">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked
                disabled
                className="mr-3"
              />
              <span className="font-medium">Essenzielle Cookies</span>
            </label>
            <p className="text-gray-600 text-sm ml-7">
              Diese Cookies sind für die Grundfunktionen der Website erforderlich.
            </p>
          </div>

          <div className="cookie-option">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={analyticsCookies}
                onChange={(e) => setAnalyticsCookies(e.target.checked)}
                className="mr-3"
              />
              <span className="font-medium">Analyse-Cookies</span>
            </label>
            <p className="text-gray-600 text-sm ml-7">
              Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.
            </p>
          </div>

          <div className="cookie-option">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={marketingCookies}
                onChange={(e) => setMarketingCookies(e.target.checked)}
                className="mr-3"
              />
              <span className="font-medium">Marketing-Cookies</span>
            </label>
            <p className="text-gray-600 text-sm ml-7">
              Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  )
}