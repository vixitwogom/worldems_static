import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: string) => {
    if (link === 'Products') {
      navigate('/products');
    } else if (location.pathname !== '/') {
      navigate(`/#${link.toLowerCase()}`);
    } else {
      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-sm">W</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            World<span className="text-[#007fff]">EMS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              (link.label === "Products" && location.pathname === "/products") ||
              (location.pathname === "/" &&
                (location.hash === link.href.replace("/", "") ||
                  (location.hash === "" && link.href === "/#about")));

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`nav-link font-chivo font-medium text-sm transition-all pb-1 bg-transparent border-none cursor-pointer ${isActive
                  ? "nav-link-active text-blue-deep font-semibold"
                  : "text-grey-400 hover:text-blue-deep hover:font-semibold"
                  }`}
              >
                {link.label}
              </button>
            );
          })}
          <Button asChild size="sm" className="bg-blue-mid hover:bg-blue-deep text-white shadow-lg shadow-blue-mid/20 transition-all active:scale-95">
            <Link to="/#contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive =
              (link.label === "Products" && location.pathname === "/products") ||
              (location.pathname === "/" &&
                (location.hash === link.href.replace("/", "") ||
                  (location.hash === "" && link.href === "/#about")));

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`block font-chivo text-sm transition-all bg-transparent border-none cursor-pointer text-left w-full pl-3 border-l-2 ${isActive
                  ? "text-blue-deep border-accent font-bold"
                  : "text-grey-400 hover:text-blue-deep hover:border-accent hover:font-bold border-transparent"
                  }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="#contact"
            className="block bg-blue-mid text-primary-foreground font-chivo font-bold text-sm px-5 py-3 rounded-lg text-center shadow-lg shadow-blue-mid/20 active:scale-95 transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Partner With Us →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
