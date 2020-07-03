import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  root: {
    background: '#F8F8F8',
    height: '100%',
    padding: '30px',
  },
  mainBlock: {
    // width: '315px',
    // height: '200px',
    // margin: '50px auto',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  innerBlock: {
    background: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    margin: '30px 50px 10px 0',
    minWidth: '300px',
  },
  circle: {
    marginRight: '10px',
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainBlock}>
        <Skeleton animation="wave" variant="text" width="25vw" height={20} />
        <div className={classes.cardContainer}>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />
              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>

            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>

          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
        </div>
      </div>

      <div className={classes.mainBlock}>
        <Skeleton animation="wave" variant="text" width="50vw" height={20} />
        <div className={classes.cardContainer}>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>

          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
        </div>
      </div>

      <div className={classes.mainBlock}>
        <Skeleton animation="wave" variant="text" width="30vw" height={20} />
        <div className={classes.cardContainer}>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>

          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
          <div className={classes.innerBlock}>
            <div className={classes.cardTop}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={70}
                height={70}
                className={classes.circle}
              />

              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={200}
                  height={20}
                />
              </div>
            </div>
            <Skeleton
              animation="wave"
              variant="rect"
              width={300}
              height={118}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
