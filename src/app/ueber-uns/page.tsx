import Image from 'next/image'

export default function UeberUnsPage() {
  return (
    <main className="pt-20">
      <section className="about-section">
        <div className="about-content max-w-7xl mx-auto px-4">
          <div className="about-image">
            <Image
              src="/images/konstantin.jpg"
              alt="Konstantin Vinogradov"
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="about-text">
            <h1 className="text-3xl font-bold mb-6">Über uns</h1>
            <p className="mb-4">
              Als staatlich geprüfter Techniker mit langjähriger Erfahrung im Maschinenbau 
              bieten wir Ihnen fundierte Expertise in allen technischen Bereichen.
            </p>
            <p className="mb-6">
              Unsere Erfahrung begann in der Metallverarbeitung und führte über verschiedene 
              Positionen in der Konstruktion bis hin zum Head of Aftersales. Diese vielfältige 
              Erfahrung ermöglicht es uns, Ihre Projekte ganzheitlich zu betrachten und optimal 
              umzusetzen.
            </p>
            <div className="expertise-list">
              <h2 className="text-xl font-semibold mb-4">Unsere Expertise:</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary-600 mr-2">→</span>
                  CAD-Konstruktion & 3D-Modellierung
                </li>
                <li className="flex items-center">
                  <span className="text-secondary-600 mr-2">→</span>
                  Additive Fertigung & 3D-Druck
                </li>
                <li className="flex items-center">
                  <span className="text-secondary-600 mr-2">→</span>
                  Technische Dokumentation
                </li>
                <li className="flex items-center">
                  <span className="text-secondary-600 mr-2">→</span>
                  Prozessoptimierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}