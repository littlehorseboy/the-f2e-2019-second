import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    height: '100%',
    minHeight: 145.5,
    opacity: 1,
    '&.isDragging': {
      opacity: 0.3,
    },
  },
});

interface Props {
  emptyCellName: string;
  emptyCellCards: PlayCard[];
}

export default function EmptyCellCard(props: Props): JSX.Element {
  const classes = useStyles();

  const card = props.emptyCellCards.find((emptyCellCard): PlayCard => emptyCellCard);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'card',
      card,
      emptyCellName: props.emptyCellName,
    },
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
      {card.imgSrc && (
        <img src={card.imgSrc} alt={`${card.suits}${card.number}`} />
      )}
    </div>
  );
}
