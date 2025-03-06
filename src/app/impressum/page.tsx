export default function ImpressumPage() {
  return (
    <main className="legal-content pt-20">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="legal-section">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>KANID UG (haftungsbeschränkt)</p>
        <p>Musterstraße 1</p>
        <p>12345 Musterstadt</p>

        <h2 className="mt-8">Vertreten durch</h2>
        <p>Konstantin Vinogradov</p>

        <h2 className="mt-8">Kontakt</h2>
        <p>Telefon: +49 123 456 789</p>
        <p>E-Mail: <a href="mailto:info@kanid-ug.de" className="text-primary-600 hover:underline">info@kanid-ug.de</a></p>

        <h2 className="mt-8">Registereintrag</h2>
        <p>Eintragung im Handelsregister</p>
        <p>Registergericht: Amtsgericht Musterstadt</p>
        <p>Registernummer: HRB 12345</p>

        <h2 className="mt-8">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
        <p>DE123456789</p>

        <h2 className="mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Konstantin Vinogradov</p>
        <p>Musterstraße 1</p>
        <p>12345 Musterstadt</p>
      </div>
    </main>
  )
}