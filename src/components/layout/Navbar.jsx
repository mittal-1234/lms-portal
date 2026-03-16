import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Don't show regular navbar in the active learning view for a focused experience
  if (location.pathname.startsWith('/learn/')) {
    return null; 
  }

  return (
    <nav className="glass sticky top-0 z-50 w-full" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        
        {/* Left: Logo & Core Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
              L
            </div>
            <span className="heading-md" style={{ letterSpacing: '-0.02em', margin: 0 }}>SkillSphere</span>
          </Link>
          
          <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/catalog" style={{ color: location.pathname === '/catalog' ? 'var(--text-primary)' : 'var(--text-secondary)' }}>Explore</Link>
            <Link to="/dashboard" style={{ color: location.pathname === '/dashboard' ? 'var(--text-primary)' : 'var(--text-secondary)' }}>My Learning</Link>
          </div>
        </div>

        {/* Center: Search (Desktop) */}
        <div className="desktop-search" style={{ flex: 1, maxWidth: '400px', margin: '0 2rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', transition: 'all var(--transition-fast)' }}
              onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--primary))'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }} className="icon-btn">
            <Bell size={20} />
          </button>
          <Link to="/dashboard" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <User size={18} />
          </Link>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-links, .desktop-search { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
