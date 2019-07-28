import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScoreText from '../ScoreText/ScoreText';
import NewGameButton from './NewGameButton/NewGameButton';
import UndoButton from './UndoButton/UndoButton';
import PauseButton from './PauseButton/PauseButton';

const useStyles = makeStyles({
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
});

export default function TopToolbar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <div>
        <NewGameButton />
      </div>

      <ScoreText />

      <div>
        <UndoButton />

        <PauseButton />
      </div>
    </div>
  );
}
