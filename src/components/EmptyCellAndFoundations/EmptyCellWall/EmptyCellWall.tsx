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
    height: 145.5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardWallWrapper: {
    margin: '14px 14px 0 14px',
    width: 'calc(100% - 28px)',
    height: 'calc(100% - 14px)',
    backgroundColor: 'rgba(76, 101, 60, 0.3)',
    borderRadius: 6,
  },
  emptyCard: {
    backgroundColor: 'rgba(76, 101, 60, 0.3)',
    borderRadius: 6,
    height: 130.5,
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

        {isOver && canDrop && <div className={classes.emptyCard}></div>}
      </div>
    </div>
  );
}
