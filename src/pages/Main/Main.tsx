import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
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
  toolbar: {
    display: 'flex',
    '& > div': {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      '&:nth-child(2)': {
        textAlign: 'center',
      },
      '&:last-child': {
        textAlign: 'right',
      },
      '& > button:first-child': {
        marginRight: 16,
      },
    },
  },
  button: {
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: 24,
    borderWidth: 2,
    '&:hover': {
      borderWidth: 2,
    },
    '& svg': {
      marginRight: 4,
    },
  },
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
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
        <div className={classes.toolbar}>
          <div>
            <Button variant="outlined" color="primary" className={classes.button}>
              <SvgIcon viewBox="0 0 384 512">
                <path fill="currentColor" d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
              </SvgIcon>
              New Game
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              <SvgIcon viewBox="0 0 448 512">
                <path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"></path>
              </SvgIcon>
              Restart
            </Button>
          </div>
          <div className={classes.scoreText}>
            Score: 120
          </div>
          <div>
            <Button variant="outlined" color="primary" className={classes.button}>
              <SvgIcon viewBox="0 0 512 512">
                <path fill="currentColor" d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"></path>
              </SvgIcon>
              Undo
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              <SvgIcon viewBox="0 0 448 512">
                <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
              </SvgIcon>
              Pause
            </Button>
          </div>
        </div>

        <EmptyCellAndFoundations />

        <CardCascade />
      </div>
    </div>
  );
}
