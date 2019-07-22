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
    const first = [
      { suits: 'heart', number: 7 },
      { suits: 'spade', number: 6 },
      { suits: 'spade', number: 5 },
      { suits: 'heart', number: 4 },
      { suits: 'spade', number: 3 },
      { suits: 'heart', number: 2 },
      { suits: 'spade', number: 1 },
    ];
    const second = [
      { suits: 'heart', number: 7 },
      { suits: 'heart', number: 6 },
      { suits: 'heart', number: 5 },
      { suits: 'heart', number: 4 },
      { suits: 'spade', number: 3 },
      { suits: 'heart', number: 2 },
      { suits: 'spade', number: 1 },
    ];
    const third = [
      { suits: 'heart', number: 7 },
      { suits: 'heart', number: 6 },
      { suits: 'heart', number: 5 },
      { suits: 'spade', number: 4 },
      { suits: 'heart', number: 3 },
      { suits: 'spade', number: 2 },
      { suits: 'heart', number: 1 },
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
      <div className={classes.cardCascadeZone}>
        {Object.keys(freeCell.cardCascades).map((key): JSX.Element => (
          <CardWall
            key={key}
            cascadeFieldName={key}
            cascadeField={(freeCell.cardCascades[key] as PlayCard[])}
          >
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
