import { Link } from 'react-router-dom';
import CourseCard from '../components/ui/CourseCard';
import { mockCourses } from '../data/mockCourses';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '2rem', color: 'hsl(var(--primary))', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1.5rem' }} className="animate-slide-up">
              Welcome to the future of learning
            </div>
            
            <h1 className="heading-xl animate-slide-up stagger-1" style={{ marginBottom: '1.5rem' }}>
              Master the skills to <span className="text-gradient">shape your future</span>
            </h1>
            
            <p className="heading-md text-muted animate-slide-up stagger-2" style={{ marginBottom: '2.5rem', fontWeight: '400' }}>
              Access world-class courses from top instructors. Learn anywhere, anytime, with beautiful interactive experiences.
            </p>
            
            <div className="animate-slide-up stagger-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/catalog" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Join for free
              </Link>
              <Link to="/catalog" className="btn btn-glass" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 1, pointerEvents: 'none' }}></div>
      </section>

      {/* Featured Secton (Placeholder for now) */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="heading-lg">Featured Courses</h2>
            <p className="text-muted" style={{ marginTop: '0.5rem' }}>Start your journey with our most popular programs</p>
          </div>
          <Link to="/catalog" style={{ color: 'hsl(var(--primary))', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            View all &rarr;
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
           {mockCourses.slice(0, 3).map(course => (
             <div key={course.id} className="animate-slide-up" style={{ animationDelay: '200ms', opacity: 0 }}>
               <CourseCard course={course} />
             </div>
           ))}
        </div>
      </section>
      
      {/* Value Proposition */}
      <section style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '4rem' }}>
            <h2 className="heading-lg">Why choose SkillSphere?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.2))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                 🌟
              </div>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Premium Experience</h3>
              <p className="text-muted">Immersive, distraction-free learning environment designed for focus.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.2))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                 🎓
              </div>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>World-Class Experts</h3>
              <p className="text-muted">Learn directly from industry leaders and renowned academics.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.2))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                 🏆
              </div>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Recognized Certificates</h3>
              <p className="text-muted">Earn valuable credentials to showcase your skills to employers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
