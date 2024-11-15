import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-80 bg-white shadow-lg p-6 sticky top-0 h-screen">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
          <Image
            src="/your-image.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <p className="text-cyan-600 font-medium">Full Stack Developer</p>
        
        <div className="mt-4 text-gray-600 text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-cyan-600 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-cyan-600 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-cyan-600 transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
} 