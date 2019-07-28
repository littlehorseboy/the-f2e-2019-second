import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import { FreeCell } from '../../reducers/freeCell/freeCell';
import { TimeI } from '../../reducers/time/time';
import { timeStop } from '../../actions/time/time';

const useStyles = makeStyles({
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  dialogContainer: {
    paddingLeft: 104,
    paddingRight: 104,
    paddingTop: 32,
    paddingBottom: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogTitle: {
    color: '#384A2D',
    fontSize: 48,
    fontWeight: 'bold',
    '& > div': {
      textAlign: 'center',
      '& > svg': {
        fontSize: 100,
      },
    },
  },
  dialogContent: {
    color: '#384A2D',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default function ScoreText(): JSX.Element {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  const score = (freeCell.foundations.first.length
    + freeCell.foundations.second.length
    + freeCell.foundations.third.length
    + freeCell.foundations.fourth.length) * 10;

  const time = useSelector((
    state: { timeReducer: TimeI },
  ): TimeI => state.timeReducer);

  const dispatch = useDispatch();

  // 結束遊戲的分數
  if (score === 520) {
    if (time.status !== 'stop') {
      handleClickOpen();
      dispatch(timeStop('stop'));
    }
  }

  return (
    <>
      <div className={classes.scoreText}>
        Score: {score}
      </div>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <div className={classes.dialogContainer}>
          <div className={classes.dialogTitle}>
            <div>
              <SvgIcon viewBox="0 0 640 512">
                <path fill="#E6E15C" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
              </SvgIcon>
            </div>
            You Win!!
          </div>
          <div className={classes.dialogContent}>
            <div>Score: {score}</div>
            <div>Time: {Math.floor(time.seconds / 60).toString().padStart(2, '0')} : {(time.seconds % 60).toString().padStart(2, '0')}</div>
          </div>
          <div className={classes.dialogButtonContainer}>
            <div>
              <Button
                className={classes.dialogButton}
                onClick={handleClose}
                variant="contained"
                color="primary"
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
