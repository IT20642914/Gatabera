import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Grid } from '@mui/material';
import styles from './BehindScenes.module.scss';
import { gallery } from '../../../../constants/constants';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import ImageGrid from './components/ImageGrid/ImageGrid';

const BehindScenes = () => {
  const [currentImageSet, setCurrentImageSet] = useState<number | null>(1);
  const [fadeOut, setFadeOut] = useState(false);
  const [imageSetOne, setImageSetOne] = useState([]);
  const [imageSetTwo, setImageSetTwo] = useState([]);
  const [imageSetThree, setImageSetThree] = useState([]);

  useEffect(() => {
    setImageSetOne(divideArrayIntoThreeEqualParts(gallery)[0]);
    setImageSetTwo(divideArrayIntoThreeEqualParts(gallery)[1]);
    setImageSetThree(divideArrayIntoThreeEqualParts(gallery)[2]);
  }, []);

  const divideArrayIntoThreeEqualParts = (array: any) => {
    const length = array.length;
    const partLength = Math.floor(length / 3);
    const parts = [];
    for (let i = 0; i < 3; i++) {
      const startIndex = i * partLength;
      const endIndex = i === 2 ? length : (i + 1) * partLength;
      const part = array.slice(startIndex, endIndex);
      parts.push(part);
    }
    return parts;
  };

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setFadeOut(false);
      if (currentImageSet) {
        if (currentImageSet === 3) {
          setCurrentImageSet(1);
          setTimeout(() => {
            setFadeOut(true);
          }, 4500);
        } else {
          setCurrentImageSet(currentImageSet + 1);
          setTimeout(() => {
            setFadeOut(true);
          }, 4500);
        }
      }
    }, 5000);
    return () => clearInterval(galleryInterval);
  }, [currentImageSet]);

  return (
    <Grid id={styles.behindScenesContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle title='Awards' subTitle='BEHIND THE SCENES' />
      </Grid>
      <Grid id={styles.imageGridContainer} item>
        {currentImageSet === 1 && (
          <div
            className={cx(
              currentImageSet === 1 && 'animate__animated animate__fadeIn',
              fadeOut && 'animate__animated animate__fadeOut',
            )}
          >
            <ImageGrid gallery={imageSetOne} />
          </div>
        )}
        {currentImageSet === 2 && (
          <div
            className={cx(
              currentImageSet === 2 && 'animate__animated animate__fadeIn',
              fadeOut && 'animate__animated animate__fadeOut',
            )}
          >
            <ImageGrid gallery={imageSetTwo} />
          </div>
        )}
        {currentImageSet === 3 && (
          <div
            className={cx(
              currentImageSet === 3 && 'animate__animated animate__fadeIn',
              fadeOut && 'animate__animated animate__fadeOut',
            )}
          >
            <ImageGrid gallery={imageSetThree} />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default BehindScenes;
