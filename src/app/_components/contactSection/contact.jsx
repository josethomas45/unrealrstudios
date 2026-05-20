'use client'
import { useState } from 'react';
import styles from './contact.module.css';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const budgets = [
  'Under £1,000',
  '£1,000 – £3,000',
  '£3,000 – £7,000',
  '£7,000 – £15,000',
  '£15,000+',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, budget, message } = form;
    const subject = encodeURIComponent(`Project Enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`);
    window.location.href = `mailto:hello@unrealrstudios.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className={styles.contact} id='contact'>
      <div className={styles.inner}>
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <span className={styles.label}>START A PROJECT</span>
          <h1>Let&apos;s Build Something<br />Unreal Together.</h1>
          <p>Whether you have a clear idea or just a vision, we&apos;ll help you turn it into powerful visual content. Get in touch and create ads that feel big — without the big spend.</p>
          <div className={styles.contactLinks}>
            <a href="mailto:hello@unrealrstudios.com" className={styles.contactLink}>
              <span>hello@unrealrstudios.com</span>
              <MdArrowOutward />
            </a>
            <a href="tel:07437481363" className={styles.contactLink}>
              <span>07437 481 363</span>
              <MdArrowOutward />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
        >
          {sent ? (
            <motion.div 
              className={styles.success}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <span className={styles.successIcon}>✓</span>
              <h3>Message Sent!</h3>
              <p>Your email client should open. We&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Estimated Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange} required>
                  <option value="" disabled>Select a range...</option>
                  {budgets.map((b, i) => <option key={i} value={b}>{b}</option>)}
                </select>
              </div>
              <div className={styles.field}>
                <label>Tell Us About Your Project</label>
                <textarea name="message" rows={5} placeholder="Describe your brand, your goal, and what you're looking to create..." value={form.message} onChange={handleChange} required />
              </div>
              <motion.button 
                type="submit" 
                className={styles.submit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <MdArrowOutward />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

