import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { DragItemI } from '../../CardCascade/Card/Card';
import { cascadeToEmptyCells, changeEmptyCellName, foundationToEmptyCells } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';
import { FreeCell } from '../../../reducers/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    minHeight: 180,
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

interface Props {
  emptyCellName: string;
  emptyCellCards: PlayCard[];
  freeCell: FreeCell;
  children: ReactNode;
}

export default function EmptyCellWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void => {
      if (item.cascadeFieldName) {
        dispatch(cascadeToEmptyCells(item.card, item.cascadeFieldName, props.emptyCellName));
      }
      if (item.emptyCellName) {
        dispatch(changeEmptyCellName(item.card, item.emptyCellName, props.emptyCellName));
      }
      if (item.foundationName) {
        dispatch(foundationToEmptyCells(item.card, item.foundationName, props.emptyCellName));
      }
    },
    canDrop: (item: DragItemI): boolean => {
      if (props.emptyCellCards.length > 0) {
        return false;
      }
      if (item.cascadeFieldName) {
        return Object.keys(props.freeCell.cardCascades).some((key): boolean => {
          const [lastCascadeCard] = props.freeCell.cardCascades[key].slice(-1);
          if (!lastCascadeCard) {
            return false;
          }
          return lastCascadeCard.suits === item.card.suits
            && lastCascadeCard.number === item.card.number;
        });
      }
      if (item.emptyCellName) {
        return true;
      }
      if (item.foundationName) {
        return true;
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

        {isOver && canDrop && <div className={classes.emptyCard}>可以放</div>}
      </div>
    </div>
  );
}
