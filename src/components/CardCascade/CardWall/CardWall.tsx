import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Card, { DragItemI } from '../Card/Card';
import { changeCascadeFieldName } from '../../../actions/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    border: '1px solid red',
  },
  cardWallWrapper: {

  },
  cardWallContent: {

  },
});

interface Props {
  cascadeFieldName: string;
  children: ReactNode;
}

export default function CardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      dispatch(changeCascadeFieldName(item.card, item.cascadeFieldName, props.cascadeFieldName));
    },
    canDrop: (item: DragItemI): boolean => item.cascadeFieldName !== props.cascadeFieldName,
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      <p>{props.cascadeFieldName}</p>
      <div className={classes.cardWallContent}>
        {props.children}

        {isOver && canDrop && <Card
          cascadeField={[]}
          cascadeFieldName={''}
          empty
        />}
      </div>
    </div>
  );
}
