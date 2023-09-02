import React, { useState, ChangeEvent, FunctionComponent, SVGProps } from 'react';
import { Grid } from '@mui/material';
import styles from './GetInTouch.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import InputField from '../../../common/InputField/InputField';
import Button from '../../../common/Button/Button';
import { contactIconsList } from '../../../../constants/constants';
import Typography from '../../../common/Typography/Typography';
import { ReactComponent as Location } from '../../../../assets/svgs/location.svg';

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
          <InputField
            value={nameField}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNameField(e.target.value)}
            label={'Name'}
            required
            sx={{ mb: 4 }}
          />
          <InputField
            value={emailField}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailField(e.target.value)}
            label={'Email'}
            required
            sx={{ mb: 4 }}
          />
          <InputField
            value={phoneField}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneField(e.target.value)}
            label={'Phone Number'}
            sx={{ mb: 4 }}
          />
          <InputField
            value={messageField}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMessageField(e.target.value)}
            label={'Type Here'}
            multiline
            rows={4}
            sx={{ mb: 4 }}
          />
          <Button id={styles.sendButton} color='secondary' variant='contained'>
            Send
          </Button>
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
              No. 399/2/1, Colombo Road, Pepiliyana, Sri Lanka.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetInTouch;
