import { PlayCard } from '../../reducers/playCards/playCards';
import { CardCascadesI } from '../../reducers/freeCell/freeCell';

export const FILLCARDCASCADES = 'FILLCARDCASCADES';
export const CHANGECASCADEFIELDNAME = 'CHANGECASCADEFIELDNAME';
export const EMPTYCELLTOCASCADES = 'EMPTYCELLTOCASCADES';
export const FOUNDATIONTOCASCADE = 'FOUNDATIONTOCASCADE';
export const CHANGEEMPTYCELLNAME = 'CHANGEEMPTYCELLNAME';
export const CASCADETOEMPTYCELL = 'CASCADETOEMPTYCELL';
export const CHANGEFOUNDATION = 'CHANGEFOUNDATION';
export const CASCADETOFOUNDATIONS = 'CASCADETOFOUNDATIONS';
export const EMPTYCELLTOFOUNDATIONS = 'EMPTYCELLTOFOUNDATIONS';


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

interface EmptyCellToCascadeActionI {
  type: typeof EMPTYCELLTOCASCADES;
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
  type: EMPTYCELLTOCASCADES,
  payload: {
    card,
    currentEmptyCellName,
    targetCascadeFieldName,
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

interface ChangeFoundationActionI {
  type: typeof CHANGEFOUNDATION;
  payload: {
    card: PlayCard;
    currentFoundation: string;
    targetFoundation: string;
  };
}

export const changeFoundation = (
  card: PlayCard,
  currentFoundation: string,
  targetFoundation: string,
): ChangeFoundationActionI => ({
  type: CHANGEFOUNDATION,
  payload: {
    card,
    currentFoundation,
    targetFoundation,
  },
});

interface CascadeToFoundationsActionI {
  type: typeof CASCADETOFOUNDATIONS;
  payload: {
    card: PlayCard;
    currentCascadeFieldName: string;
    targetFoundationName: string;
  };
}

export const cascadeToFoundations = (
  card: PlayCard,
  currentCascadeFieldName: string,
  targetFoundationName: string,
): CascadeToFoundationsActionI => ({
  type: CASCADETOFOUNDATIONS,
  payload: {
    card,
    currentCascadeFieldName,
    targetFoundationName,
  },
});

interface EmptyCellToFoundationsActionI {
  type: typeof EMPTYCELLTOFOUNDATIONS;
  payload: {
    card: PlayCard;
    currentEmptyCellName: string;
    targetFoundationName: string;
  };
}

export const emptyCellToFoundations = (
  card: PlayCard,
  currentEmptyCellName: string,
  targetFoundationName: string,
): EmptyCellToFoundationsActionI => ({
  type: EMPTYCELLTOFOUNDATIONS,
  payload: {
    card,
    currentEmptyCellName,
    targetFoundationName,
  },
});

export type FreeCellActionTypes = FillCardCascadesActionI
| ChangeCascadeFieldNameActionI | EmptyCellToCascadeActionI
| ChangeEmptyCellNameActionI | CascadeToEmptyCellActionI
| ChangeFoundationActionI | CascadeToFoundationsActionI | EmptyCellToFoundationsActionI;
