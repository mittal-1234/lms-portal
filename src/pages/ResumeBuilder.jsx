import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Plus, Trash2, Download, RefreshCw, Check, AlertCircle } from 'lucide-react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('skillSphereResume');
    return saved ? JSON.parse(saved) : {
      personalInfo: { name: 'John Doe', email: 'john.doe@example.com', phone: '', city: 'San Francisco, CA', summary: 'Ambitious learner focused on Data Science and Web Development.' },
      experience: [{ id: 1, company: 'SkillSphere Academy', role: 'Student Researcher', period: '2024 - Present', description: 'Collaborated on data-driven projects and mastered React.js.' }],
      education: [{ id: 1, school: 'Global University', degree: 'B.S. Computer Science', period: '2020 - 2024' }],
      skills: ['React', 'JavaScript', 'Python', 'Tailwind CSS']
    };
  });

  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiStatus, setAiStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('skillSphereResume', JSON.stringify(resumeData));
  }, [resumeData]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now(), company: '', role: '', period: '', description: '' }]
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const addSkill = (skill) => {
    if (!skill || resumeData.skills.includes(skill)) return;
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const simulateAiRewrite = async (expId) => {
    const exp = resumeData.experience.find(e => e.id === expId);
    if (!exp.description) return;

    setIsAiProcessing(true);
    setAiStatus('Analyzing content...');
    
    await new Promise(r => setTimeout(r, 800));
    setAiStatus('Applying professional power verbs...');
    
    await new Promise(r => setTimeout(r, 1200));
    
    const enhancements = [
      `Streamlined ${exp.description.toLowerCase()} by implementing industry standard patterns, resulting in improved efficiency.`,
      `Spearheaded the development of components for ${exp.description.toLowerCase()}, leveraging modern frameworks to optimize performance.`,
      `Mastered complex concepts in ${exp.description.toLowerCase()} to deliver high-quality, scalable solutions within tight deadlines.`
    ];

    const upgraded = enhancements[Math.floor(Math.random() * enhancements.length)];
    
    updateExperience(expId, 'description', upgraded);
    setIsAiProcessing(false);
    setAiStatus('');
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 className="heading-lg">AI Resume Builder</h1>
          <p className="text-muted">Fill in your details and let AI enhance your professional presence.</p>
        </div>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Download size={20} /> Download PDF
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left: Input Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} /> Personal Information
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Full Name</label>
                <input name="name" value={resumeData.personalInfo.name} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Role Title</label>
                <input name="summary" value={resumeData.personalInfo.summary} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
            </div>
          </section>

          <section className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>Experience</h3>
              <button onClick={addExperience} className="icon-btn" style={{ color: 'hsl(var(--primary))' }}><Plus size={20} /></button>
            </div>
            {resumeData.experience.map(exp => (
              <div key={exp.id} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                  <input placeholder="Role" value={exp.role} onChange={(e) => updateExperience(exp.id, 'role', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                </div>
                <textarea 
                  placeholder="What did you do there?" 
                  rows={2} 
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.75rem', color: 'white', marginBottom: '1rem', resize: 'none' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button 
                    onClick={() => simulateAiRewrite(exp.id)}
                    disabled={isAiProcessing || !exp.description}
                    style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', background: 'hsl(var(--primary))', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', opacity: isAiProcessing ? 0.5 : 1 }}
                  >
                    {isAiProcessing ? <RefreshCw className="spin" size={14} /> : <Sparkles size={14} />} 
                    AI Rewrite
                  </button>
                  <button onClick={() => removeExperience(exp.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </section>

          <section className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {resumeData.skills.map(skill => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', padding: '0.25rem 0.75rem', borderRadius: '2rem', color: 'hsl(var(--primary))', fontSize: '0.85rem' }}>
                  {skill} 
                  <X size={14} style={{ cursor: 'pointer' }} onClick={() => setResumeData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }))} />
                </div>
              ))}
              <input 
                placeholder="Add skill..."
                onKeyDown={(e) => { if(e.key === 'Enter') { addSkill(e.currentTarget.value); e.currentTarget.value = ''; } }}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', color: 'white', padding: '0.25rem 0', outline: 'none', width: '80px' }}
              />
            </div>
          </section>
        </div>

        {/* Right: Live Preview */}
        <div style={{ position: 'sticky', top: '6rem' }}>
          <div style={{ background: 'white', color: '#1e293b', width: '100%', aspectRatio: '1/1.41', borderRadius: '0.5rem', padding: '3rem', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
             {isAiProcessing && (
               <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.8)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--primary))' }}>
                 <Sparkles size={48} className="animate-pulse" />
                 <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{aiStatus}</p>
               </div>
             )}
            
            <header style={{ marginBottom: '2.5rem', borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>{resumeData.personalInfo.name || 'Your Name'}</h2>
              <p style={{ color: '#3b82f6', fontWeight: '600', fontSize: '1.1rem', marginTop: '0.25rem' }}>{resumeData.personalInfo.summary || 'Aspiring Professional'}</p>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
                <span>{resumeData.personalInfo.email}</span>
                <span>{resumeData.personalInfo.city}</span>
              </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 200px', gap: '2rem' }}>
              <div>
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: '#3b82f6', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>Experience</h4>
                {resumeData.experience.map(exp => (
                  <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '700', color: '#0f172a' }}>{exp.company || 'Company'}</span>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{exp.period}</span>
                    </div>
                    <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>{exp.role}</div>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{exp.description}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: '#3b82f6', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {resumeData.skills.map(s => (
                    <span key={s} style={{ background: '#f1f5f9', color: '#475569', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '500' }}>{s}</span>
                  ))}
                </div>

                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: '#3b82f6', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.25rem', marginTop: '2rem' }}>Education</h4>
                {resumeData.education.map(edu => (
                  <div key={edu.id} style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{edu.school}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{edu.degree}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for X icon since we use X but didn't import specifically as a standalone here
const X = ({ size, style, onClick }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
    onClick={onClick}
  >
    <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
  </svg>
);

export default ResumeBuilder;
