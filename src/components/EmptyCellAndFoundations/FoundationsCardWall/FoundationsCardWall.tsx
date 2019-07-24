import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { DragItemI } from '../../CardCascade/Card/Card';
import { changeFoundation, cascadeToFoundations, emptyCellToFoundations } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';
import { FreeCell } from '../../../reducers/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    border: '1px solid red',
  },
  cardWallWrapper: {
    padding: 8,
  },
  emptyCard: {
    backgroundColor: '#C9C9C9',
    height: 180,
  },
});

const suitsCheck = (first: string, second: string): boolean => {
  if (first === 'spade' || first === 'club') {
    return second !== 'spade' && second !== 'club';
  }
  return second !== 'heart' && second !== 'diamond';
};

interface Props {
  foundationName: string;
  foundationCards: PlayCard[];
  freeCell: FreeCell;
  children: ReactNode;
}

export default function FoundationsCardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [lastCard] = props.foundationCards.slice(-1);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      if (item.cascadeFieldName) {
        dispatch(cascadeToFoundations(item.card, item.cascadeFieldName, props.foundationName));
      }
      if (item.emptyCellName) {
        dispatch(emptyCellToFoundations(item.card, item.emptyCellName, props.foundationName));
      }
      if (item.foundationName) {
        dispatch(changeFoundation(item.card, item.foundationName, props.foundationName));
      }
    },
    canDrop: (item: DragItemI): boolean => !lastCard
      && (item.emptyCellName || Object.keys(props.freeCell.cardCascades).some((key): boolean => {
        const [lastCascadeCard] = props.freeCell.cardCascades[key].slice(-1);
        if (!lastCascadeCard) {
          return false;
        }
        return lastCascadeCard.suits === item.card.suits
          && lastCascadeCard.number === item.card.number;
      })),
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      <div className={classes.cardWallWrapper}>
        {props.children}

        {isOver && canDrop && <div className={classes.emptyCard}>可以放</div>}
      </div>
    </div>
  );
}
