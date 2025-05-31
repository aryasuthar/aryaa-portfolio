
import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900 border-b border-slate-800 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="text-white text-xl font-bold">Arya Suthar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Download CV
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
