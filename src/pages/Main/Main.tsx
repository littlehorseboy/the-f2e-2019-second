import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopToolbar from '../../components/TopToolbar/TopToolbar';
import EmptyCellAndFoundations from '../../components/EmptyCellAndFoundations/EmptyCellAndFoundations';
import CardCascade from '../../components/CardCascade/CardCascade';

const taiwanImg = require('../../assets/images/icons/taiwan.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const KImg = require('../../assets/images/spade13.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const QImg = require('../../assets/images/spade12.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const JImg = require('../../assets/images/spade11.svg'); // eslint-disable-line @typescript-eslint/no-var-requires

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#77BAB7',
    display: 'flex',
  },
  advertisingWall: {
    minWidth: 340,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 32,
  },
  advertisingTitle: {
    '& > h1': {
      color: '#384A2D',
      fontSize: '3.5vw',
      '@media (max-width: 1600px)': {
        fontSize: 55,
      },
    },
  },
  advertisingMain: {
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundImage: `url(${taiwanImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '550px 650px',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '& > img': {
      position: 'absolute',
      '&:nth-child(1)': {
        width: 125,
        transform: 'translate(60px, 30px) rotate(10deg)',
      },
      '&:nth-child(2)': {
        width: 150,
        transform: 'translate(-70px, 30px) rotate(-13deg)',
      },
      '&:nth-child(3)': {
        width: 170,
        transform: 'translate(0, -80px) rotate(7deg)',
      },
    },
  },
  gameZone: {
    backgroundColor: '#BAD6A9',
    borderRadius: 24,
    minWidth: 1280,
    width: 1280,
    height: 800,
    marginTop: 32,
    marginRight: 32,
    padding: 56,
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.advertisingWall}>
        <div className={classes.advertisingTitle}>
          <h1>FREECELL</h1>
        </div>
        <div className={classes.advertisingMain}>
          <img src={JImg} alt="J" />
          <img src={QImg} alt="Q" />
          <img src={KImg} alt="K" />
        </div>
      </div>

      <div className={classes.gameZone}>
        <TopToolbar />

        <EmptyCellAndFoundations />

        <CardCascade />
      </div>
    </div>
  );
}
