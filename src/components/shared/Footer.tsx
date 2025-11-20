import { Github, Linkedin, Mail, Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--military-accent)] bg-[var(--military-base)] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-[var(--military-accent)] flex items-center justify-center">
                <span className="text-[var(--military-accent)] font-bold">P</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--military-accent)] uppercase tracking-wider">
                PRATHAM ISRANI
              </h3>
            </div>
            <p className="text-[var(--military-text)] text-sm leading-relaxed font-mono">
              &gt; Full-Stack Developer<br/>
              &gt; SIH 2024 Finalist<br/>
              &gt; Mission: Build. Deploy. Dominate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[var(--military-tactical)] uppercase tracking-wider border-b border-[var(--military-border)] pb-2">
              [ NAV ]
            </h4>
            <div className="space-y-2 font-mono">
              <Link href="/projects" className="block text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm">
                &gt; Projects
              </Link>
              <Link href="/skills" className="block text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm">
                &gt; Skills
              </Link>
              <Link href="/contact" className="block text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm">
                &gt; Contact
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[var(--military-tactical)] uppercase tracking-wider border-b border-[var(--military-border)] pb-2">
              [ COMMS ]
            </h4>
            <div className="flex flex-col space-y-3 font-mono">
              <a 
                href="https://github.com/Pratham2703005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm"
              >
                <Github className="h-5 w-5" />
                <span>&gt; GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/pratham-israni-a6b672275/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm"
              >
                <Linkedin className="h-5 w-5" />
                <span>&gt; LinkedIn</span>
              </a>
              
              <a 
                href="https://leetcode.com/u/Pratham012/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm"
              >
                <Code className="h-5 w-5" />
                <span>&gt; LeetCode</span>
              </a>
              
              <a 
                href="mailto:pk2732004@gmail.com"
                className="flex items-center gap-3 text-[var(--military-text)] hover:text-[var(--military-accent)] transition-colors text-sm"
              >
                <Mail className="h-5 w-5" />
                <span>&gt; Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--military-border)] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-mono">
            <p className="text-[var(--military-text)] text-xs">
              © {new Date().getFullYear()} PRATHAM ISRANI // ALL RIGHTS RESERVED
            </p>
            <p className="text-[var(--military-tactical)] text-xs font-bold">
              [ BUILT WITH NEXT.JS + TYPESCRIPT ]
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}