import { PlayCard } from '../../reducers/playCards/playCards';
import { CardCascadesI } from '../../reducers/freeCell/freeCell';

export const FILLCARDCASCADES = 'FILLCARDCASCADES';
export const CHANGECASCADEFIELDNAME = 'CHANGECASCADEFIELDNAME';
export const CASCADETOEMPTYCELL = 'CASCADETOEMPTYCELL';
export const CHANGEEMPTYCELLNAME = 'CHANGEEMPTYCELLNAME';
export const EMPTYCELLTOCASCADE = 'EMPTYCELLTOCASCADE';

interface FillCardCascadesActionI {
  type: typeof FILLCARDCASCADES;
  payload: {
    cardCascades: CardCascadesI;
  };
}

export const fillCardCascades = (cardCascades: CardCascadesI): FillCardCascadesActionI => ({
  type: FILLCARDCASCADES,
  payload: {
    cardCascades,
  },
});

interface ChangeCascadeFieldNameActionI {
  type: typeof CHANGECASCADEFIELDNAME;
  payload: {
    card: PlayCard;
    currentCascadeFieldName: string;
    targetCascadeFieldName: string;
  };
}

export const changeCascadeFieldName = (
  card: PlayCard,
  currentCascadeFieldName: string,
  targetCascadeFieldName: string,
): ChangeCascadeFieldNameActionI => ({
  type: CHANGECASCADEFIELDNAME,
  payload: {
    card,
    currentCascadeFieldName,
    targetCascadeFieldName,
  },
});

interface CascadeToEmptyCellActionI {
  type: typeof CASCADETOEMPTYCELL;
  payload: {
    card: PlayCard;
    currentCascadeFieldName: string;
    targetEmptyCellName: string;
  };
}

export const cascadeToEmptyCell = (
  card: PlayCard,
  currentCascadeFieldName: string,
  targetEmptyCellName: string,
): CascadeToEmptyCellActionI => ({
  type: CASCADETOEMPTYCELL,
  payload: {
    card,
    currentCascadeFieldName,
    targetEmptyCellName,
  },
});

interface ChangeEmptyCellNameActionI {
  type: typeof CHANGEEMPTYCELLNAME;
  payload: {
    card: PlayCard;
    currentEmptyCellName: string;
    targetEmptyCellName: string;
  };
}

export const changeEmptyCellName = (
  card: PlayCard,
  currentEmptyCellName: string,
  targetEmptyCellName: string,
): ChangeEmptyCellNameActionI => ({
  type: CHANGEEMPTYCELLNAME,
  payload: {
    card,
    currentEmptyCellName,
    targetEmptyCellName,
  },
});

interface EmptyCellToCascadeActionI {
  type: typeof EMPTYCELLTOCASCADE;
  payload: {
    card: PlayCard;
    currentEmptyCellName: string;
    targetCascadeFieldName: string;
  };
}

export const emptyCellToCascade = (
  card: PlayCard,
  currentEmptyCellName: string,
  targetCascadeFieldName: string,
): EmptyCellToCascadeActionI => ({
  type: EMPTYCELLTOCASCADE,
  payload: {
    card,
    currentEmptyCellName,
    targetCascadeFieldName,
  },
});

export type FreeCellActionTypes = FillCardCascadesActionI | ChangeCascadeFieldNameActionI
| ChangeEmptyCellNameActionI | CascadeToEmptyCellActionI | EmptyCellToCascadeActionI;
