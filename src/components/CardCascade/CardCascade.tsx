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

  const emptyCellsLen = 5 - freeCell.emptyCells.first.length
    - freeCell.emptyCells.second.length
    - freeCell.emptyCells.third.length
    - freeCell.emptyCells.fourth.length;

  const dispatch = useDispatch();

  useEffect((): void => {
    // 牌組題目還需要擴充
    // #5478730
    const first = [
      playCards[6 - 1],
      playCards[3 + 13 + 13 - 1],
      playCards[7 + 13 - 1],
      playCards[7 - 1],
      playCards[2 + 13 - 1],
      playCards[2 + 13 + 13 - 1],
      playCards[13 + 13 + 13 - 1],
    ];
    const second = [
      playCards[11 + 13 - 1],
      playCards[9 - 1],
      playCards[3 + 13 + 13 + 13 - 1],
      playCards[5 + 13 + 13 - 1],
      playCards[2 - 1],
      playCards[5 - 1],
      playCards[13 - 1],
    ];
    const third = [
      playCards[9 + 13 - 1],
      playCards[5 + 13 + 13 + 13 - 1],
      playCards[2 + 13 + 13 + 13 - 1],
      playCards[13 + 13 + 13 + 13 - 1],
      playCards[7 + 13 + 13 - 1],
      playCards[6 + 13 + 13 + 13 - 1],
      playCards[3 + 13 - 1],
    ];
    const fourth = [
      playCards[10 + 13 + 13 - 1],
      playCards[9 + 13 + 13 + 13 - 1],
      playCards[12 + 13 - 1],
      playCards[12 + 13 + 13 + 13 - 1],
      playCards[1 + 13 + 13 + 13 - 1],
      playCards[4 + 13 + 13 + 13 - 1],
      playCards[1 - 1],
    ];
    const fifth = [
      playCards[1 + 13 + 13 - 1],
      playCards[11 + 13 + 13 - 1],
      playCards[8 + 13 + 13 + 13 - 1],
      playCards[3 - 1],
      playCards[8 + 13 - 1],
      playCards[11 + 13 + 13 + 13 - 1],
    ];
    const sixth = [
      playCards[6 + 13 + 13 - 1],
      playCards[4 - 1],
      playCards[8 + 13 + 13 - 1],
      playCards[10 - 1],
      playCards[12 + 13 + 13 - 1],
      playCards[4 + 13 - 1],
    ];
    const seventh = [
      playCards[8 - 1],
      playCards[7 + 13 + 13 + 13 - 1],
      playCards[10 + 13 - 1],
      playCards[11 - 1],
      playCards[10 + 13 + 13 + 13 - 1],
      playCards[9 + 13 + 13 - 1],
    ];
    const eighth = [
      playCards[4 + 13 + 13 - 1],
      playCards[6 + 13 - 1],
      playCards[1 + 13 - 1],
      playCards[13 + 13 - 1],
      playCards[5 + 13 - 1],
      playCards[12 - 1],
    ];

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
            cascadeField={freeCell.cardCascades[key] as PlayCard[]}
          >
            <Card
              cascadeFieldName={key}
              cascadeField={freeCell.cardCascades[key] as PlayCard[]}
              emptyCellsLen={emptyCellsLen}
            />
          </CardWall>
          {key === 'fourth' && <div className={classes.divider}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}
