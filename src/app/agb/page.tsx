export default function AGBPage() {
  return (
    <main className="legal-content pt-20">
      <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <div className="legal-section">
        <h2>§ 1 Geltungsbereich</h2>
        <p>Diese AGB gelten für sämtliche Verträge, die über die Website der KANID UG (haftungsbeschränkt) (nachfolgend "KANID" oder "wir") mit Kunden ("Vertragspartner") geschlossen werden. Sie gelten ebenso für Offline-Verträge, sofern im Einzelfall nicht ausdrücklich etwas anderes vereinbart ist.</p>

        <h2 className="mt-8">§ 2 Vertragsgegenstand</h2>
        <p>KANID erbringt Dienstleistungen in den Bereichen Ingenieur-/Konstruktionsberatung, Prozess- und Produktionsoptimierung, Aftersales- und Servicekonzepte sowie 3D-Druck als Zusatzangebot.</p>
        <p>Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung im Angebot oder Vertrag.</p>

        <h2 className="mt-8">§ 3 Vertragsschluss</h2>
        <p>Unsere Angebote sind freibleibend und unverbindlich.</p>
        <p>Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch den Beginn der Leistungserbringung zustande.</p>

        <h2 className="mt-8">§ 4 Preise und Zahlungsbedingungen</h2>
        <p>Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.</p>
        <p>Die Zahlung erfolgt per Rechnung, fällig innerhalb von 14 Tagen ab Rechnungsdatum.</p>

        <h2 className="mt-8">§ 5 Widerrufsrecht (für Verbraucher)</h2>
        <div className="bg-gray-50 p-6 rounded-lg mt-4">
          <h3 className="font-semibold mb-4">Widerrufsbelehrung</h3>
          <p>Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
          <p className="mt-2">Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses.</p>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Muster-Widerrufsformular</h3>
            <div className="border p-4 rounded">
              <p className="mb-4">An:<br />
              KANID UG (haftungsbeschränkt)<br />
              Musterstraße 1<br />
              72770 Reutlingen<br />
              Deutschland<br />
              E-Mail: info@kanid.de</p>

              <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung folgender Dienstleistung:</p>
              
              <div className="my-4 border-b border-gray-300"></div>
              
              <p>Bestellt/abgeschlossen am:</p>
              <div className="my-4 border-b border-gray-300"></div>
              
              <p>Name des/der Verbraucher(s):</p>
              <div className="my-4 border-b border-gray-300"></div>
              
              <p>Anschrift des/der Verbraucher(s):</p>
              <div className="my-4 border-b border-gray-300"></div>
              
              <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
              <div className="my-4 border-b border-gray-300"></div>
              
              <p>Datum:</p>
              <div className="my-4 border-b border-gray-300"></div>
              
              <p className="text-sm text-gray-600">(*) Unzutreffendes bitte streichen.</p>
            </div>
          </div>
        </div>

        <h2 className="mt-8">§ 6 Haftung</h2>
        <p>Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
        <p>Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).</p>

        <h2 className="mt-8">§ 7 Schlussbestimmungen</h2>
        <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
        <p>Gerichtsstand ist – soweit gesetzlich zulässig – Reutlingen.</p>
        <p>Stand: März 2024</p>
      </div>
    </main>
  )
}