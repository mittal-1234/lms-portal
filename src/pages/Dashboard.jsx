import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { enrolledCourses, courseProgress } = useAppContext();

  const getProgress = (courseId) => {
    const progress = courseProgress[courseId] || {};
    const completedCount = Object.values(progress).filter(Boolean).length;
    // Assuming 5 modules per course for exactly how LearnView defines it
    return Math.min(Math.round((completedCount / 5) * 100), 100);
  };

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

      <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>In Progress ({enrolledCourses.length})</h2>
      
      {enrolledCourses.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px dashed var(--glass-border)', marginBottom: '4rem' }}>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>You haven't enrolled in any courses yet.</p>
          <Link to="/catalog" className="btn btn-primary" style={{ display: 'inline-block', padding: '0.75rem 1.5rem' }}>
            Browse Catalog
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {enrolledCourses.map((course) => (
            <Link to={`/learn/${course.id}`} key={course.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ height: '140px', background: course.gradient, opacity: 0.9 }}></div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ color: 'hsl(var(--primary))', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.5rem' }}>{course.category}</div>
                <h3 style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '1.5rem', flex: 1, color: 'var(--text-primary)' }}>{course.title}</h3>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span>Course Progress</span>
                    <span>{getProgress(course.id)}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${getProgress(course.id)}%`, height: '100%', background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))', borderRadius: '3px', transition: 'width 0.5s ease-out' }}></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Saved Courses</h2>
      <p className="text-muted">You haven't saved any courses yet.</p>
    </div>
  );
};

export default Dashboard;
