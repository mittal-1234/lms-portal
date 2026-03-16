import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/learn/')) {
    return null;
  }

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0', marginTop: '4rem', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}>
                L
              </div>
              <span className="heading-md" style={{ fontSize: '1.25rem', margin: 0 }}>SkillSphere</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Empowering global learners with world-class education and beautiful experiences.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>SkillSphere</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>About</a></li>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Careers</a></li>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Community</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Learners</a></li>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Partners</a></li>
              <li><a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Developers</a></li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} SkillSphere Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="text-muted" style={{ fontSize: '0.85rem' }}>Privacy</a>
            <a href="#" className="text-muted" style={{ fontSize: '0.85rem' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
