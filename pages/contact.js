import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fikri Natadiwirya Maulana - Contact</title>
      </Head>

      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>Feel free to reach out via the form below or connect on social media.</p>

      <ContactForm />

      <SocialIcons />
    </div>
  );
}