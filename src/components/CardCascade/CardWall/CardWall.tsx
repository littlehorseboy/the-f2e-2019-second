import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { DragItemI } from '../Card/Card';
import { changeCascadeFieldName } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';

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
  cascadeFieldName: string;
  children: ReactNode;
  cascadeField: PlayCard[];
}

export default function CardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [lastCard] = props.cascadeField.slice(-1);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      dispatch(changeCascadeFieldName(item.card, item.cascadeFieldName, props.cascadeFieldName));
    },
    canDrop: (item: DragItemI): boolean => item.cascadeFieldName !== props.cascadeFieldName
      && (!lastCard ? true : item.card.number + 1 === lastCard.number
      && suitsCheck(item.card.suits, lastCard.suits)),
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
