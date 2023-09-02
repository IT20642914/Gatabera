import React, { FunctionComponent, SVGProps, useEffect, useState } from 'react';
import cx from 'classnames';
import { Grid } from '@mui/material';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import styles from './Tools.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import {
  toolsTechs,
} from '../../../../constants/constants';

// type ITech = {
//   key: number;
//   q: number;
//   r: number;
//   icon: FunctionComponent<SVGProps<SVGSVGElement>>;
//   highlightIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
// };

const Tools = () => {
  const [highlightedKey, setHighlightedKey] = useState<number>(1);
  // const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const highlightInterval = setInterval(() => {
      // setFadeOut(false);
      if (highlightedKey === 7) {
        setHighlightedKey(1);
        // setTimeout(() => {
        //   setFadeOut(true);
        // }, 2600);
      } else {
        setHighlightedKey(highlightedKey + 1);
        // setTimeout(() => {
        //   setFadeOut(true);
        // }, 2600);
      }
    }, 3000);

    return () => clearInterval(highlightInterval);
  }, [highlightedKey]);

  const onClickHexagon = (key: number) => {
    setHighlightedKey(key);
  };

  const Icon0 = toolsTechs[0].icon;
  const HighIcon0 = toolsTechs[0].highlightIcon;

  const Icon1 = toolsTechs[1].icon;
  const HighIcon1 = toolsTechs[1].highlightIcon;

  const Icon2 = toolsTechs[2].icon;
  const HighIcon2 = toolsTechs[2].highlightIcon;

  const Icon3 = toolsTechs[3].icon;
  const HighIcon3 = toolsTechs[3].highlightIcon;

  const Icon4 = toolsTechs[4].icon;
  const HighIcon4 = toolsTechs[4].highlightIcon;

  const Icon5 = toolsTechs[5].icon;
  const HighIcon5 = toolsTechs[5].highlightIcon;

  const Icon6 = toolsTechs[6].icon;
  const HighIcon6 = toolsTechs[6].highlightIcon;

  return (
    <Grid id={styles.toolsContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle
          title='Tools and Technologies'
          subTitle='INNOVATIVE PRODUCT ENGINEERING'
          isMain
        />
      </Grid>
      <Grid container>
        <Grid xs={12} md={6} id={styles.gridContainer} item>
          <HexGrid id={styles.hexGrid}>
            <Layout size={{ x: 10, y: 10 }} flat={true} spacing={2}>
              <Hexagon
                key={toolsTechs[0].key}
                onClick={() => onClickHexagon(toolsTechs[0].key)}
                s={1}
                q={toolsTechs[0].q}
                r={toolsTechs[0].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 1 ? (
                  <Icon0 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon0
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 1 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[1].key}
                onClick={() => onClickHexagon(toolsTechs[1].key)}
                s={1}
                q={toolsTechs[1].q}
                r={toolsTechs[1].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 2 ? (
                  <Icon1 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon1
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 2 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[2].key}
                onClick={() => onClickHexagon(toolsTechs[2].key)}
                s={1}
                q={toolsTechs[2].q}
                r={toolsTechs[2].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 3 ? (
                  <Icon2 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon2
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 3 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[3].key}
                onClick={() => onClickHexagon(toolsTechs[3].key)}
                s={1}
                q={toolsTechs[3].q}
                r={toolsTechs[3].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 4 ? (
                  <Icon3 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon3
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 4 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[4].key}
                onClick={() => onClickHexagon(toolsTechs[4].key)}
                s={1}
                q={toolsTechs[4].q}
                r={toolsTechs[4].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 5 ? (
                  <Icon4 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon4
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 5 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[5].key}
                onClick={() => onClickHexagon(toolsTechs[5].key)}
                s={1}
                q={toolsTechs[5].q}
                r={toolsTechs[5].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 6 ? (
                  <Icon5 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon5
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 6 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
              <Hexagon
                key={toolsTechs[6].key}
                onClick={() => onClickHexagon(toolsTechs[6].key)}
                s={1}
                q={toolsTechs[6].q}
                r={toolsTechs[6].r}
                className={cx(styles.hexagon)}
              >
                {highlightedKey !== 7 ? (
                  <Icon6 className={cx(styles.hexIcon)} x='0' y='0' width={'35'} height={'35'} />
                ) : (
                  <HighIcon6
                    className={cx(
                      styles.hexIcon,
                      highlightedKey === 7 && 'animate__animated animate__fadeIn',
                    )}
                    x='0'
                    y='0'
                    width={'35'}
                    height={'35'}
                  />
                )}
              </Hexagon>
            </Layout>
          </HexGrid>
        </Grid>
        {/* {highlightedKey === 1 && (
          <Grid
            id={styles.techContainersFrontEnd}
            className={cx(
              highlightedKey === 1 && 'animate__animated animate__fadeIn', // add fadeIn class if highlightedKey is 1
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {feTechs.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
              <Grid key={index} id={styles.singleTech} xs={3} item>
                <Tech className={styles.techIcon} />
              </Grid>
            ))}
          </Grid>
        )}
        {highlightedKey === 2 && (
          <Grid
            id={styles.techContainers}
            className={cx(
              highlightedKey === 2 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {mobileTechs.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
              <Grid key={index} id={styles.singleTech} xs={3} item>
                <Tech className={styles.techIcon} />
              </Grid>
            ))}
          </Grid>
        )}
        {highlightedKey === 3 && (
          <Grid
            id={styles.techContainers}
            className={cx(
              highlightedKey === 3 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {microsoftTechs.map(
              (Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
                <Grid key={index} id={styles.singleTech} xs={3} item>
                  <Tech className={styles.techIcon} />
                </Grid>
              ),
            )}
          </Grid>
        )}
        {highlightedKey === 4 && (
          <Grid
            id={styles.techContainersTwoRows}
            className={cx(
              highlightedKey === 4 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {databases.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
              <Grid key={index} id={styles.singleTech} xs={3} item>
                <Tech className={styles.techIcon} />
              </Grid>
            ))}
          </Grid>
        )}
        {highlightedKey === 5 && (
          <Grid
            id={styles.techContainers}
            className={cx(
              highlightedKey === 5 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {cloud.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
              <Grid key={index} id={styles.singleTech} xs={3} item>
                <Tech className={styles.techIcon} />
              </Grid>
            ))}
          </Grid>
        )}
        {highlightedKey === 6 && (
          <Grid
            id={styles.techContainers}
            className={cx(
              highlightedKey === 6 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {qualityAssuarance.map(
              (Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
                <Grid key={index} id={styles.singleTech} xs={3} item>
                  <Tech className={styles.techIcon} />
                </Grid>
              ),
            )}
          </Grid>
        )}
        {highlightedKey === 7 && (
          <Grid
            id={styles.techContainersTwoRows}
            className={cx(
              highlightedKey === 7 && 'animate__animated animate__fadeIn',
              // fadeOut && 'animate__animated animate__fadeOut',
            )}
            item
            xs={12}
            md={6}
          >
            {java.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
              <Grid key={index} id={styles.singleTech} xs={3} item>
                <Tech className={styles.techIcon} />
              </Grid>
            ))}
          </Grid>
        )} */}
      </Grid>
    </Grid>
  );
};

export default Tools;
