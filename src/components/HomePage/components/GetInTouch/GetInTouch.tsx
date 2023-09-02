import React, { useState, ChangeEvent, FunctionComponent, SVGProps, useRef } from 'react';
import { Grid } from '@mui/material';
import styles from './GetInTouch.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import InputField from '../../../common/InputField/InputField';
import Button from '../../../common/Button/Button';
import { contactIconsList } from '../../../../constants/constants';
import Typography from '../../../common/Typography/Typography';
import { ReactComponent as Location } from '../../../../assets/svgs/location.svg';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IBottomIcons = {
  title: string;
  subTitle: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const GetInTouch = () => {
  const [nameField, setNameField] = useState<string>('');
  const [emailField, setEmailField] = useState<string>('');
  const [phoneField, setPhoneField] = useState<string>('');
  const [messageField, setMessageField] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPNum, setErrorPNum] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>(''); // State for success message
  const contactFormRef = useRef<HTMLFormElement | null>(null);

  const handleSendEmail = () => {
    // Prepare the email content
    const to = 'sanjusooriyaarachchi99@gmail.com'; // Replace with the recipient's email
    const subject = 'Message from Contact Form';
    const templateParams = {
      userName: nameField,
      userEmail: emailField,
      userPhone: phoneField,
      userMessage: messageField,
    };

    // Check if any of the required fields are empty
    if (templateParams.userName === '') {
      setError('Please fill The Name Field.');
      return;
    } else {
      setError('');
    }

    if (templateParams.userEmail === '') {
      setErrorEmail('Please fill The E-mail Field.');
      return;
    } else {
      setErrorEmail('');
    }

    if (templateParams.userPhone === '') {
      setErrorPNum('Please fill The Phone Number Field.');
      return;
    } else {
      setErrorPNum('');
    }

    if (templateParams.userMessage === '') {
      setErrorMsg('Please fill The Message Field.');
      return;
    } else {
      setErrorMsg('');
    }

    // Send the email using EmailJS
    emailjs.send('service_qg6ev47', 'template_ex2ngw5', templateParams, 'KKfkGJZKt5unB2lB-').then(
      (response) => {
        // Show success message and add color
        const contactMessage = document.getElementById('contactMessage');
        if (contactMessage) {
          contactMessage.classList.add('color-green');
          contactMessage.textContent = 'Message sent successfully!';

          // Remove success message after five seconds
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
        }

        // Optionally, reset the form fields
        setNameField('');
        setEmailField('');
        setPhoneField('');
        setMessageField('');

        // Set the success message
        setSuccessMessage('Message sent successfully!');

        toast.success(' Emial send  Successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log('Email sent successfully:', response);
      },
      (error) => {
        toast.error(' Emial send  unsuccessfully' +error, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error('Error sending email:', error);
        alert('OOPS! Something has Failed: ' + error);
      },
    );
  };
  return (
    <Grid id={styles.getInTouchContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <div>
          <SectionTitle
            title='Get in Touch'
            subTitle='REACH OUT TO US'
            isMain
            sx={{ textAlign: 'center' }}
          />
        </div>
      </Grid>
      <Grid justifyContent='center' container>
        <Grid xs={11} md={6} item id={styles.fieldsContainer}>
          <form id='contact-form' ref={contactFormRef}>
            <InputField
              value={nameField}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNameField(e.target.value)}
              label={'Name'}
              required
              sx={{ mb: 4 }}
            />
            {error && <Typography color='error'>{error}</Typography>}
            <InputField
              value={emailField}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailField(e.target.value)}
              label={'Email'}
              required
              sx={{ mb: 4 }}
            />
            {errorEmail && <Typography color='error'>{errorEmail}</Typography>}
            <InputField
              value={phoneField}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneField(e.target.value)}
              label={'Phone Number'}
              sx={{ mb: 4 }}
            />
            {errorPNum && <Typography color='error'>{errorPNum}</Typography>}
            <InputField
              value={messageField}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMessageField(e.target.value)}
              label={'Type Here'}
              multiline
              rows={4}
              sx={{ mb: 4 }}
            />
            {errorMsg && <Typography color='error'>{errorMsg}</Typography>}
           
            <Button
              id={styles.sendButton}
              // color='secondary'
              variant='contained'
              onClick={handleSendEmail}
            >
              Send
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: '1rem',
              }}
            ></div>

          </form>
          <Grid container id={styles.iconsContainer}>
            {contactIconsList.map((icon: IBottomIcons, index) => (
              <Grid xs={12} md={4} id={styles.iconContainer} key={index} item>
                <icon.icon style={{ marginRight: '1rem' }} />
                <Grid item>
                  <Typography variant='body2' sx={{ fontWeight: 600 }} color='primary.main'>
                    {icon.title}
                  </Typography>
                  <Typography variant='body2' color='primary.main'>
                    {icon.subTitle}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid justifyContent={'center'} alignItems='center' sx={{ mb: 8 }} container>
            <Location style={{ marginRight: '1rem' }} />
            <Typography
              color='primary.main'
              variant='body1'
              sx={{ fontSize: { sx: 10, md: 16 }, fontWeight: 600 }}
            >
              No. C10/2, Ahambadeniya Road, Dewalegama, Kegalle, Sri Lanka.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetInTouch;
