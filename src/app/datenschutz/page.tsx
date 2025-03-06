export default function DatenschutzPage() {
  return (
    <main className="legal-content pt-20">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="legal-section">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>Die KANID UG (haftungsbeschränkt) nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. Im Folgenden informieren wir Sie über die Erhebung, Speicherung und Nutzung Ihrer Daten sowie über Ihre Rechte nach Maßgabe der Datenschutz-Grundverordnung (DSGVO) und weiterer Datenschutzgesetze.</p>

        <h2 className="mt-8">2. Verantwortlicher</h2>
        <p>KANID UG (haftungsbeschränkt)<br />
        Musterstraße 1<br />
        72770 Reutlingen<br />
        Deutschland</p>
        <p>Telefon: +49 123 456 789<br />
        E-Mail: <a href="mailto:info@kanid-ug.de" className="text-primary-600 hover:underline">info@kanid-ug.de</a></p>

        <h2 className="mt-8">3. Erhebung und Speicherung personenbezogener Daten</h2>
        <h3>3.1 Zugriffsdaten / Server-Logfiles</h3>
        <p>Beim Besuch unserer Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert, darunter:</p>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>Browsertyp und Version</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL (die zuvor besuchte Seite)</li>
          <li>IP-Adresse (ggf. in gekürzter/anonymisierter Form)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
        </ul>

        <h3 className="mt-6">3.2 Kontaktformular</h3>
        <p>Wenn Sie über unser Kontaktformular mit uns in Verbindung treten, verarbeiten wir die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht).</p>
        <p>Verarbeitungszweck: Bearbeitung Ihrer Anfrage und Kontaktaufnahme.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).</p>

        <h2 className="mt-8">4. Cookies</h2>
        <p>Unsere Website verwendet Cookies. Dabei unterscheiden wir:</p>
        <p><strong>Notwendige Cookies:</strong> Diese sind technisch erforderlich, um bestimmte Funktionen auf unserer Website bereitzustellen.</p>
        <p><strong>Analyse- / Marketing-Cookies:</strong> Diese dienen der statistischen Auswertung oder dem Marketing.</p>

        <h2 className="mt-8">5. Ihre Rechte</h2>
        <p>Sie haben als betroffene Person folgende Rechte:</p>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Beschwerde (Art. 77 DSGVO)</li>
        </ul>

        <h2 className="mt-8">6. Datensicherheit</h2>
        <p>Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Zerstörung zu schützen. Unsere Website nutzt eine SSL-/TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu sichern.</p>

        <h2 className="mt-8">7. Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, insbesondere wenn sich rechtliche Anforderungen ändern oder wir neue Dienste einführen.</p>
        <p>Stand: März 2024</p>
      </div>
    </main>
  )
}