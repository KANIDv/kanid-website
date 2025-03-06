import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Konstruktionsberatung',
    description: 'CAD-Konstruktion & Design mit SolidWorks und OnShape, Fertigungszeichnungen, Stücklisten und Prototypen. Inklusive Festigkeitsberechnungen und Optimierung von Metallkonstruktionen.',
    icon: '/icons/konstruktion-icon.svg'
  },
  {
    title: 'Prozess- und Produktionsoptimierung',
    description: 'Lean Manufacturing für metallverarbeitende Betriebe, Prozessoptimierung und Einführung neuer Softwarelösungen. Inklusive Mitarbeiterschulung und Qualitätsmanagement.',
    icon: '/icons/process-icon.svg'
  },
  {
    title: 'Aftersales- und Servicekonzepte',
    description: 'Professionelles Reklamations- und Beschwerdemanagement, Optimierung der Kundenservice-Strukturen und Mitarbeiterschulungen für PV- und Maschinenbau.',
    icon: '/icons/service-icon.svg'
  },
  {
    title: '3D-Druck Service',
    description: 'Professioneller Prototypenbau, Fertigung von Kleinserien und Sonderlösungen. Beratung zum Einsatz von 3D-Druckern im betrieblichen Umfeld.',
    icon: '/icons/3d-print-icon.svg'
  }
]

export default function LeistungenPage() {
  return (
    <main className="pt-20">
      <section className="services-section">
        <h1 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h1>
        <div className="services-grid max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </main>
  )
}