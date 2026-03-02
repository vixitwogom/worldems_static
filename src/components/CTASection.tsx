import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

export default function CTASection() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@worldems.in?subject=Partnership Inquiry from ${formData.name} — ${formData.company}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="bg-accent py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left */}
        <div className="reveal flex flex-col justify-center">
          <span className="eyebrow text-accent-foreground/50 mb-4 block">Ready to scale?</span>
          <h2 className="font-chivo font-black text-3xl md:text-[52px] leading-[1.08] tracking-[-1.5px] text-accent-foreground mb-6">
            We're wired for{' '}
            <em className="font-black italic">innovation</em>. Let's build.
          </h2>
          <p className="font-chivo font-light text-base text-accent-foreground/60 mb-10 max-w-md">
            Whether you're launching a new electronics brand or scaling production — we're the manufacturing partner built for your ambition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <span className="font-chivo font-bold text-xs text-accent-foreground/50 uppercase tracking-wider">Phone</span>
              <p className="font-chivo font-bold text-sm text-accent-foreground mt-1">+91 92658 88793</p>
            </div>
            <div>
              <span className="font-chivo font-bold text-xs text-accent-foreground/50 uppercase tracking-wider">Email</span>
              <p className="font-chivo font-bold text-sm text-accent-foreground mt-1">info@worldems.in</p>
            </div>
            <div>
              <span className="font-chivo font-bold text-xs text-accent-foreground/50 uppercase tracking-wider">Website</span>
              <p className="font-chivo font-bold text-sm text-accent-foreground mt-1">worldems.in</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal">
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="font-chivo font-bold text-xl text-blue-deep mb-6">Start a conversation</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="font-chivo text-sm border border-grey-200 rounded-lg px-4 py-3 bg-background text-foreground placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-blue-mid/30 transition"
                required
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="font-chivo text-sm border border-grey-200 rounded-lg px-4 py-3 bg-background text-foreground placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-blue-mid/30 transition"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="font-chivo text-sm border border-grey-200 rounded-lg px-4 py-3 w-full mb-4 bg-background text-foreground placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-blue-mid/30 transition"
              required
            />
            <textarea
              placeholder="What are you looking to manufacture?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="font-chivo text-sm border border-grey-200 rounded-lg px-4 py-3 w-full mb-6 bg-background text-foreground placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-blue-mid/30 transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-mid text-primary-foreground font-chivo font-bold text-sm py-3.5 rounded-lg hover:bg-blue-deep transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
