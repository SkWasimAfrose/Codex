import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-extrabold text-brand">EduGuru</Link>
        <div className="hidden gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="text-sm font-medium text-slate-600 hover:text-brand">{link.label}</NavLink>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
