import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardWall from '../../components/CardCascade/CardWall/CardWall';
import Card from '../../components/CardCascade/Card/Card';
import { PlayCard } from '../../reducers/playCards/playCards';
import { FreeCell } from '../../reducers/freeCell/freeCell';
import { fillCardCascades } from '../../actions/freeCell/freeCell';

const useStyles = makeStyles({
  root: {
  },
  cardCascadeZone: {
    width: 1280,
    margin: 8,
    display: 'flex',
    '& > div': {
      flexGrow: 1,
    },
  },
});

export default function Main(): JSX.Element {
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
    const first = playCards.slice(21, 28).reverse();
    const second = playCards.slice(7, 14).reverse();
    const third = playCards.slice(14, 21).reverse();
    const fourth = playCards.slice(0, 7).reverse();
    const fifth = playCards.slice(28, 34).reverse();
    const sixth = playCards.slice(34, 40).reverse();
    const seventh = playCards.slice(40, 46).reverse();
    const eighth = playCards.slice(46, 52).reverse();

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
      <div className={classes.cardCascadeZone}>
        {Object.keys(freeCell.cardCascades).map((key): JSX.Element => (
          <CardWall key={key} cascadeFieldName={key}>
            <Card
              cascadeField={freeCell.cardCascades[key] as PlayCard[]}
              cascadeFieldName={key}
            />
          </CardWall>
        ))}
      </div>
    </div>
  );
}
