import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  variant?: "default" | "black";
}

const Header: React.FC<HeaderProps> = ({ variant = "default" }) => {
  const isBlack = variant === "black";
  const location = useLocation();

  return (
    <header
  className={`w-full ${
    isBlack
      ? "bg-black text-white border-b border-gray-700"  
      : "bg-white text-black"                          
  }`}
>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/08fc4c04-8697-4208-88bd-114b9a0d94cb.png"
            alt="Bitcoin Culture Hub Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-bold text-lg">Bitcoin Culture Hub</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/about"
            className={`transition-colors ${
              isBlack ? "text-zinc-300 hover:text-white" : "text-zinc-600 hover:text-orange-600"
            }`}
          >
            About
          </Link>
          <Link
            to="/explore"
            className={`transition-colors ${
              isBlack ? "text-zinc-300 hover:text-white" : "text-zinc-600 hover:text-orange-600"
            }`}
          >
            Explore
          </Link>
          <Link
            to="/archetypes"
            className={`transition-colors ${
              isBlack ? "text-zinc-300 hover:text-white" : "text-zinc-600 hover:text-orange-600"
            }`}
          >
            Archetypes
          </Link>

          {/* Sign In button logic */}
          {((variant === "default") || (variant === "black" && location.pathname === "/register")) && (
            <Link
              to="/login"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
