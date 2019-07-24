import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EmptyCellWall from './EmptyCellWall/EmptyCellWall';
import EmptyCellCard from './EmptyCellCard/EmptyCellCard';
import FoundationsCardWall from './FoundationsCardWall/FoundationsCardWall';
import FoundationsCard from './FoundationsCard/FoundationsCard';
import { PlayCard } from '../../reducers/playCards/playCards';
import { FreeCell } from '../../reducers/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  divider: {
    width: 200,
  },
});

export default function EmptyCellAndFoundations(): JSX.Element {
  const classes = useStyles();

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  return (
    <div className={classes.root}>
      {Object.keys(freeCell.emptyCell).map((key): JSX.Element => (
        <EmptyCellWall
          key={key}
          emptyCellName={key}
          emptyCellCards={freeCell.emptyCell[key] as PlayCard[]}
          freeCell={freeCell}
        >
          <EmptyCellCard
            emptyCellName={key}
            emptyCellCards={freeCell.emptyCell[key] as PlayCard[]}
          />
        </EmptyCellWall>
      ))}

      <div className={classes.divider}></div>

      {Object.keys(freeCell.foundations).map((key): JSX.Element => (
        <FoundationsCardWall
          key={key}
          foundationName={key}
          foundationCards={freeCell.foundations[key] as PlayCard[]}
          freeCell={freeCell}
        >
          <FoundationsCard
            foundationName={key}
            foundationCards={freeCell.foundations[key] as PlayCard[]}
          />
        </FoundationsCardWall>
      ))}
    </div>
  );
}
