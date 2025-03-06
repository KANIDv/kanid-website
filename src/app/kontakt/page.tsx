import ContactForm from '@/components/ContactForm'

export default function KontaktPage() {
  return (
    <main className="pt-20">
      <section className="contact-section">
        <h1 className="text-3xl font-bold text-center mb-8">Kontakt aufnehmen</h1>
        <div className="contact-container max-w-6xl mx-auto">
          <div className="contact-info">
            <h2 className="text-2xl font-semibold mb-4">Direkte Kontaktaufnahme</h2>
            <p>Telefon: <a href="tel:+49123456789" className="text-primary-600 hover:text-primary-700">+49 123 456 789</a></p>
            <p>E-Mail: <a href="mailto:info@kanid-ug.de" className="text-primary-600 hover:text-primary-700">info@kanid-ug.de</a></p>
            <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}