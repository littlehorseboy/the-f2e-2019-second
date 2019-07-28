import { PlayCard } from '../playCards/playCards';
import {
  FILLCARDCASCADES,
  FreeCellActionTypes,
  CHANGECASCADEFIELDNAME,
  EMPTYCELLTOCASCADES,
  FOUNDATIONTOCASCADES,
  CHANGEEMPTYCELLNAME,
  CASCADETOEMPTYCELLS,
  FOUNDATIONTOEMPTYCELLS,
  CHANGEFOUNDATIONNAME,
  CASCADETOFOUNDATIONS,
  EMPTYCELLTOFOUNDATIONS,
} from '../../actions/freeCell/freeCell';

/* eslint max-len: ["error", { "code": 150 }] */

export interface CardCascadesI {
  first: null[] | PlayCard[];
  second: null[] | PlayCard[];
  third: null[] | PlayCard[];
  fourth: null[] | PlayCard[];
  fifth: null[] | PlayCard[];
  sixth: null[] | PlayCard[];
  seventh: null[] | PlayCard[];
  eighth: null[] | PlayCard[];
  [propName: string]: null[] | PlayCard[];
}

export interface FreeCell {
  emptyCells: {
    first: null[] | PlayCard[];
    second: null[] | PlayCard[];
    third: null[] | PlayCard[];
    fourth: null[] | PlayCard[];
    [propName: string]: null[] | PlayCard[];
  };
  cardCascades: CardCascadesI;
  foundations: {
    first: null[] | PlayCard[];
    second: null[] | PlayCard[];
    third: null[] | PlayCard[];
    fourth: null[] | PlayCard[];
    [propName: string]: null[] | PlayCard[];
  };
}

const initState: FreeCell = {
  // 空白區: 4 張的位置自由擺放牌組，影響遊戲區拖放數量
  emptyCells: {
    first: [],
    second: [],
    third: [],
    fourth: [],
  },
  // 遊戲區：8 個亂數牌區隨機擺放 52 張 (4 個區各擺放 7 張，4 個區各擺放 6 張)
  cardCascades: {
    first: [],
    second: [],
    third: [],
    fourth: [],
    fifth: [],
    sixth: [],
    seventh: [],
    eighth: [],
  },
  // 所有的牌移動到此區後，即完成遊戲
  foundations: {
    first: [],
    second: [],
    third: [],
    fourth: [],
  },
};

