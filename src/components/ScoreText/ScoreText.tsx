import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FreeCell } from '../../reducers/freeCell/freeCell';

const useStyles = makeStyles({
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default function ScoreText(): JSX.Element {
  const classes = useStyles();

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  const score = (freeCell.foundations.first.length
    + freeCell.foundations.second.length
    + freeCell.foundations.third.length
    + freeCell.foundations.fourth.length) * 10;

  return (
    <div className={classes.scoreText}>
      Score: {score}
    </div>
  );
}
