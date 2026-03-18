const InfoPage = ({ title, subtitle }) => {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
        <span style={{ fontSize: '2rem' }}>✨</span>
      </div>
      <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>{title}</h1>
      <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {subtitle}
      </p>
      
      <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--glass-border)', borderRadius: '1rem', maxWidth: '600px', width: '100%' }}>
        <p style={{ color: 'var(--text-secondary)' }}>This page is currently under construction. Check back soon for updates!</p>
      </div>
    </div>
  );
};

export const AboutPage = () => <InfoPage title="About SkillSphere" subtitle="We're on a mission to democratize education and bring universally accessible, high-quality learning to anyone, anywhere." />;

export const CareerPage = () => <InfoPage title="Careers at SkillSphere" subtitle="Join our team of passionate educators, engineers, and designers building the future of online learning." />;

export const BlogPage = () => <InfoPage title="The SkillSphere Blog" subtitle="Insights, updates, and stories from our community of lifelong learners and expert instructors." />;
