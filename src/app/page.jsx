'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-cyan-50 to-green-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-cyan-600 text-white'
                : 'bg-white text-cyan-600 hover:bg-cyan-50'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'projects'
                ? 'bg-cyan-600 text-white'
                : 'bg-white text-cyan-600 hover:bg-cyan-50'
            }`}
          >
            Projects
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'experience' ? <Experience /> : <Projects />}
        </div>
      </main>
    </div>
  );
} 