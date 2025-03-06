import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="service-card bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:transform hover:-translate-y-2 transition-all">
      <div className="service-icon mb-6">
        <Image
          src={icon}
          alt={`${title} Icon`}
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-primary-600">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href="/kontakt"
        className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
      >
        Mehr erfahren
        <span className="ml-2">→</span>
      </Link>
    </div>
  )
}