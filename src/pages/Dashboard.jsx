import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock } from 'lucide-react';

const Dashboard = () => {
  const { enrolledCourses, courseProgress } = useAppContext();
  const [activeTab, setActiveTab] = useState('active');

  const getProgress = (courseId) => {
    const progress = courseProgress[courseId] || {};
    const completedCount = Object.values(progress).filter(Boolean).length;
    return Math.min(Math.round((completedCount / 5) * 100), 100);
  };

  const activeCourses = enrolledCourses.filter(c => getProgress(c.id) < 100);
  const completedCourses = enrolledCourses.filter(c => getProgress(c.id) === 100);

  const StatCard = ({ icon, label, value, color }) => (
    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--glass-border)' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div>
        <div className="text-muted" style={{ fontSize: '0.85rem' }}>{label}</div>
      </div>
    </div>
  );

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          JD
        </div>
        <div>
          <h1 className="heading-lg">Welcome back, John</h1>
          <p className="text-muted">You're making great progress. Keep it up!</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <StatCard icon={<BookOpen size={24} />} label="Enrolled" value={enrolledCourses.length} color="hsl(var(--primary))" />
        <StatCard icon={<Clock size={24} />} label="In Progress" value={activeCourses.length} color="hsl(30, 90%, 60%)" />
        <StatCard icon={<Award size={24} />} label="Completed" value={completedCourses.length} color="hsl(140, 70%, 50%)" />
      </div>

      <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
        {[
          { id: 'active', label: `In Progress (${activeCourses.length})` },
          { id: 'completed', label: `Completed (${completedCourses.length})` }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ 
              padding: '0.75rem 0', 
              background: 'none', 
              border: 'none', 
              color: activeTab === tab.id ? 'hsl(var(--primary))' : 'var(--text-secondary)',
              fontWeight: '600',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.2s'
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '2px', background: 'hsl(var(--primary))' }}></div>
            )}
          </button>
        ))}
      </div>
      
      {(activeTab === 'active' ? activeCourses : completedCourses).length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px dashed var(--glass-border)', marginBottom: '4rem' }}>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
            {activeTab === 'active' ? "You don't have any courses in progress." : "You haven't completed any courses yet."}
          </p>
          <Link to="/catalog" className="btn btn-primary" style={{ display: 'inline-block', padding: '0.75rem 1.5rem' }}>
            Browse Catalog
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {(activeTab === 'active' ? activeCourses : completedCourses).map((course) => (
            <div key={course.id} className="glass-card animate-slide-up" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '140px', background: course.gradient, opacity: 0.9 }}></div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ color: 'hsl(var(--primary))', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.5rem' }}>{course.category}</div>
                <h3 style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '1.5rem', flex: 1, color: 'var(--text-primary)' }}>{course.title}</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span>{activeTab === 'active' ? 'Course Progress' : 'Course Completed'}</span>
                    <span>{getProgress(course.id)}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${getProgress(course.id)}%`, height: '100%', background: activeTab === 'active' ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' : 'hsl(140, 70%, 50%)', borderRadius: '3px', transition: 'width 0.5s ease-out' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to={`/learn/${course.id}`} className="btn" style={{ flex: 1, padding: '0.6rem', textAlign: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '0.5rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                    {activeTab === 'active' ? 'Continue' : 'Review'}
                  </Link>
                  {activeTab === 'completed' && (
                    <Link to={`/certificate/${course.id}`} className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', textAlign: 'center', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                      <Award size={16} /> Certificate
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
