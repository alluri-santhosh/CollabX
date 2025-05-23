import { Link } from "react-router-dom";
import { RocketLaunchIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold">CollabX</span>
        <RocketLaunchIcon className="h-6 w-6" />
      </Link>
      <div className="space-x-6 flex items-center">
        <Link to="/login" className="flex items-center space-x-1 hover:underline">
          <UserIcon className="h-5 w-5" />
          <span>Login</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-1 hover:underline">
          <UserPlusIcon className="h-5 w-5" />
          <span>Signup</span>
        </Link>
      </div>
    </nav>
  );
}
