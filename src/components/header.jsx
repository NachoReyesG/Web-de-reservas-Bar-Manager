import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="bg-gray-800 text-white p-4 shadow">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-semibold">BarBooking</h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Bares
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-gray-300">
              Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
