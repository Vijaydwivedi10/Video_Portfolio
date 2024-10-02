import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  

  return (
    <div style={styles.container} id='Contact'>
      <div style={styles.row}>
        {/* Social Media Links */}
        <div style={styles.column}>
          <h3>Connect with Me</h3>
          <section style={styles.socialMedia}>
            <a href='https://www.instagram.com/_vijaydwivedi/' target='_blank' rel='noopener noreferrer' style={styles.icon}>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='https://www.linkedin.com/in/vijay-dwivedi-22b70b203/' target='_blank' rel='noopener noreferrer' style={styles.icon}>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/Vijaydwivedi10' target='_blank' rel='noopener noreferrer' style={styles.icon}>
              <i className='fab fa-github'></i>
            </a>
          </section>
        </div>

        {/* Contact Details */}
        <div style={styles.column}>
          <h3>Contact Details</h3>
          <div style={styles.card}>
            <p>Email: vijaynews50785@gmail.com</p>
            <p>Phone: +91 8299192478</p>
            <p>Location: Kanpur, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>


      <div style={styles.footer}>
        <p style={{ margin: 0 }}>...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  column: {
    flex: 1,
    margin: '0 10px',
  },
  socialMedia: {
    marginBottom: '20px',
  },
  icon: {
    fontSize: '3rem',
    margin: '0 10px',
    color: '#333',
    textDecoration: 'none',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  },
  formContainer: {
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    minHeight: '100px',
  },
  button: {
    width: '40%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#cb9021',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  successMessage: {
    margin: '10px 0',
    color: 'green',
  },
  errorMessage: {
    margin: '10px 0',
    color: 'red',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};
