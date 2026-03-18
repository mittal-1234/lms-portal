import { useSearchParams } from 'react-router-dom';
import CourseCard from '../components/ui/CourseCard';
import { mockCourses } from '../data/mockCourses';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter courses based on search query
  const filteredCourses = mockCourses.filter(course => {
    if (!query) return true;
    const lowerQuery = query.toLowerCase();
    return (
      course.title.toLowerCase().includes(lowerQuery) ||
      course.category.toLowerCase().includes(lowerQuery) ||
      course.instructor.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>
        {query ? `Search Results for "${query}"` : 'Explore Courses'}
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
        <aside className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', height: 'fit-content', position: 'sticky', top: '6rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Filters</h3>
          {/* Add filter controls here */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontWeight: '500', color: 'var(--text-secondary)' }}>Category</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
               <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}><input type="checkbox" /> Computer Science</label>
               <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}><input type="checkbox" /> Data Science</label>
               <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}><input type="checkbox" /> Business</label>
               <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}><input type="checkbox" /> Design</label>
            </div>
          </div>
        </aside>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span className="text-muted">Showing {filteredCourses.length} results</span>
            <select style={{ background: 'var(--glass-bg)', color: 'white', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '0.5rem', outline: 'none' }}>
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
             {filteredCourses.length > 0 ? (
               filteredCourses.map(course => (
                 <div key={course.id}>
                   <CourseCard course={course} />
                 </div>
               ))
             ) : (
               <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px dashed var(--glass-border)' }}>
                 <p className="text-muted" style={{ fontSize: '1.1rem' }}>No courses found matching your search.</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
