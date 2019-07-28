import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import EmptyCellWall from './EmptyCellWall/EmptyCellWall';
import EmptyCellCard from './EmptyCellCard/EmptyCellCard';
import FoundationsCardWall from './FoundationsCardWall/FoundationsCardWall';
import FoundationsCard from './FoundationsCard/FoundationsCard';
import { PlayCard } from '../../reducers/playCards/playCards';
import { FreeCell } from '../../reducers/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 12,
  },
  divider: {
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#A75300',
    fontSize: 24,
    fontWeight: 'bold',
    '& svg': {
      marginRight: 8,
    },
  },
});

export default function EmptyCellAndFoundations(): JSX.Element {
  const classes = useStyles();

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  return (
    <div className={classes.root}>
      {Object.keys(freeCell.emptyCells).map((key): JSX.Element => (
        <EmptyCellWall
          key={key}
          emptyCellName={key}
          emptyCellCards={freeCell.emptyCells[key] as PlayCard[]}
          freeCell={freeCell}
        >
          <EmptyCellCard
            emptyCellName={key}
            emptyCellCards={freeCell.emptyCells[key] as PlayCard[]}
          />
        </EmptyCellWall>
      ))}

      <div className={classes.divider}>
        <SvgIcon viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
        </SvgIcon>
        12 : 02
      </div>

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
