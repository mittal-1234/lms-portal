import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, User, LogOut, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your course "Machine Learning" has a new module available.', time: '2 hours ago', read: false },
    { id: 2, text: 'Welcome to SkillSphere! Start exploring our catalog today.', time: '1 day ago', read: true }
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a new notification appearing after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setNotifications(prev => [
        { id: Date.now(), text: 'Trending: "Generative AI for Everyone" is now available!', time: 'Just now', read: false },
        ...prev
      ]);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

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
          
          <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/catalog" style={{ color: location.pathname === '/catalog' ? 'var(--text-primary)' : 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Explore</Link>
            <Link to="/dashboard" style={{ color: location.pathname === '/dashboard' ? 'var(--text-primary)' : 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>My Learning</Link>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Resume Builder</a>
          </div>
        </div>

        {/* Center: Search (Desktop) */}
        <div className="desktop-search" style={{ flex: 1, maxWidth: '400px', margin: '0 1rem' }}>
          <form 
            style={{ position: 'relative' }}
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
              }
            }}
          >
            <button 
              type="submit" 
              style={{ position: 'absolute', left: '0.25rem', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Search size={18} />
            </button>
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.75rem', borderRadius: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', transition: 'all var(--transition-fast)' }}
              onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--primary))'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}
            />
          </form>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', position: 'relative' }}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ background: 'transparent', border: 'none', color: showNotifications ? 'white' : 'var(--text-secondary)', cursor: 'pointer', position: 'relative' }} 
            className="icon-btn"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span style={{ position: 'absolute', top: '-2px', right: '-4px', width: '8px', height: '8px', background: 'hsl(var(--primary))', borderRadius: '50%', border: '2px solid rgb(15, 23, 42)' }}></span>
            )}
          </button>
          
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div style={{ position: 'absolute', top: '100%', right: '3rem', marginTop: '1rem', width: '320px', background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden', zIndex: 100 }}>
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>Notifications</h3>
                {unreadCount > 0 && <span style={{ fontSize: '0.75rem', background: 'hsl(var(--primary))', padding: '0.1rem 0.4rem', borderRadius: '1rem', fontWeight: '600' }}>{unreadCount}</span>}
              </div>
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {notifications.map(n => (
                  <div key={n.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '1rem', opacity: n.read ? 0.6 : 1 }}>
                    <div style={{ width: '8px', height: '8px', background: n.read ? 'transparent' : 'hsl(var(--primary))', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }}></div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'white', marginBottom: '0.25rem', lineHeight: 1.4 }}>{n.text}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '0.75rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <button onClick={markAllRead} style={{ background: 'none', border: 'none', color: 'hsl(var(--primary))', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }}>Mark all as read</button>
              </div>
            </div>
          )}

          <Link to="/profile" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
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
