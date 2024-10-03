import React from 'react';
import '../css/Contact.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this line is included

export default function Contact() {
  return (
    <MDBContainer className='text-center' style={{ marginTop: '20px' }} id='Contact'> {/* Add the ID here */}
      <MDBRow className='mt-4'>
        {/* Social Media Column */}
        <MDBCol md='6' className='mb-4'>
          <h3>Connect with Me</h3>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              style={{ fontSize: '3.5rem' }}
              className='text-dark m-1'
              href='https://www.instagram.com/_vijaydwivedi/' // Replace with your actual link
              role='button'
            >
              <MDBIcon fab className='fa-instagram' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              style={{ fontSize: '3.5rem' }}
              className='text-dark m-1'
              href='https://www.linkedin.com/in/vijay-dwivedi-22b70b203/' // Replace with your actual link
              role='button'
            >
              <MDBIcon fab className='fa-linkedin' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              style={{ fontSize: '3.5rem' }}
              className='text-dark m-1'
              href='https://github.com/Vijaydwivedi10' // Replace with your actual link
              role='button'
            >
              <MDBIcon fab className='fa-github' />
            </MDBBtn>
          </section>
        </MDBCol>

        {/* Contact Details Column */}
        <MDBCol md='6' className='mb-4'>
          <h3>Contact Details</h3>
          <MDBCard>
            <MDBCardBody>
              <p>Email: vijaynews50785@gmail.com</p> {/* Replace with your email */}
              <p>Phone: +91 8299192478</p> {/* Replace with your phone number */}
              <p>Location: Kanpur, Uttar Pradesh, India</p> {/* Replace with your location */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '200px', color: 'yellow' }}>
  <span className='bumping-text'>
  I’m excited to join a dynamic team and craft stunning visuals!
    </span>
</div>



    </MDBContainer>
  );
}
