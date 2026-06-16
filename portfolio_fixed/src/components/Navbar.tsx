import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Industries', path: '/industries' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const darkHeroPages = ['/', '/case-studies', '/certifications'];
  const isDarkHero = darkHeroPages.includes(location.pathname);
  const useLightText = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FEFBF6]/90 backdrop-blur-md shadow-sm'
            : isDarkHero
            ? 'bg-transparent border-b border-[#FEFBF6]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className={`font-display font-bold text-sm tracking-[0.15em] transition-colors hover:text-[#00B8A9] ${
              useLightText ? 'text-[#FEFBF6]' : 'text-[#2B3A4E]'
            }`}
          >
            AHMAD BIN SADIQ
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-[13px] font-medium uppercase tracking-[0.05em] transition-colors relative ${
                  location.pathname === link.path
                    ? 'text-[#00B8A9]'
                    : useLightText
                    ? 'text-[#FEFBF6]/80 hover:text-[#00B8A9]'
                    : 'text-[#2B3A4E] hover:text-[#00B8A9]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00B8A9]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors hover:text-[#00B8A9] ${
              useLightText ? 'text-[#FEFBF6]' : 'text-[#2B3A4E]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-[#2B3A4E] p-8 pt-24 transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-sm font-medium uppercase tracking-[0.05em] transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00B8A9]'
                    : 'text-[#FEFBF6]/80 hover:text-[#00B8A9]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#FEFBF6]/10">
            <p className="micro-label text-[#FEFBF6]/40 mb-2">Get in touch</p>
            <a
              href="mailto:ahmadbinsadiq@gmail.com"
              className="text-sm text-[#FEFBF6]/70 hover:text-[#00B8A9] transition-colors"
            >
              ahmadbinsadiq@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
