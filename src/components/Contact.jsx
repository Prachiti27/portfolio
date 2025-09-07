import React, { useState } from "react"
import { Mail, Phone } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("This is a static form for display purposes only.")
  }

  return (
    <section id="contact" className="py-16 px-6 md:px-0 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
        Let's Connect
      </h2>
      <p className="text-center text-foreground/80 mb-12">
        Looking for your company’s next engineer? I’m just one chat away! Drop me a
        message below.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
          className="px-4 py-3 rounded-lg border border-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/80 transition"
        >
          Send Message
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-10 text-foreground/80">
        <a
          href="mailto:prachitikitey86@gmail.com"
          className="flex items-center gap-2 hover:text-primary transition"
        >
          <Mail size={20} /> prachitikitey86@gmail.com
        </a>
      </div>
    </section>
  )
}

export default Contact
