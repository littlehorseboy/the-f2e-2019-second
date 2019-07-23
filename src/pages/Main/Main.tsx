import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmptyCellAndFoundations from '../../components/EmptyCellAndFoundations/EmptyCellAndFoundations';
import CardCascade from '../../components/CardCascade/CardCascade';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#77BAB7',
    display: 'flex',
  },
  advertisingWall: {
    minWidth: 240,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
    paddingBottom: 32,
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
    },
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.advertisingWall}></div>
      <div className={classes.gameZone}>
        <div className={classes.toolbar}>
          <div>
            <Button variant="outlined" color="primary">
              New Game
            </Button>
            <Button variant="outlined" color="primary">
              Restart
            </Button>
          </div>
          <div>
            <Button variant="outlined" color="primary">
              Score: 120
            </Button>
          </div>
          <div>
            <Button variant="outlined" color="primary">
              Undo
            </Button>
            <Button variant="outlined" color="primary">
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