const reducer = (state = initState, action: FreeCellActionTypes): FreeCell => {
  /**
   * 拖動複數卡片時，得將陣列切成兩半再填入 fieldName
   */
  const changeCascadeFieldName = (
    card: PlayCard,
    currentCascadeFieldName: string,
    targetCascadeFieldName: string,
  ): { [propName: string]: PlayCard[] } => {
    const findCardCascadeIndex = (state.cardCascades[currentCascadeFieldName] as PlayCard[])
      .findIndex((cardCascade): boolean => cardCascade.suits === card.suits
        && cardCascade.number === card.number);

    const currentField = (state.cardCascades[currentCascadeFieldName] as PlayCard[])
      .slice(0, findCardCascadeIndex);

    const targetField = (state.cardCascades[currentCascadeFieldName] as PlayCard[])
      .slice(findCardCascadeIndex);

    return {
      [currentCascadeFieldName]: currentField,
      [targetCascadeFieldName]: [
        ...(state.cardCascades[targetCascadeFieldName] as PlayCard[]),
        ...targetField,
      ],
    };
  };

  switch (action.type) {
    case FILLCARDCASCADES:
      return {
        emptyCells: state.emptyCells,
        cardCascades: {
          ...action.payload.cardCascades,
        },
        foundations: state.foundations,
      };
    case CHANGECASCADEFIELDNAME:
      return {
        emptyCells: state.emptyCells,
        cardCascades: {
          ...state.cardCascades,
          ...changeCascadeFieldName(
            action.payload.card,
            action.payload.currentCascadeFieldName,
            action.payload.targetCascadeFieldName,
          ),
        },
        foundations: state.foundations,
      };
    case EMPTYCELLTOCASCADES:
      return {
        emptyCells: {
          ...state.emptyCells,
          [action.payload.currentEmptyCellName]: [],
        },
        cardCascades: {
          ...state.cardCascades,
          [action.payload.targetCascadeFieldName]: [
            ...(state.cardCascades[action.payload.targetCascadeFieldName] as PlayCard[]),
            action.payload.card,
          ],
        },
        foundations: state.foundations,
      };
    case FOUNDATIONTOCASCADES:
      return {
        emptyCells: state.emptyCells,
        cardCascades: {
          ...state.cardCascades,
          [action.payload.targetCascadeFieldName]: [
            ...(state.cardCascades[action.payload.targetCascadeFieldName] as PlayCard[]),
            action.payload.card,
          ],
        },
        foundations: {
          ...state.foundations,
          [action.payload.currentFoundationName]: (state.foundations[action.payload.currentFoundationName] as PlayCard[])
            .filter((foundation): boolean => !(foundation.suits === action.payload.card.suits
              && foundation.number === action.payload.card.number)),
        },
      };
    case CHANGEEMPTYCELLNAME:
      return {
        emptyCells: {
          ...state.emptyCells,
          [action.payload.currentEmptyCellName]: [],
          [action.payload.targetEmptyCellName]: [action.payload.card],
        },
        cardCascades: state.cardCascades,
        foundations: state.foundations,
      };
    case CASCADETOEMPTYCELLS:
      return {
        emptyCells: {
          ...state.emptyCells,
          [action.payload.targetEmptyCellName]: (state.cardCascades[action.payload.currentCascadeFieldName] as PlayCard[])
            .filter((cardCascade): boolean => cardCascade.suits === action.payload.card.suits
              && cardCascade.number === action.payload.card.number),
        },
        cardCascades: {
          ...state.cardCascades,
          [action.payload.currentCascadeFieldName]: (state.cardCascades[action.payload.currentCascadeFieldName] as PlayCard[])
            .filter((cardCascade): boolean => !(cardCascade.suits === action.payload.card.suits
              && cardCascade.number === action.payload.card.number)),
        },
        foundations: state.foundations,
      };
    case FOUNDATIONTOEMPTYCELLS:
      return {
        emptyCells: {
          ...state.emptyCells,
          [action.payload.targetEmptyCellName]: (state.foundations[action.payload.currentFoundationName] as PlayCard[])
            .filter((foundation): boolean => foundation.suits === action.payload.card.suits
              && foundation.number === action.payload.card.number),
        },
        cardCascades: state.cardCascades,
        foundations: {
          ...state.foundations,
          [action.payload.currentFoundationName]: (state.foundations[action.payload.currentFoundationName] as PlayCard[])
            .filter((foundation): boolean => !(foundation.suits === action.payload.card.suits
              && foundation.number === action.payload.card.number)),
        },
      };
    case CHANGEFOUNDATIONNAME:
      return {
        emptyCells: state.emptyCells,
        cardCascades: state.cardCascades,
        foundations: {
          ...state.foundations,
          [action.payload.currentFoundationName]: (state.foundations[action.payload.currentFoundationName] as PlayCard[])
            .filter((foundation): boolean => !(foundation.suits === action.payload.card.suits
              && foundation.number === action.payload.card.number)),
          [action.payload.targetFoundation]: [action.payload.card],
        },
      };
    case CASCADETOFOUNDATIONS:
      return {
        emptyCells: state.emptyCells,
        cardCascades: {
          ...state.cardCascades,
          [action.payload.currentCascadeFieldName]: (state.cardCascades[action.payload.currentCascadeFieldName] as PlayCard[])
            .filter((cardCascade): boolean => !(cardCascade.suits === action.payload.card.suits
              && cardCascade.number === action.payload.card.number)),
        },
        foundations: {
          ...state.foundations,
          [action.payload.targetFoundationName]: [
            ...(state.foundations[action.payload.targetFoundationName] as PlayCard[]),
            action.payload.card,
          ],
        },
      };
    case EMPTYCELLTOFOUNDATIONS:
      return {
        emptyCells: {
          ...state.emptyCells,
          [action.payload.currentEmptyCellName]: [],
        },
        cardCascades: state.cardCascades,
        foundations: {
          ...state.foundations,
          [action.payload.targetFoundationName]: [
            ...(state.foundations[action.payload.targetFoundationName] as PlayCard[]),
            action.payload.card,
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
