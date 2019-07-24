import React from 'react';
import { useDrag, DragObjectWithType } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    height: '100%',
    minHeight: 180,
    // border: '1px solid blue',
    opacity: 1,
    '&.isDragging': {
      opacity: 0.3,
    },
  },
});

interface Props {
  foundationName: string;
  foundationCards: PlayCard[];
}

export default function FoundationsCard(props: Props): JSX.Element {
  const classes = useStyles();

  const card = props.foundationCards.find((foundationCard): PlayCard => foundationCard);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'card',
      card,
      foundationName: props.foundationName,
    },
    // canDrag: props.cascadeField.every((cascade, index): boolean => (
    //   // 比數字
    //   props.cascadeField[index + 1]
    //     ? cascade.number - 1 === props.cascadeField[index + 1].number
    //     : true
    // ) && (
    //   // 比花色
    //   props.cascadeField[index + 1]
    //     ? suitsCheck(cascade.suits, props.cascadeField[index + 1].suits)
    //     : true
    // )),
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
    )}>
      {`${card.suits}${card.number}`}
    </div>
  );
}
