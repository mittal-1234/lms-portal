import { Users, Target, Rocket, Briefcase, Calendar, MessageSquare, ArrowRight, Heart, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, gradient }) => (
  <div style={{ 
    padding: '6rem 1.5rem', 
    background: gradient || 'linear-gradient(180deg, rgba(59, 130, 246, 0.05), transparent)',
    textAlign: 'center',
    borderBottom: '1px solid var(--glass-border)',
    marginBottom: '4rem'
  }}>
    <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>{title}</h1>
    <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
      {subtitle}
    </p>
  </div>
);

const Section = ({ title, children, bgColor }) => (
  <section style={{ padding: '6rem 1.5rem', background: bgColor || 'transparent' }}>
    <div className="container">
      {title && <h2 className="heading-lg" style={{ marginBottom: '3rem', textAlign: 'center' }}>{title}</h2>}
      {children}
    </div>
  </section>
);

export const AboutPage = () => (
  <div className="animate-fade-in">
    <Hero 
      title="About SkillSphere" 
      subtitle="We're on a mission to democratize education and bring universally accessible, high-quality learning to anyone, anywhere."
    />
    
    <Section title="Our Mission & Story">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Founded in 2024, SkillSphere began with a simple observation: the world's best educational resources were often locked behind expensive barriers or geographical constraints.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe that learning is a lifelong journey that belongs to everyone. By partnering with top universities and industry leaders, we've built a platform that combines academic rigor with the flexibility of digital learning.
          </p>
        </div>
        <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>10M+</div>
              <div className="text-muted">Learners</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(var(--accent))' }}>150+</div>
              <div className="text-muted">Universities</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(140, 70%, 50%)' }}>4.8</div>
              <div className="text-muted">Avg Rating</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(30, 90%, 60%)' }}>2000+</div>
              <div className="text-muted">Courses</div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Why Choose SkillSphere?" bgColor="rgba(255, 255, 255, 0.02)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {[
          { icon: <Target />, title: "Precision Learning", desc: "Curated paths designed to take you from zero to expert in your chosen field." },
          { icon: <Globe />, title: "Global Community", desc: "Learn alongside peers from 190+ countries and build your professional network." },
          { icon: <Rocket />, title: "Career Impact", desc: "Our certificates are recognized by world-leading companies like Google and Meta." }
        ].map((item, i) => (
          <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--primary))', margin: '0 auto 1.5rem' }}>
              {item.icon}
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h3>
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export const CareerPage = () => (
  <div className="animate-fade-in">
    <Hero 
      title="Join Our Team" 
      subtitle="Help us build the future of education. We're looking for passionate individuals to join our remote-first team."
    />

    <Section title="Open Positions">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[
          { title: "Senior Frontend Engineer", team: "Product", type: "Full-time / Remote" },
          { title: "Curriculum Designer", team: "Education", type: "Full-time / London" },
          { title: "Product Manager", team: "Growth", type: "Full-time / SF" },
          { title: "DevOps Architect", team: "Infrastructure", type: "Contract" }
        ].map((job, i) => (
          <div key={i} className="glass" style={{ padding: '1.5rem 2rem', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} 
               onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{job.title}</h3>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Briefcase size={14} /> {job.team}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Globe size={14} /> {job.type}</span>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </div>
        ))}
      </div>
    </Section>

    <Section title="Why You'll Love It Here" bgColor="rgba(255, 255, 255, 0.02)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {[
          { icon: <Heart />, title: "Well-being First", desc: "Comprehensive health plans, mental health support, and generous PTO." },
          { icon: <Zap />, title: "Remote-First", desc: "Work from wherever you're most productive. We build for the world." },
          { icon: <Briefcase />, title: "Growth Mindset", desc: "Unlimited access to our course catalog and $2k annual learning stipend." }
        ].map((item, i) => (
          <div key={i} style={{ padding: '1rem', textAlign: 'center' }}>
            <div style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }}>{item.icon}</div>
            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export const BlogPage = () => (
  <div className="animate-fade-in">
    <Hero 
      title="The SkillSphere Blog" 
      subtitle="Latest news, study tips, and stories from our community of millions."
    />

    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {[
          { 
            title: "10 Tips for Navigating Online Courses", 
            author: "Sarah Smith", 
            date: "Oct 24, 2024", 
            tag: "Study Tips", 
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" 
          },
          { 
            title: "How Al is Changing the Education Landscape", 
            author: "Dr. James Lee", 
            date: "Oct 22, 2024", 
            tag: "Technology", 
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
          },
          { 
            title: "Celebrating Our 10 Millionth Learner", 
            author: "The SkillSphere Team", 
            date: "Oct 15, 2024", 
            tag: "News", 
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
          }
        ].map((post, i) => (
          <article key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={post.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'hsl(var(--primary))', textTransform: 'uppercase' }}>{post.tag}</span>
              <h3 style={{ margin: '0.75rem 0', fontSize: '1.25rem' }}>{post.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--glass-border)' }}></div>
                   <span className="text-muted" style={{ fontSize: '0.85rem' }}>{post.author}</span>
                </div>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer' }}>Load More Articles</button>
      </div>
    </Section>
  </div>
);
