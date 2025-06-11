
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">PlantID</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/identify" className="text-sm font-medium hover:text-primary">
            Identify
          </Link>
          <Link to="/history" className="text-sm font-medium hover:text-primary">
            History
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/identify">
            <Button>Identify Plant</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;