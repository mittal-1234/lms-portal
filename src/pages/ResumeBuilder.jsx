import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Plus, Trash2, Download, RefreshCw, Check, AlertCircle } from 'lucide-react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('skillSphereResume_v2');
    return saved ? JSON.parse(saved) : {
      personalInfo: { name: 'John Doe', email: 'john.doe@example.com', phone: '+1 (555) 001-0203', city: 'San Francisco, CA', summary: 'Ambitious learner focused on Data Science and Web Development.' },
      experience: [{ id: 1, company: 'SkillSphere Academy', role: 'Student Researcher', period: '2024 - Present', description: 'Collaborated on data-driven projects and mastered React.js.' }],
      projects: [{ id: 1, name: 'LMS Portal', description: 'Built a premium learning platform with glassmorphism.', link: 'https://github.com' }],
      education: [{ id: 1, school: 'Global University', degree: 'B.S. Computer Science', period: '2020 - 2024' }],
      skills: ['React', 'JavaScript', 'Python', 'Tailwind CSS'],
      template: 'classic',
      themeColor: '#3b82f6'
    };
  });

  const [atsScore, setAtsScore] = useState(0);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiStatus, setAiStatus] = useState('');

  const calculateAtsScore = (data) => {
    let score = 0;
    if (data.personalInfo.name) score += 10;
    if (data.personalInfo.email && data.personalInfo.email.includes('@')) score += 10;
    if (data.personalInfo.summary.length > 30) score += 15;
    if (data.experience.length > 0 && data.experience[0].description.length > 50) score += 20;
    if (data.projects.length > 0) score += 15;
    if (data.skills.length >= 5) score += 15;
    if (data.education.length > 0) score += 15;
    return Math.min(score, 100);
  };

  useEffect(() => {
    localStorage.setItem('skillSphereResume_v2', JSON.stringify(resumeData));
    setAtsScore(calculateAtsScore(resumeData));
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

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: Date.now(), name: '', description: '', link: '' }]
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const addSkill = (skill) => {
    if (!skill || resumeData.skills.includes(skill)) return;
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const loadSampleData = () => {
    setResumeData({
      personalInfo: { 
        name: 'Alex Rivera', 
        email: 'alex.rivera@techflow.io', 
        phone: '+1 (415) 882-0091', 
        city: 'Seattle, WA', 
        summary: 'Senior Frontend Engineer with 6+ years of experience building scalable web applications. Expert in React, TypeScript, and modern CSS architectures.' 
      },
      experience: [
        { id: 1, company: 'TechFlow Systems', role: 'Lead Frontend Engineer', period: '2021 - Present', description: 'Architected a component library used by 50+ developers. Reduced bundle size by 40% through code-splitting and tree-shaking.' },
        { id: 2, company: 'CloudScale AI', role: 'Software Engineer', period: '2018 - 2021', description: 'Developed real-time monitoring dashboards using D3.js and React. Implemented automated testing suite reducing production bugs by 25%.' }
      ],
      projects: [
        { id: 1, name: 'OpenCanvas', description: 'A collaborative whiteboarding tool built with WebSockets and Canvas API.', link: 'https://github.com/alex/opencanvas' },
        { id: 2, name: 'FastRef', description: 'Chrome extension for developer documentation search with 10k+ active users.', link: 'https://chrome.google.com/fastref' }
      ],
      education: [
        { id: 1, school: 'University of Washington', degree: 'M.S. Computer Science', period: '2016 - 2018' }
      ],
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Docker', 'AWS'],
      template: resumeData.template,
      themeColor: resumeData.themeColor
    });
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h1 className="heading-lg">AI Resume Builder <span style={{ fontSize: '0.8rem', verticalAlign: 'middle', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '0.4rem', border: '1px solid var(--glass-border)', marginLeft: '0.5rem' }}>v2.0</span></h1>
          <p className="text-muted">Create a professional, ATS-optimized resume with AI assistance.</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', alignItems: 'center' }}>
            {/* ATS Score */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: atsScore > 70 ? '#10b981' : atsScore > 40 ? '#f59e0b' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {atsScore}%
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                <div style={{ fontWeight: '600' }}>ATS Score</div>
                <div className="text-muted">{atsScore > 70 ? 'Excellent' : 'Needs Work'}</div>
              </div>
            </div>

            {/* Template Selector */}
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '0.3rem', borderRadius: '0.6rem', border: '1px solid var(--glass-border)' }}>
              {['classic', 'modern', 'minimal'].map(t => (
                <button 
                  key={t}
                  onClick={() => setResumeData(prev => ({ ...prev, template: t }))}
                  style={{ padding: '0.4rem 0.8rem', borderRadius: '0.4rem', border: 'none', fontSize: '0.75rem', fontWeight: '500', textTransform: 'capitalize', cursor: 'pointer', background: resumeData.template === t ? 'rgba(255,255,255,0.1)' : 'transparent', color: resumeData.template === t ? 'white' : 'var(--text-secondary)' }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Color Picker */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['#3b82f6', '#10b981', '#6366f1', '#f43f5e', '#000000'].map(c => (
                <button 
                  key={c}
                  onClick={() => setResumeData(prev => ({ ...prev, themeColor: c }))}
                  style={{ width: '20px', height: '20px', borderRadius: '50%', border: resumeData.themeColor === c ? '2px solid white' : 'none', background: c, cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={loadSampleData} className="btn" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={18} /> Load Sample
          </button>
          <button onClick={() => window.print()} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Download size={20} /> Download PDF
          </button>
        </div>
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
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Professional Title</label>
                <input name="summary" value={resumeData.personalInfo.summary} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email</label>
                <input name="email" value={resumeData.personalInfo.email} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Phone</label>
                <input name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Location (City, State)</label>
                <input name="city" value={resumeData.personalInfo.city} onChange={handlePersonalChange} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} />
              </div>
            </div>
          </section>

          <section className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>Work Experience</h3>
              <button onClick={addExperience} className="icon-btn" style={{ color: 'hsl(var(--primary))' }}><Plus size={20} /></button>
            </div>
            {resumeData.experience.map(exp => (
              <div key={exp.id} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                  <input placeholder="Role" value={exp.role} onChange={(e) => updateExperience(exp.id, 'role', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                </div>
                <textarea 
                  placeholder="Professional achievements..." 
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>Projects</h3>
              <button onClick={addProject} className="icon-btn" style={{ color: 'hsl(var(--primary))' }}><Plus size={20} /></button>
            </div>
            {resumeData.projects.map(project => (
              <div key={project.id} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input placeholder="Project Name" value={project.name} onChange={(e) => updateProject(project.id, 'name', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                  <input placeholder="Link" value={project.link} onChange={(e) => updateProject(project.id, 'link', e.target.value)} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                </div>
                <textarea 
                  placeholder="Project description..." 
                  rows={2} 
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.75rem', color: 'white', marginBottom: '1rem', resize: 'none' }}
                />
                <button onClick={() => removeProject(project.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
              </div>
            ))}
          </section>

          <section className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>Education</h3>
              <button onClick={() => setResumeData(prev => ({ ...prev, education: [...prev.education, { id: Date.now(), school: '', degree: '', period: '' }] }))} className="icon-btn" style={{ color: 'hsl(var(--primary))' }}><Plus size={20} /></button>
            </div>
            {resumeData.education.map(edu => (
              <div key={edu.id} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input placeholder="School/University" value={edu.school} onChange={(e) => setResumeData(prev => ({ ...prev, education: prev.education.map(ed => ed.id === edu.id ? { ...ed, school: e.target.value } : ed) }))} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                  <input placeholder="Degree" value={edu.degree} onChange={(e) => setResumeData(prev => ({ ...prev, education: prev.education.map(ed => ed.id === edu.id ? { ...ed, degree: e.target.value } : ed) }))} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0' }} />
                  <input placeholder="Period (e.g. 2020 - 2024)" value={edu.period} onChange={(e) => setResumeData(prev => ({ ...prev, education: prev.education.map(ed => ed.id === edu.id ? { ...ed, period: e.target.value } : ed) }))} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 0', gridColumn: 'span 2' }} />
                </div>
                <button onClick={() => setResumeData(prev => ({ ...prev, education: prev.education.filter(ed => ed.id !== edu.id) }))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', marginTop: '1rem' }}><Trash2 size={18} /></button>
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
        <div style={{ position: 'sticky', top: '6rem' }} className="no-print">
          <div id="resume-preview" style={{ 
            background: 'white', 
            color: '#1e293b', 
            width: '100%', 
            aspectRatio: '1/1.41', 
            borderRadius: '0.5rem', 
            padding: resumeData.template === 'minimal' ? '2rem' : '3rem', 
            position: 'relative', 
            overflowY: 'auto', 
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            fontFamily: resumeData.template === 'classic' ? '"Times New Roman", Times, serif' : 'var(--font-sans)',
            fontSize: '0.9rem'
          }}>
             {isAiProcessing && (
               <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.8)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: resumeData.themeColor }}>
                 <Sparkles size={48} className="animate-pulse" />
                 <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{aiStatus}</p>
               </div>
             )}
            
            {/* Template: Classic */}
            {resumeData.template === 'classic' && (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000', textTransform: 'uppercase' }}>{resumeData.personalInfo.name}</h2>
                <div style={{ fontSize: '0.85rem', marginBottom: '1.5rem', borderBottom: `2px solid ${resumeData.themeColor}`, paddingBottom: '1rem' }}>
                  {resumeData.personalInfo.city} • {resumeData.personalInfo.phone} • {resumeData.personalInfo.email}
                </div>
                
                <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontWeight: '700', borderBottom: '1px solid #000', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Professional Summary</h4>
                  <p style={{ lineHeight: '1.4' }}>{resumeData.personalInfo.summary}</p>
                </div>

                <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontWeight: '700', borderBottom: '1px solid #000', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Experience</h4>
                  {resumeData.experience.map(exp => (
                    <div key={exp.id} style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                        <span>{exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ fontStyle: 'italic' }}>{exp.role}</div>
                      <p style={{ marginTop: '0.25rem' }}>• {exp.description}</p>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontWeight: '700', borderBottom: '1px solid #000', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Projects</h4>
                  {resumeData.projects.map(p => (
                    <div key={p.id} style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontWeight: '700' }}>{p.name}</span> | <span>{p.link}</span>
                      <p>• {p.description}</p>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontWeight: '700', borderBottom: '1px solid #000', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Skills</h4>
                  <p>{resumeData.skills.join(', ')}</p>
                </div>
              </div>
            )}

            {/* Template: Modern */}
            {resumeData.template === 'modern' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 180px', gap: '2rem', height: '100%' }}>
                <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '2rem' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>{resumeData.personalInfo.name}</h2>
                  <p style={{ color: resumeData.themeColor, fontWeight: '700', fontSize: '1.1rem', marginBottom: '2rem' }}>{resumeData.personalInfo.summary}</p>

                  <section style={{ marginBottom: '2rem' }}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: resumeData.themeColor, marginBottom: '1rem', fontWeight: '800' }}>Experience</h4>
                    {resumeData.experience.map(exp => (
                      <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: '700', color: '#0f172a' }}>{exp.company}</div>
                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>{exp.role} | {exp.period}</div>
                        <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{exp.description}</p>
                      </div>
                    ))}
                  </section>

                  <section>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: resumeData.themeColor, marginBottom: '1rem', fontWeight: '800' }}>Projects</h4>
                    {resumeData.projects.map(p => (
                      <div key={p.id} style={{ marginBottom: '1rem' }}>
                        <div style={{ fontWeight: '700' }}>{p.name}</div>
                        <p style={{ fontSize: '0.85rem' }}>{p.description}</p>
                      </div>
                    ))}
                  </section>
                </div>

                <div style={{ paddingTop: '0.5rem' }}>
                  <section style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>Contact</h4>
                    <div style={{ fontSize: '0.75rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <span>📍 {resumeData.personalInfo.city}</span>
                      <span>📧 {resumeData.personalInfo.email}</span>
                      <span>📞 {resumeData.personalInfo.phone}</span>
                    </div>
                  </section>

                  <section style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>Skills</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {resumeData.skills.map(s => (
                        <span key={s} style={{ background: '#f1f5f9', color: '#475569', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>{s}</span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>Education</h4>
                    {resumeData.education.map(edu => (
                      <div key={edu.id} style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700' }}>{edu.school}</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{edu.degree}</div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>
            )}

            {/* Template: Minimal */}
            {resumeData.template === 'minimal' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: '400', margin: 0 }}>{resumeData.personalInfo.name}</h2>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{resumeData.personalInfo.email} • {resumeData.personalInfo.phone}</div>
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', color: '#475569' }}>{resumeData.personalInfo.summary}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <section>
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#94a3b8', marginBottom: '1rem' }}>Experience</h4>
                    {resumeData.experience.map(exp => (
                      <div key={exp.id} style={{ marginBottom: '1.5rem', borderLeft: `2px solid ${resumeData.themeColor}`, paddingLeft: '1.5rem' }}>
                        <div style={{ fontWeight: '600' }}>{exp.role}</div>
                        <div style={{ fontSize: '0.8rem', color: resumeData.themeColor }}>{exp.company} / {exp.period}</div>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{exp.description}</p>
                      </div>
                    ))}
                  </section>

                  <section>
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#94a3b8', marginBottom: '1rem' }}>Core Skills</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {resumeData.skills.map(s => (
                        <span key={s} style={{ fontSize: '0.85rem', fontWeight: '500' }}>{s}</span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .no-print, button, .icon-btn { display: none !important; }
          body { background: white !important; color: black !important; padding: 0 !important; margin: 0 !important; }
          .container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
          #resume-preview { 
            box-shadow: none !important; 
            width: 100% !important; 
            height: auto !important; 
            aspect-ratio: auto !important;
            padding: 1.5cm !important;
            border-radius: 0 !important;
            overflow: visible !important;
            position: relative !important;
            top: 0 !important;
          }
          @page { margin: 0; }
        }
      `}} />
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
