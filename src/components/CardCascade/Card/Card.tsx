import React from 'react';
import { useDrag, DragObjectWithType } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    height: '100%',
    minHeight: 145.5,
    marginTop: -115,
    opacity: 1,
    '&.isDragging': {
      opacity: 0.3,
    },
    cursor: 'no-drop',
    '&.canDrag': {
      cursor: 'grab',
    },
  },
  img: {
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.08),0px 1px 1px 0px rgba(0,0,0,0.04),0px 2px 1px -1px rgba(0,0,0,0.02)',
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
  emptyCellsLen: number;
}

export interface DragItemI extends DragObjectWithType {
  card: PlayCard;
  cascadeFieldName?: string;
  emptyCellName?: string;
  foundationName?: string;
}

export default function Card(props: Props): JSX.Element {
  const classes = useStyles();

  const card = props.cascadeField.find((cascade): PlayCard => cascade);
  const cardIndex = props.cascadeField.findIndex((cascade): PlayCard => cascade);

  let cascadeField: PlayCard[] = [];

  if (card) {
    cascadeField = props.cascadeField.filter(
      (cascade): boolean => !(cascade.suits === card.suits && cascade.number === card.number),
    );
  }

  const canDrag = props.emptyCellsLen >= (
    cardIndex !== -1
      ? props.cascadeField.length - cardIndex
      : 0
  ) && props.cascadeField.every((cascade, index): boolean => (
    // 比數字
    props.cascadeField[index + 1]
      ? cascade.number - 1 === props.cascadeField[index + 1].number
      : true
  ) && (
    // 比花色
    props.cascadeField[index + 1]
      ? suitsCheck(cascade.suits, props.cascadeField[index + 1].suits)
      : true
  ));

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'card',
      card,
      cascadeFieldName: props.cascadeFieldName,
    },
    canDrag,
    collect: (monitor): { isDragging: boolean } => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (!card) {
    return <></>;
  }

  return (
    <div ref={drag} data-testid="draggingCard" className={classNames(
      classes.root,
      { isDragging },
      { canDrag },
    )}>
      {card.imgSrc && (
        <img className={classes.img} src={card.imgSrc} alt={`${card.suits}${card.number}`} />
      )}


      {cascadeField.length > 0 && <Card
        cascadeField={cascadeField}
        cascadeFieldName={props.cascadeFieldName}
        emptyCellsLen={props.emptyCellsLen}
      />}
    </div>
  );
}
