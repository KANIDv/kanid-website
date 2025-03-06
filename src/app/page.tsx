import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Willkommen bei KANID
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ihre vertrauenswürdige Adresse für professionelle IT-Dienstleistungen
          </p>
          <Link 
            href="/kontakt" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kontaktieren Sie uns
          </Link>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">IT-Beratung</h3>
            <p className="text-gray-600">
              Professionelle Beratung für Ihre IT-Infrastruktur und digitale Transformation
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Softwareentwicklung</h3>
            <p className="text-gray-600">
              Maßgeschneiderte Softwarelösungen für Ihre individuellen Anforderungen
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">IT-Support</h3>
            <p className="text-gray-600">
              Zuverlässiger technischer Support und Wartung für Ihre Systeme
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Über Uns</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            KANID ist Ihr Partner für innovative IT-Lösungen. Mit jahrelanger Erfahrung 
            und einem engagierten Team von Experten unterstützen wir Sie bei der 
            Digitalisierung Ihres Unternehmens.
          </p>
        </section>
      </div>
    </main>
  )
}