import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

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
          <form 
            style={{ position: 'relative' }}
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
              }
            }}
          >
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', transition: 'all var(--transition-fast)' }}
              onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--primary))'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}
            />
          </form>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative' }}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ background: 'transparent', border: 'none', color: showNotifications ? 'white' : 'var(--text-secondary)', cursor: 'pointer', position: 'relative' }} 
            className="icon-btn"
          >
            <Bell size={20} />
            <span style={{ position: 'absolute', top: '-2px', right: '-4px', width: '8px', height: '8px', background: 'hsl(var(--primary))', borderRadius: '50%', border: '2px solid background' }}></span>
          </button>
          
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div style={{ position: 'absolute', top: '100%', right: '3rem', marginTop: '1rem', width: '320px', background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden', zIndex: 100 }}>
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>Notifications</h3>
              </div>
              <div style={{ padding: '0' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', background: 'hsl(var(--primary))', borderRadius: '50%', marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'white', marginBottom: '0.25rem' }}>Your course "Machine Learning" has a new module available.</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>2 hours ago</div>
                  </div>
                </div>
                <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '1rem', opacity: 0.6 }}>
                  <div style={{ width: '8px', height: '8px', background: 'transparent', borderRadius: '50%', marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'white', marginBottom: '0.25rem' }}>Welcome to SkillSphere! Start exploring our catalog today.</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>1 day ago</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '0.75rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <button onClick={() => setShowNotifications(false)} style={{ background: 'none', border: 'none', color: 'hsl(var(--primary))', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }}>Mark all as read</button>
              </div>
            </div>
          )}

          <Link to="/dashboard" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
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
