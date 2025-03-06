'use client'

import { useState, useEffect } from 'react'
import CookieModal from './CookieModal'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('analyticsCookies', 'true')
    localStorage.setItem('marketingCookies', 'true')
    setShowBanner(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('analyticsCookies', 'false')
    localStorage.setItem('marketingCookies', 'false')
    setShowBanner(false)
  }

  const openSettings = () => {
    setShowModal(true)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Cookie-Einstellungen</h3>
          <p className="mb-6">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Weitere Informationen finden Sie in unserer{' '}
            <a href="/datenschutz" className="text-primary-600 hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={acceptAll}
              className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={acceptEssential}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
            >
              Nur essenzielle Cookies
            </button>
            <button
              onClick={openSettings}
              className="border border-primary-600 text-primary-600 px-6 py-2 rounded hover:bg-primary-50"
            >
              Einstellungen
            </button>
          </div>
        </div>
      </div>
      <CookieModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => setShowModal(false)}
      />
    </>
  )
}