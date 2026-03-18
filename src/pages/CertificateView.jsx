import { useParams, Link } from 'react-router-dom';
import { Download, Share2, Award, CheckCircle, Home, Printer } from 'lucide-react';
import { mockCourses } from '../data/mockCourses';
import { useAppContext } from '../context/AppContext';

const CertificateView = () => {
  const { id } = useParams();
  const { user } = useAppContext();
  const course = mockCourses.find(c => c.id === id) || mockCourses[0];
  
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const certificateId = `SKILL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Header Actions */}
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '500' }}>
          <Home size={18} /> Back to Dashboard
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={handlePrint} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.5rem' }}>
            <Printer size={18} /> Print PDF
          </button>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem' }}>
            <Share2 size={18} /> Share
          </button>
        </div>
      </div>

      {/* Certificate Container */}
      <div className="glass" style={{ 
        width: '100%', 
        maxWidth: '900px', 
        aspectRatio: '1.414', 
        padding: '3rem', 
        borderRadius: '0.5rem', 
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        border: '15px solid rgba(255,255,255,0.02)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
        overflow: 'hidden'
      }}>
        
        {/* Decorative corner elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', borderTop: '2px solid rgba(59,130,246,0.3)', borderLeft: '2px solid rgba(59,130,246,0.3)' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', borderTop: '2px solid rgba(59,130,246,0.3)', borderRight: '2px solid rgba(59,130,246,0.3)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100px', height: '100px', borderBottom: '2px solid rgba(59,130,246,0.3)', borderLeft: '2px solid rgba(59,130,246,0.3)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100px', height: '100px', borderBottom: '2px solid rgba(59,130,246,0.3)', borderRight: '2px solid rgba(59,130,246,0.3)' }}></div>

        {/* Logo */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'hsl(var(--primary))', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}>S</div>
            <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>SkillSphere</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Professional Certificate</div>
        </div>

        {/* Content */}
        <div style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>This is to certify that</div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {user ? user.name : 'SkillSphere Learner'}
        </h2>
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>has successfully completed the</div>
        <h3 style={{ fontSize: '2rem', fontWeight: '600', color: 'hsl(var(--primary))', marginBottom: '2rem' }}>{course.title}</h3>
        <div style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          An online non-credit course authorized by {course.university || course.provider} and offered through SkillSphere.
        </div>

        {/* Footer info */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{course.instructor}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Instructor, {course.university || course.provider}</div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              border: '2px dashed rgba(59,130,246,0.3)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'hsl(var(--primary))',
              transform: 'rotate(-15deg)'
            }}>
               <Award size={60} opacity={0.5} />
               <div style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase' }}>Verified</div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{today}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Date of Completion</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>ID: {certificateId}</div>
          </div>
        </div>

      </div>

      <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <CheckCircle size={16} color="hsl(140, 70%, 50%)" /> SkillSphere verifies the identity of this learner and their participation in the course.
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .btn, header, aside, .no-print { display: none !important; }
          body { background: white !important; color: black !important; padding: 0 !important; margin: 0 !important; }
          .container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; height: 100vh !important; justify-content: center !important; }
          .glass { border: 2px solid #eee !important; box-shadow: none !important; background: white !important; color: black !important; }
          h2 { -webkit-text-fill-color: black !important; color: black !important; }
        }
      `}} />
    </div>
  );
};

export default CertificateView;
