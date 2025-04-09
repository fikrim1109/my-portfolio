import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Form data submitted:', formData);
    alert('Message sent! (Placeholder - check console)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className={styles.textarea} required ></textarea>
      </div>
      <button type="submit" className={styles.button}>Send Message</button>
    </form>
  );
};

export default ContactForm;