import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import { timeStop, timeAddOne } from '../../../actions/time/time';

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

export default function PauseButton(): JSX.Element {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleTimeStop = (): void => {
    dispatch(timeStop('stop'));
    handleClickOpen();
  };

  const handleTimeAddOne = (): void => {
    dispatch(timeAddOne());
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" className={classes.button} onClick={handleTimeStop}>
        <SvgIcon viewBox="0 0 448 512">
          <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
        </SvgIcon>
        Pause
      </Button>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <div className={classes.dialogContainer}>
          <div className={classes.dialogTitle}>
            <SvgIcon viewBox="0 0 448 512">
              <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
            </SvgIcon>
            Pause
          </div>
          <div className={classes.dialogContent}>
            Click OK to continue the game
          </div>
          <div className={classes.dialogButtonContainer}>
            <Button
              className={classes.dialogButton}
              onClick={handleTimeAddOne}
              variant="contained"
              color="primary"
            >
              OK
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
