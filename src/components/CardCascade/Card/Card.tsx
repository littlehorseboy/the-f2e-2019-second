import React, { useState } from 'react';
import { useDrag, DragObjectWithType } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    height: '100%',
    border: '1px solid blue',
    opacity: 1,
    '&.isDragging': {
      opacity: 0.3,
    },
    '&.empty': {
      backgroundColor: '#C9C9C9',
      '& > *': {
        display: 'none',
      },
    },
  },
});

interface Props {
  cascadeField: PlayCard[];
  cascadeFieldName: string;
  empty?: boolean;
  setCanDrags?: React.Dispatch<React.SetStateAction<boolean>>[];
}

export interface DragItemI extends DragObjectWithType {
  card: PlayCard;
  cascadeFieldName: string;
}

export default function Card(props: Props): JSX.Element {
  const classes = useStyles();

  const [canDrag, setCanDrag] = useState(true);

  const setCanDrags = props.setCanDrags
    ? [...props.setCanDrags, setCanDrag]
    : [setCanDrag];

  const card = props.cascadeField.find((cascade): PlayCard => cascade);

  let cascadeField: PlayCard[] = [];

  if (card) {
    cascadeField = props.cascadeField.filter(
      (cascade): boolean => !(cascade.suits === card.suits && cascade.number === card.number),
    );
  }

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'card',
      card,
      cascadeFieldName: props.cascadeFieldName,
    },
    // canDrag: card && cascadeField[0] && cascadeField[0].number + 1 === card.number,
    collect: (monitor): { isDragging: boolean } => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (!card) {
    return <></>;
  }

  return (
    <div ref={drag} className={classNames(
      classes.root,
      { isDragging },
      { empty: props.empty },
    )}>
      {`${card.suits}${card.number}`}

      {cascadeField.length > 0 && <Card
        cascadeField={cascadeField}
        cascadeFieldName={props.cascadeFieldName}
        setCanDrags={setCanDrags}
      />}
    </div>
  );
}
