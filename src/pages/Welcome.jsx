import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-white">
      <div className="text-center p-8 rounded-2xl shadow-2xl bg-black bg-opacity-40 backdrop-blur-md">
        <h1 className="text-5xl font-bold mb-4">Welcome to <span className="text-yellow-300">CollabX 🚀</span></h1>
        <p className="text-lg mb-6">Connect. Collaborate. Create.</p>
        <div className="space-x-4">
          <Link to="/login" className="px-6 py-2 bg-white text-black rounded-full hover:bg-yellow-300 transition">Login</Link>
          <Link to="/signup" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Signup</Link>
        </div>
      </div>
    </div>
  );
}
