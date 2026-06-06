import { Link } from 'react-router';
import { Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Industries', path: '/industries' },
  { label: 'Certifications', path: '/certifications' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B3A4E]">
      {/* Giant CTA */}
      <div className="section-padding py-20 lg:py-32">
        <a
          href="mailto:ahmadbinsadiq@gmail.com"
          className="block font-display text-[#FEFBF6] text-[clamp(48px,8vw,120px)] leading-[0.9] font-medium hover:text-[#00B8A9] transition-colors duration-500"
        >
          LET'S BUILD
        </a>
      </div>

      {/* Info Columns */}
      <div className="section-padding border-t border-[#FEFBF6]/10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="micro-label text-[#FEFBF6]/40 mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-mono text-xs text-[#FEFBF6]/60 hover:text-[#00B8A9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="micro-label text-[#FEFBF6]/40 mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/ahmad-bin-sadiq"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#FEFBF6]/60 hover:text-[#00B8A9] transition-colors flex items-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/ahmadbinsadiq"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#FEFBF6]/60 hover:text-[#00B8A9] transition-colors flex items-center gap-2"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="mailto:ahmadbinsadiq@gmail.com"
                className="font-mono text-xs text-[#FEFBF6]/60 hover:text-[#00B8A9] transition-colors flex items-center gap-2"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
          <div>
            <p className="micro-label text-[#FEFBF6]/40 mb-4">Expertise</p>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#FEFBF6]/60">Lean Six Sigma</span>
              <span className="font-mono text-xs text-[#FEFBF6]/60">AI Manufacturing</span>
              <span className="font-mono text-xs text-[#FEFBF6]/60">Smart Factory</span>
              <span className="font-mono text-xs text-[#FEFBF6]/60">Industry 5.0</span>
            </div>
          </div>
          <div>
            <p className="micro-label text-[#FEFBF6]/40 mb-4">Location</p>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#FEFBF6]/60">Pakistan</span>
              <span className="font-mono text-xs text-[#FEFBF6]/60">Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding border-t border-[#FEFBF6]/10 py-6">
        <p className="font-mono text-[11px] text-[#FEFBF6]/40">
          2025 Ahmad Bin Sadiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
