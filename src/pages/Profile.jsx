import { useAppContext } from '../context/AppContext';
import { Award, BookOpen, CheckCircle, Clock, Shield, Star, Mail, MapPin, Rocket, LogOut } from 'lucide-react';

const Profile = () => {
  const { enrolledCourses, courseProgress } = useAppContext();

  const completedCourses = enrolledCourses.filter(course => {
    const progress = courseProgress[course.id] || {};
    const completedCount = Object.values(progress).filter(Boolean).length;
    return completedCount === 5;
  });

  const StatItem = ({ icon, label, value }) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ color: 'hsl(var(--primary))', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>{value}</div>
      <div className="text-muted" style={{ fontSize: '0.8rem' }}>{label}</div>
    </div>
  );

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Left: Profile Info */}
        <aside>
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', border: '4px solid rgba(255,255,255,0.1)' }}>
              JD
            </div>
            <h1 className="heading-md" style={{ marginBottom: '0.5rem' }}>John Doe</h1>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Passionately learning Data Science & Web Dev</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} /> john.doe@example.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} /> San Francisco, CA
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Shield size={16} /> ID Verified
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                Log In
              </button>
              <button 
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444', borderRadius: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '600', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
              >
                <LogOut size={18} /> Log Out
              </button>
            </div>
          </div>
        </aside>

        {/* Right: Stats & Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Quick Stats */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', border: '1px solid var(--glass-border)' }}>
            <StatItem icon={<BookOpen size={20} />} label="Enrolled" value={enrolledCourses.length} />
            <StatItem icon={<CheckCircle size={20} />} label="Completed" value={completedCourses.length} />
            <StatItem icon={<Clock size={20} />} label="Hours" value={enrolledCourses.length * 12} />
            <StatItem icon={<Star size={20} />} label="Points" value={completedCourses.length * 500 + 150} />
          </div>

          {/* Achievements */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Achievements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
              {[
                { title: "Fast Learner", icon: <Rocket size={24} />, date: "Oct 2024" },
                { title: "Top 1%", icon: <Award size={24} />, date: "Sept 2024" },
                { title: "Certified", icon: <Shield size={24} />, date: "Aug 2024" },
              ].map((badge, i) => (
                <div key={i} className="glass" style={{ padding: '1.5rem 1rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ color: 'hsl(var(--accent))', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{badge.icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>{badge.title}</div>
                  <div className="text-muted" style={{ fontSize: '0.7rem' }}>{badge.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Recent Activity</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {enrolledCourses.slice(0, 3).map((course, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'hsl(var(--primary))' }}></div>
                  <div style={{ fontSize: '0.9rem' }}>
                    You made progress in <span style={{ fontWeight: '600' }}>{course.title}</span>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Today</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
