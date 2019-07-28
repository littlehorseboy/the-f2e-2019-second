import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { DragItemI } from '../Card/Card';
import { changeCascadeFieldName, emptyCellToCascades, fundationToCascades } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    minHeight: 145.5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardWallWrapper: {
    padding: '12px 12px 0 12px',
    '& > div': {
      marginTop: 0,
    },
  },
  emptyCard: {
    backgroundColor: 'transparent',
    border: '2px solid #4C653C',
    borderRadius: 6,
    height: 145.5,
  },
});

const suitsCheck = (first: string, second: string): boolean => {
  if (first === 'spade' || first === 'club') {
    return second !== 'spade' && second !== 'club';
  }
  return second !== 'heart' && second !== 'diamond';
};

interface Props {
  cascadeFieldName: string;
  cascadeField: PlayCard[];
  children: ReactNode;
}

export default function CardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [lastCard] = props.cascadeField.slice(-1);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      if (item.cascadeFieldName) {
        dispatch(changeCascadeFieldName(item.card, item.cascadeFieldName, props.cascadeFieldName));
      }
      if (item.emptyCellName) {
        dispatch(emptyCellToCascades(item.card, item.emptyCellName, props.cascadeFieldName));
      }
      if (item.foundationName) {
        dispatch(fundationToCascades(item.card, item.foundationName, props.cascadeFieldName));
      }
    },
    canDrop: (item: DragItemI): boolean => {
      if (item.cascadeFieldName) {
        return item.cascadeFieldName !== props.cascadeFieldName
          && (!lastCard ? true : item.card.number + 1 === lastCard.number
          && suitsCheck(item.card.suits, lastCard.suits));
      }
      if (item.emptyCellName) {
        return (!lastCard ? true : item.card.number + 1 === lastCard.number
          && suitsCheck(item.card.suits, lastCard.suits));
      }
      if (item.foundationName) {
        return (!lastCard ? true : item.card.number + 1 === lastCard.number
          && suitsCheck(item.card.suits, lastCard.suits));
      }
      return false;
    },
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      <div className={classes.cardWallWrapper}>
        {props.children}

        {isOver && canDrop && <div className={classes.emptyCard}></div>}
      </div>
    </div>
  );
}
