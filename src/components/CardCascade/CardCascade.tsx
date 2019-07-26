import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardWall from './CardWall/CardWall';
import Card from './Card/Card';
import { PlayCard } from '../../reducers/playCards/playCards';
import { FreeCell } from '../../reducers/freeCell/freeCell';
import { fillCardCascades } from '../../actions/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  divider: {
    width: 200,
  },
});

export default function CardCascade(): JSX.Element {
  const classes = useStyles();

  const playCards = useSelector((
    state: { playCardsReducer: { playCards: PlayCard[] } },
  ): PlayCard[] => state.playCardsReducer.playCards);

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  const dispatch = useDispatch();

  useEffect((): void => {
    // 牌組題目還需要擴充
    const first = [
      ...playCards.slice(6 + 13, 7 + 13),
      ...playCards.slice(5, 6),
      ...playCards.slice(4, 5),
      ...playCards.slice(3 + 13, 4 + 13),
      ...playCards.slice(2, 3),
      ...playCards.slice(1 + 13, 2 + 13),
      ...playCards.slice(0, 1),
    ];
    const second = [
      ...playCards.slice(6 + 13, 7 + 13),
      ...playCards.slice(5, 6),
      ...playCards.slice(4, 5),
      ...playCards.slice(3 + 13, 4 + 13),
      ...playCards.slice(2, 3),
      ...playCards.slice(1 + 13, 2 + 13),
      ...playCards.slice(0, 1),
    ];
    const third = [
      ...playCards.slice(6 + 13, 7 + 13),
      ...playCards.slice(5, 6),
      ...playCards.slice(4, 5),
      ...playCards.slice(3 + 13, 4 + 13),
      ...playCards.slice(2, 3),
      ...playCards.slice(1 + 13, 2 + 13),
      ...playCards.slice(0, 1),
    ];
    const fourth = playCards.slice(0, 0);
    const fifth = playCards.slice(0, 0);
    const sixth = playCards.slice(0, 0);
    const seventh = playCards.slice(0, 0);
    const eighth = playCards.slice(0, 0);

    dispatch(fillCardCascades({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
    }));
  }, [playCards]);

  return (
    <div className={classes.root}>
      {Object.keys(freeCell.cardCascades).map((key): JSX.Element => (
        <React.Fragment key={key}>
          <CardWall
            cascadeFieldName={key}
            cascadeField={(freeCell.cardCascades[key] as PlayCard[])}
          >
            <Card
              cascadeFieldName={key}
              cascadeField={freeCell.cardCascades[key] as PlayCard[]}
            />
          </CardWall>
          {key === 'fourth' && <div className={classes.divider}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}
