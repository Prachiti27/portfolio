import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "TechStack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-primary">
          Prachiti Kitey
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ModeToggle />
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-background py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ModeToggle />
        </div>
      )}
    </nav>
  )
}

export default Navbar
