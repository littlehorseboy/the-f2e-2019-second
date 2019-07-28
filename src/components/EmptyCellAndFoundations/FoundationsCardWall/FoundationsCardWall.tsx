import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { DragItemI } from '../../CardCascade/Card/Card';
import { changeFoundation, cascadeToFoundations, emptyCellToFoundations } from '../../../actions/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';
import { FreeCell } from '../../../reducers/freeCell/freeCell';

const spadeImg = require('../../../assets/images/icons/spade.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const heartImg = require('../../../assets/images/icons/heart.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const diamondImg = require('../../../assets/images/icons/diamond.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const clubImg = require('../../../assets/images/icons/club.svg'); // eslint-disable-line @typescript-eslint/no-var-requires

const useStyles = makeStyles({
  root: {
    height: 145.5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardWallWrapper: {
    margin: '14px 14px 0 14px',
    width: 'calc(100% - 28px)',
    height: 'calc(100% - 14px)',
    backgroundColor: 'rgba(76, 101, 60, 0.3)',
    borderRadius: 6,
    position: 'relative',
  },
  emptyCard: {
    backgroundColor: 'rgba(76, 101, 60, 0.3)',
    borderRadius: 6,
    height: 130.5,
  },
});

const suitsCheck = (first: string, second: string): boolean => (first === 'spade' && second === 'spade')
    || (first === 'club' && second === 'club')
    || (first === 'heart' && second === 'heart')
    || (first === 'spade' && second === 'spade');

interface Props {
  foundationName: string;
  foundationCards: PlayCard[];
  freeCell: FreeCell;
  children: ReactNode;
}

export default function FoundationsCardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [lastCard] = props.foundationCards.slice(-1);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      if (item.cascadeFieldName) {
        dispatch(cascadeToFoundations(item.card, item.cascadeFieldName, props.foundationName));
      }
      if (item.emptyCellName) {
        dispatch(emptyCellToFoundations(item.card, item.emptyCellName, props.foundationName));
      }
      if (item.foundationName) {
        dispatch(changeFoundation(item.card, item.foundationName, props.foundationName));
      }
    },
    canDrop: (item: DragItemI): boolean => {
      if (lastCard) {
        return item.card.number === lastCard.number + 1
          && suitsCheck(item.card.suits, lastCard.suits);
      }
      return !lastCard && item.card.number === 1;
    },
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const backgoundImgPath = ((): string => {
    if (props.foundationName === 'first') {
      return `url(${spadeImg})`;
    }
    if (props.foundationName === 'second') {
      return `url(${heartImg})`;
    }
    if (props.foundationName === 'third') {
      return `url(${diamondImg})`;
    }
    if (props.foundationName === 'fourth') {
      return `url(${clubImg})`;
    }
    return '';
  })();

  return (
    <div ref={drop} className={classes.root}>
      <div
        className={classes.cardWallWrapper}
        style={{ backgroundImage: backgoundImgPath }}
      >
        {props.children}

        {isOver && canDrop && <div className={classes.emptyCard}></div>}
      </div>
    </div>
  );
}
