import { Link } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} style={{ display: 'block' }}>
      <article className="glass-card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Course Image Area */}
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: course.gradient || 'linear-gradient(135deg, hsl(221, 83%, 53%), hsl(280, 80%, 60%))', opacity: 0.8 }} />
          {/* Optional Image */}
          {course.image && (
            <img 
              src={course.image} 
              alt={course.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.6 }} 
            />
          )}
          
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '500', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
            {course.category}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div style={{ color: 'hsl(var(--primary))', fontSize: '0.85rem', fontWeight: '500' }}>
              {course.university || course.provider}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: '#fbbf24', fontWeight: '500' }}>
              <Star size={14} fill="#fbbf24" /> {course.rating.toFixed(1)}
            </div>
          </div>
          
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: 1.4, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            {course.title}
          </h3>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {course.instructor}
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> {course.duration}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Users size={14} /> {(course.enrolled / 1000).toFixed(1)}k
            </div>
            <div style={{ marginLeft: 'auto', fontWeight: '500', color: 'white' }}>
              {course.level}
            </div>
          </div>
        </div>

      </article>
    </Link>
  );
};

export default CourseCard;
