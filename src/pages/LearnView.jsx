import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, CheckCircle, Circle, ChevronLeft, Menu } from 'lucide-react';

const LearnView = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock modules
  const modules = [
    { title: 'Welcome and Orientation', duration: '15 min', completed: true, active: false },
    { title: 'The Basics of the Subject', duration: '45 min', completed: true, active: false },
    { title: 'Deep Dive: Core Concepts', duration: '1 hr 20 min', completed: false, active: true },
    { title: 'Practical Application Exercise', duration: '45 min', completed: false, active: false },
    { title: 'End of Week Assessment', duration: '30 min', completed: false, active: false },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', background: '#000', color: 'white' }} className="animate-fade-in">
      
      {/* Sidebar Navigation */}
      <div style={{ width: sidebarOpen ? '320px' : '0', background: 'var(--bg-color)', borderRight: '1px solid var(--glass-border)', transition: 'width var(--transition-normal)', overflow: 'hidden', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to={`/course/${id || 'demo'}`} style={{ color: 'var(--text-secondary)' }}>
            <ChevronLeft size={24} />
          </Link>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Course Navigation
          </h2>
        </div>

        <div style={{ padding: '0 1.5rem', flex: 1, overflowY: 'auto' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500', margin: '1.5rem 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Module 1: Getting Started
          </div>
          
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '2rem' }}>
            {modules.map((mod, idx) => (
              <li key={idx}>
                <button 
                  style={{ 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: '1rem', 
                    background: mod.active ? 'rgba(59,130,246,0.1)' : 'transparent', 
                    border: '1px solid', 
                    borderColor: mod.active ? 'rgba(59,130,246,0.3)' : 'transparent', 
                    borderRadius: '0.5rem', 
                    display: 'flex', 
                    gap: '1rem', 
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    if (!mod.active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (!mod.active) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    {mod.completed ? <CheckCircle size={18} color="hsl(140, 70%, 50%)" /> : 
                     mod.active ? <PlayCircle size={18} color="hsl(var(--primary))" /> :
                     <Circle size={18} color="var(--text-secondary)" />}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: mod.active ? '600' : '400', color: mod.active ? 'white' : 'var(--text-primary)', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {mod.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Video • {mod.duration}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Topbar */}
        <div style={{ height: '4rem', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(180deg, rgba(0,0,0,0.8), transparent)', position: 'absolute', top: 0, left: sidebarOpen ? '320px' : '0', right: 0, zIndex: 10 }}>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', backdropFilter: 'blur(4px)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <Menu size={20} />
          </button>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', backdropFilter: 'blur(8px)', cursor: 'pointer' }}>
               Notes
             </button>
             <Link to="/dashboard" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer', display: 'inline-block' }}>
               Exit Lesson &rarr;
             </Link>
          </div>
        </div>

        {/* Video Player Area */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', position: 'relative' }}>
          
          {/* Placeholder for video player */}
          <div style={{ width: '80%', maxWidth: '1000px', aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <PlayCircle size={64} style={{ opacity: 0.5, marginBottom: '1rem' }} />
            <div className="heading-md" style={{ color: 'var(--text-secondary)' }}>Deep Dive: Core Concepts</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>1 hr 20 min</div>
          </div>

          {/* Player controls placeholder */}
          <div style={{ position: 'absolute', bottom: '2rem', width: '80%', maxWidth: '1000px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
            <div style={{ width: '35%', height: '100%', background: 'hsl(var(--primary))', borderRadius: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', right: '-6px', top: '-4px', width: '14px', height: '14px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}></div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default LearnView;
