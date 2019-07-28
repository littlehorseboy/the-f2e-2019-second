import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';

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

export default function UndoButton(): JSX.Element {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" className={classes.button} onClick={handleClickOpen}>
        <SvgIcon viewBox="0 0 512 512">
          <path fill="currentColor" d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"></path>
        </SvgIcon>
        Undo
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className={classes.dialogContainer}>
          <div className={classes.dialogTitle}>
            Sorry
          </div>
          <div className={classes.dialogContent}>
            此功能尚未實裝
          </div>
          <div className={classes.dialogButtonContainer}>
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
      </Dialog>
    </>
  );
}
