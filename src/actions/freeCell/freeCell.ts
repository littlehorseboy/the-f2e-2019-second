import { PlayCard } from '../../reducers/playCards/playCards';
import { CardCascadesI } from '../../reducers/freeCell/freeCell';

export const FILLCARDCASCADES = 'FILLCARDCASCADES';
export const CHANGECASCADEFIELDNAME = 'CHANGECASCADEFIELDNAME';
export const EMPTYCELLTOCASCADES = 'EMPTYCELLTOCASCADES';
export const FOUNDATIONTOCASCADES = 'FOUNDATIONTOCASCADES';
export const CHANGEEMPTYCELLNAME = 'CHANGEEMPTYCELLNAME';
export const CASCADETOEMPTYCELLS = 'CASCADETOEMPTYCELLS';
export const FOUNDATIONTOEMPTYCELLS = 'FOUNDATIONTOEMPTYCELLS';
export const CHANGEFOUNDATIONNAME = 'CHANGEFOUNDATIONNAME';
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

interface EmptyCellToCascadesActionI {
  type: typeof EMPTYCELLTOCASCADES;
  payload: {
    card: PlayCard;
    currentEmptyCellName: string;
    targetCascadeFieldName: string;
  };
}

export const emptyCellToCascades = (
  card: PlayCard,
  currentEmptyCellName: string,
  targetCascadeFieldName: string,
): EmptyCellToCascadesActionI => ({
  type: EMPTYCELLTOCASCADES,
  payload: {
    card,
    currentEmptyCellName,
    targetCascadeFieldName,
  },
});

interface FoundationToCascadesActionI {
  type: typeof FOUNDATIONTOCASCADES;
  payload: {
    card: PlayCard;
    currentFoundationName: string;
    targetCascadeFieldName: string;
  };
}

export const fundationToCascades = (
  card: PlayCard,
  currentFoundationName: string,
  targetCascadeFieldName: string,
): FoundationToCascadesActionI => ({
  type: FOUNDATIONTOCASCADES,
  payload: {
    card,
    currentFoundationName,
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

interface CascadeToEmptyCellsActionI {
  type: typeof CASCADETOEMPTYCELLS;
  payload: {
    card: PlayCard;
    currentCascadeFieldName: string;
    targetEmptyCellName: string;
  };
}

export const cascadeToEmptyCells = (
  card: PlayCard,
  currentCascadeFieldName: string,
  targetEmptyCellName: string,
): CascadeToEmptyCellsActionI => ({
  type: CASCADETOEMPTYCELLS,
  payload: {
    card,
    currentCascadeFieldName,
    targetEmptyCellName,
  },
});

interface FoundationToEmptyCellsActionI {
  type: typeof FOUNDATIONTOEMPTYCELLS;
  payload: {
    card: PlayCard;
    currentFoundationName: string;
    targetEmptyCellName: string;
  };
}

export const foundationToEmptyCells = (
  card: PlayCard,
  currentFoundationName: string,
  targetEmptyCellName: string,
): FoundationToEmptyCellsActionI => ({
  type: FOUNDATIONTOEMPTYCELLS,
  payload: {
    card,
    currentFoundationName,
    targetEmptyCellName,
  },
});

interface ChangeFoundationActionI {
  type: typeof CHANGEFOUNDATIONNAME;
  payload: {
    card: PlayCard;
    currentFoundationName: string;
    targetFoundation: string;
  };
}

export const changeFoundation = (
  card: PlayCard,
  currentFoundationName: string,
  targetFoundation: string,
): ChangeFoundationActionI => ({
  type: CHANGEFOUNDATIONNAME,
  payload: {
    card,
    currentFoundationName,
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
| ChangeCascadeFieldNameActionI | EmptyCellToCascadesActionI | FoundationToCascadesActionI
| ChangeEmptyCellNameActionI | CascadeToEmptyCellsActionI | FoundationToEmptyCellsActionI
| ChangeFoundationActionI | CascadeToFoundationsActionI | EmptyCellToFoundationsActionI;
