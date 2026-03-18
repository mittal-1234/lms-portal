import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import { mockCourses } from '../data/mockCourses';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { enrolledCourses, courseProgress } = useAppContext();

  const getProgress = (courseId) => {
    const progress = courseProgress[courseId] || {};
    const completedCount = Object.values(progress).filter(Boolean).length;
    return Math.min(Math.round((completedCount / 5) * 100), 100);
  };
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

      {/* Resume Learning Section (Conditional) */}
      {enrolledCourses.length > 0 && (
        <section className="container" style={{ padding: '0 1.5rem 4rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 className="heading-md" style={{ margin: 0 }}>Resume Learning</h2>
              <Link to="/dashboard" style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))', textDecoration: 'none', fontWeight: '500' }}>View all my courses</Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {enrolledCourses.slice(0, 2).map(course => (
                <Link to={`/learn/${course.id}`} key={course.id} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '0.75rem', background: course.gradient, flexShrink: 0, opacity: 0.8 }}></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{course.title}</h3>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                        <span>Progress</span>
                        <span>{getProgress(course.id)}%</span>
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${getProgress(course.id)}%`, height: '100%', background: 'hsl(var(--primary))', transition: 'width 0.5s ease' }}></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
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
           {mockCourses.slice(0, 6).map(course => (
             <div key={course.id} className="animate-slide-up" style={{ animationDelay: '200ms', opacity: 1 }}>
               <CourseCard course={course} />
             </div>
           ))}
        </div>
      </section>
      
      {/* Career Tools / Resume Builder Section */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-slide-up">
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Land your dream job with <span className="text-gradient">Professional Tools</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Learning is only half the journey. Use our AI-powered Resume Builder to create a stunning professional profile that highlights your SkillSphere certifications and grabs recruiters' attention.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="/resume-builder" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem' }}>
                <FileText size={20} /> Build My Resume
              </Link>
              <Link to="/careers" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Explore Careers <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="glass animate-slide-up" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '200px', height: '200px', background: 'rgba(59,130,246,0.1)', filter: 'blur(50px)', borderRadius: '50%' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(59,130,246,0.1)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--primary))' }}>
                  <FileText size={20} />
                </div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>AI Content Generation</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automatically transform your course projects into high-impact bullet points.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(168,85,247,0.1)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
                  <FileText size={20} />
                </div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>ATS-Friendly Templates</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Choose from dozens of premium templates designed to bypass screening systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', marginTop: '0' }}>
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
