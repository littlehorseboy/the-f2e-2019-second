import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import { timeRestart } from '../../../actions/time/time';
import { fillCardCascades } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
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
  dialogContainer: {
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogTitle: {
    color: '#384A2D',
    fontSize: 48,
    fontWeight: 'bold',
    '& svg': {
      fontSize: 40,
      marginRight: 16,
    },
  },
  dialogContent: {
    color: '#384A2D',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dialogButtonContainer: {
    paddingTop: 24,
    paddingBottom: 24,
    '& > div:not(:last-child)': {
      marginBottom: 8,
    },
  },
  dialogButton: {
    width: 200,
    borderRadius: 32,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#BAD6A9',
    color: '#384A2D',
    '&:hover': {
      color: '#FFFFFF',
    },
  },
});

export default function NewGameButton(): JSX.Element {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const playCards = useSelector((
    state: { playCardsReducer: { playCards: PlayCard[] } },
  ): PlayCard[] => state.playCardsReducer.playCards);

  const dispatch = useDispatch();

  const handleNewGame = (): void => {
    handleClose();
    const first = [
      playCards[6 - 1],
      playCards[3 + 13 + 13 - 1],
      playCards[7 + 13 - 1],
      playCards[7 - 1],
      playCards[2 + 13 - 1],
      playCards[2 + 13 + 13 - 1],
      playCards[13 + 13 + 13 - 1],
    ];
    const second = [
      playCards[11 + 13 - 1],
      playCards[9 - 1],
      playCards[3 + 13 + 13 + 13 - 1],
      playCards[5 + 13 + 13 - 1],
      playCards[2 - 1],
      playCards[5 - 1],
      playCards[13 - 1],
    ];
    const third = [
      playCards[9 + 13 - 1],
      playCards[5 + 13 + 13 + 13 - 1],
      playCards[2 + 13 + 13 + 13 - 1],
      playCards[13 + 13 + 13 + 13 - 1],
      playCards[7 + 13 + 13 - 1],
      playCards[6 + 13 + 13 + 13 - 1],
      playCards[3 + 13 - 1],
    ];
    const fourth = [
      playCards[10 + 13 + 13 - 1],
      playCards[9 + 13 + 13 + 13 - 1],
      playCards[12 + 13 - 1],
      playCards[12 + 13 + 13 + 13 - 1],
      playCards[1 + 13 + 13 + 13 - 1],
      playCards[4 + 13 + 13 + 13 - 1],
      playCards[1 - 1],
    ];
    const fifth = [
      playCards[1 + 13 + 13 - 1],
      playCards[11 + 13 + 13 - 1],
      playCards[8 + 13 + 13 + 13 - 1],
      playCards[3 - 1],
      playCards[8 + 13 - 1],
      playCards[11 + 13 + 13 + 13 - 1],
    ];
    const sixth = [
      playCards[6 + 13 + 13 - 1],
      playCards[4 - 1],
      playCards[8 + 13 + 13 - 1],
      playCards[10 - 1],
      playCards[12 + 13 + 13 - 1],
      playCards[4 + 13 - 1],
    ];
    const seventh = [
      playCards[8 - 1],
      playCards[7 + 13 + 13 + 13 - 1],
      playCards[10 + 13 - 1],
      playCards[11 - 1],
      playCards[10 + 13 + 13 + 13 - 1],
      playCards[9 + 13 + 13 - 1],
    ];
    const eighth = [
      playCards[4 + 13 + 13 - 1],
      playCards[6 + 13 - 1],
      playCards[1 + 13 - 1],
      playCards[13 + 13 - 1],
      playCards[5 + 13 - 1],
      playCards[12 - 1],
    ];

    dispatch(fillCardCascades({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
    }));
    dispatch(timeRestart('timing'));
  };

  const handleNewSimpleGame = (): void => {
    handleClose();
    const first = [
      playCards[13 + 13 + 13 - 1],
      playCards[6 - 1],
      playCards[7 + 13 - 1],
      playCards[7 - 1],
      playCards[3 + 13 + 13 - 1],
      playCards[2 + 13 - 1],
      playCards[2 + 13 + 13 - 1],
    ];
    const second = [
      playCards[11 + 13 - 1],
      playCards[13 - 1],
      playCards[9 - 1],
      playCards[3 + 13 + 13 + 13 - 1],
      playCards[5 + 13 + 13 - 1],
      playCards[2 - 1],
      playCards[5 - 1],
    ];
    const third = [
      playCards[9 + 13 - 1],
      playCards[13 + 13 + 13 + 13 - 1],
      playCards[7 + 13 + 13 - 1],
      playCards[5 + 13 + 13 + 13 - 1],
      playCards[6 + 13 + 13 + 13 - 1],
      playCards[2 + 13 + 13 + 13 - 1],
      playCards[3 + 13 - 1],
    ];
    const fourth = [
      playCards[12 + 13 + 13 + 13 - 1],
      playCards[10 + 13 + 13 - 1],
      playCards[9 + 13 + 13 + 13 - 1],
      playCards[12 + 13 - 1],
      playCards[4 + 13 + 13 + 13 - 1],
      playCards[1 + 13 + 13 + 13 - 1],
      playCards[1 - 1],
    ];
    const fifth = [
      playCards[11 + 13 + 13 - 1],
      playCards[8 + 13 + 13 + 13 - 1],
      playCards[8 + 13 - 1],
      playCards[11 + 13 + 13 + 13 - 1],
      playCards[3 - 1],
      playCards[1 + 13 + 13 - 1],
    ];
    const sixth = [
      playCards[10 - 1],
      playCards[8 + 13 + 13 - 1],
      playCards[12 + 13 + 13 - 1],
      playCards[4 - 1],
      playCards[6 + 13 + 13 - 1],
      playCards[4 + 13 - 1],
    ];
    const seventh = [
      playCards[8 - 1],
      playCards[7 + 13 + 13 + 13 - 1],
      playCards[10 + 13 - 1],
      playCards[11 - 1],
      playCards[10 + 13 + 13 + 13 - 1],
      playCards[9 + 13 + 13 - 1],
    ];
    const eighth = [
      playCards[13 + 13 - 1],
      playCards[6 + 13 - 1],
      playCards[12 - 1],
      playCards[5 + 13 - 1],
      playCards[4 + 13 + 13 - 1],
      playCards[1 + 13 - 1],
    ];

    dispatch(fillCardCascades({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
    }));
    dispatch(timeRestart('timing'));
  };

  return (
    <>
      <Button variant="outlined" color="primary" className={classes.button} onClick={handleClickOpen}>
        <SvgIcon viewBox="0 0 384 512">
          <path fill="currentColor" d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
        </SvgIcon>
        New Game
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className={classes.dialogContainer}>
          <div className={classes.dialogTitle}>
            <SvgIcon viewBox="0 0 384 512">
              <path fill="currentColor" d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
            </SvgIcon>
            New Game
          </div>
          <div className={classes.dialogContent}>
            Pick one of two
          </div>
          <div className={classes.dialogButtonContainer}>
            <div>
              <Button
                className={classes.dialogButton}
                onClick={handleNewGame}
                variant="contained"
                color="primary"
              >
                正式牌局
              </Button>
            </div>

            <div>
              <Button
                className={classes.dialogButton}
                onClick={handleNewSimpleGame}
                variant="contained"
                color="primary"
              >
                超簡易牌局
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
