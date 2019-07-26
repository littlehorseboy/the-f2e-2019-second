import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCard } from '../../../reducers/playCards/playCards';

const useStyles = makeStyles({
  root: {
    height: '100%',
    minHeight: 180,
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

  let foundationCards: PlayCard[] = [];

  if (card) {
    foundationCards = props.foundationCards.filter(
      (foundationCard): boolean => !(foundationCard.suits === card.suits
        && foundationCard.number === card.number),
    );
  }

  const [lastCard] = props.foundationCards.slice(-1);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'card',
      card,
      foundationName: props.foundationName,
    },
    canDrag: card && lastCard.suits === card.suits && lastCard.number === card.number,
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

      {foundationCards.length > 0 && <FoundationsCard
        foundationName={props.foundationName}
        foundationCards={foundationCards}
      />}
    </div>
  );
}
