import { useParams, Link } from 'react-router-dom';
import { mockCourses } from '../data/mockCourses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id) || mockCourses[0];

  return (
    <div className="animate-fade-in">
      <div style={{ background: 'linear-gradient(to bottom, rgba(30,41,59,0.8), transparent)', padding: '4rem 0 0 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: course.gradient, zIndex: -1 }}></div>
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: 'hsl(var(--primary))', fontSize: '0.9rem', fontWeight: '500' }}>{course.category}</span>
                <span className="text-muted" style={{ fontSize: '0.9rem' }}>•</span>
                <span className="text-muted" style={{ fontSize: '0.9rem' }}>{course.level}</span>
              </div>
              <h1 className="heading-xl" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>{course.title}</h1>
              <p className="heading-md text-muted" style={{ fontWeight: '400', marginBottom: '2rem' }}>
                Explore the fundamental concepts of {course.category.toLowerCase()} and master the skills with {course.instructor}.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.2rem' }}>👨‍🏫</span>
                </div>
                <div>
                  <div style={{ fontWeight: '500' }}>{course.instructor}</div>
                  <div className="text-muted" style={{ fontSize: '0.9rem' }}>{course.university || course.provider}</div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ width: '100%', maxWidth: '380px', position: 'sticky', top: '6rem', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ width: '100%', height: '200px', background: course.gradient, borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.9 }}>
                <span style={{ color: 'white', fontWeight: '500', background: 'rgba(0,0,0,0.4)', padding: '0.5rem 1rem', borderRadius: '2rem', backdropFilter: 'blur(4px)' }}>▶ Play Preview</span>
              </div>
              <div className="heading-lg" style={{ marginBottom: '1.5rem' }}>Free</div>
              
              <Link to={`/learn/${course.id}`}>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginBottom: '1rem' }}>Enroll & Start Learning</button>
              </Link>
              
              <p className="text-muted" style={{ fontSize: '0.85rem', textAlign: 'center' }}>{course.enrolled.toLocaleString()} already enrolled</p>
              
              <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'hsl(var(--primary))' }}>✓</span> 100% online courses
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'hsl(var(--primary))' }}>✓</span> Flexible schedule
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'hsl(var(--primary))' }}>✓</span> {course.level} level
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'hsl(var(--primary))' }}>✓</span> Approx. {course.duration} to complete
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>About this course</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          This course provides an introduction to quantum mechanics, quantum computation, and quantum algorithms...
        </p>

        <h3 className="heading-md" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Syllabus</h3>
        <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          {[1,2,3,4].map((week) => (
             <div key={week} style={{ padding: '1.5rem', borderBottom: week !== 4 ? '1px solid var(--glass-border)' : 'none' }}>
               <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Week {week}: Quantum Basics</h4>
               <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>An overview of the week's topics and required readings.</p>
               <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                 <span>🎥 4 videos</span>
                 <span>📖 2 readings</span>
                 <span>📝 1 quiz</span>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
