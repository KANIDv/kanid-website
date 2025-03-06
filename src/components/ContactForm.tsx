'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Hier kommt später die Logik für das Absenden des Formulars
    console.log('Form submitted:', formData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border rounded focus:border-primary-600 focus:outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="block mb-2">E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border rounded focus:border-primary-600 focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="block mb-2">Nachricht</label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-2 border rounded focus:border-primary-600 focus:outline-none min-h-[150px]"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="bg-primary-600 text-white px-6 py-3 rounded hover:bg-primary-700 transition-colors"
      >
        Nachricht senden
      </button>
    </form>
  )
}