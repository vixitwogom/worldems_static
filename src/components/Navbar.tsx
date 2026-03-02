import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Leadership", path: "/leadership" },
  { label: "Contact", path: "/contact" },
];
    
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation click
  const handleNavClick = (link: any) => {
    if (link.path) {
      navigate(link.path);
    } else {
      navigate(`/#${link.id}`);
    }
    setMobileOpen(false);
  };

  // Scroll to section when hash changes (important fix)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Active state checker
  const isActive = (link: any) => {
    if (link.path) {
      return location.pathname === link.path;
    }

    return location.hash === `#${link.id}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-sm">
              W
            </span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            World<span className="text-[#007fff]">EMS</span>
          </span> */}
          <img src="./logos/wogomlogo.png" alt="" style={{height:'40px'}}/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`nav-link font-chivo font-medium text-sm transition-all pb-1 bg-transparent border-none cursor-pointer ${isActive(link)
                  ? "nav-link-active text-blue-deep font-semibold"
                  : "text-grey-400 hover:text-blue-deep"
                }`}
            >
              {link.label}
            </button>
          ))}

          <Button
            asChild
            size="sm"
            className="bg-blue-mid hover:bg-blue-deep text-white shadow-lg shadow-blue-mid/20 transition-all active:scale-95"
          >
            <Link to="/#contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`block font-chivo text-sm transition-all bg-transparent border-none cursor-pointer text-left w-full pl-3 border-l-2 ${isActive(link)
                  ? "text-blue-deep border-accent font-bold"
                  : "text-grey-400 hover:text-blue-deep hover:border-accent hover:font-bold border-transparent"
                }`}
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-blue-mid text-primary-foreground font-chivo font-bold text-sm px-5 py-3 rounded-lg text-center shadow-lg shadow-blue-mid/20 active:scale-95 transition-all"
          >
            Partner With Us →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;