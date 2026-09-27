import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css';

export function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  
  const location = useLocation(); 
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        const targetId = location.hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate(`/${href}`);
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', href);
      setActiveSection(href);
    }
    closeNav();
  };

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#work", label: "WORK" },
    { href: "#blogs", label: "BLOGS" },
    { href: "#cves", label: "CVES" },
    { href: "#honours", label: "HONOURS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className={`topbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="prompt">
          root@kirtiar:~#<span className="cursor" />
        </div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={location.pathname === '/' && activeSection === link.href ? "active" : ""}
              href={location.pathname === '/' ? link.href : `/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="menu" onClick={toggleTheme} aria-label="Toggle Theme">
            [{theme === "dark" ? "LIGHT" : "DARK"}]
          </button>

          <button
            className="menu mobile-toggle"
            onClick={toggleNav}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isNavOpen}
            aria-controls="mobile-sidebar"
          >
            [{isNavOpen ? "X" : "="}]
          </button>
        </div>
      </header>

      <div
        className={`sidebar-overlay ${isNavOpen ? "active" : ""}`}
        onClick={closeNav}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        className={`mobile-sidebar ${isNavOpen ? "open" : ""}`}
        aria-hidden={!isNavOpen}
      >
        <div className="sidebar-header">
          <span className="prompt">&gt; NAV_MENU</span>
          <button className="menu" onClick={closeNav} aria-label="Close Menu">
            [X]
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={location.pathname === '/' && activeSection === link.href ? "active" : ""}
              href={location.pathname === '/' ? link.href : `/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}