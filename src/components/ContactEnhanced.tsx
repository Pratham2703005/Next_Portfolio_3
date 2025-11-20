"use client";

import { useState } from 'react';
import { Mail, User, MessageSquare, Github, Linkedin, Code2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import SendButton from './buttons/SendMessage';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactEnhanced = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required!');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Pratham2703005', color: 'hover:text-[var(--military-accent)]' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratham-israni-a6b672275/', color: 'hover:text-[var(--military-accent)]' },
    { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/Pratham012/', color: 'hover:text-[var(--military-accent)]' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="contact">
      <Toaster position="bottom-right" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--military-accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--military-tactical)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--military-accent)] mb-4 uppercase tracking-wider">
            [ ESTABLISH CONTACT ]
          </h2>
          <div className="w-32 h-1 bg-[var(--military-tactical)] mx-auto"></div>
          <p className="mt-6 text-[var(--military-text)] text-lg font-mono">
            INITIATE SECURE COMMUNICATION CHANNEL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Social */}
          <div className="space-y-8">
            {/* Quick Info Card */}
            <div className="military-card p-8 military-hover">
              <h3 className="text-2xl font-bold text-[var(--military-accent)] mb-6 uppercase tracking-wider">
                [ DIRECT LINE ]
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-[var(--military-tactical)] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[var(--military-text)] text-sm font-bold mb-1">EMAIL</p>
                    <a href="mailto:pk2732004@gmail.com" className="text-[var(--military-accent)] hover:text-[var(--military-tactical)] transition-colors font-mono">
                      pk2732004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageSquare className="text-[var(--military-tactical)] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[var(--military-text)] text-sm font-bold mb-1">LOCATION</p>
                    <p className="text-[var(--military-accent)] font-mono">India (Remote Available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="military-card p-8 military-hover">
              <h3 className="text-2xl font-bold text-[var(--military-accent)] mb-6 uppercase tracking-wider">
                [ CONNECT ]
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 p-4 border border-[var(--military-border)] hover:border-[var(--military-accent)] transition-all bg-[var(--military-dark)]/50"
                  >
                    <social.icon className={`text-[var(--military-text)] ${social.color} transition-colors`} size={28} />
                    <span className="text-xs text-[var(--military-text)] group-hover:text-[var(--military-accent)] transition-colors font-bold uppercase">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="military-card p-6 border-l-4 border-[var(--military-tactical)]">
              <p className="text-[var(--military-text)] text-sm leading-relaxed">
                <span className="text-[var(--military-accent)] font-bold">&gt;&gt;</span> Looking for a dedicated full-stack developer? Let&apos;s build something amazing together!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="military-card p-8 military-hover">
            <h3 className="text-2xl font-bold text-[var(--military-accent)] mb-6 uppercase tracking-wider">
              [ SEND MESSAGE ]
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[var(--military-tactical)] font-bold text-sm uppercase tracking-wider">
                  <User size={16} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--military-dark)] border-2 border-[var(--military-border)] px-4 py-3 text-[var(--military-text)] focus:border-[var(--military-accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--military-text)]/30"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[var(--military-tactical)] font-bold text-sm uppercase tracking-wider">
                  <Mail size={16} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--military-dark)] border-2 border-[var(--military-border)] px-4 py-3 text-[var(--military-text)] focus:border-[var(--military-accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--military-text)]/30"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[var(--military-tactical)] font-bold text-sm uppercase tracking-wider">
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-[var(--military-dark)] border-2 border-[var(--military-border)] px-4 py-3 text-[var(--military-text)] focus:border-[var(--military-accent)] focus:outline-none transition-colors font-mono resize-none placeholder:text-[var(--military-text)]/30"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <SendButton isLoading={isSubmitting} type="submit" disabled={isSubmitting} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEnhanced;
