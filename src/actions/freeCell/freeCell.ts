import { PlayCard } from '../../reducers/playCards/playCards';
import { CardCascadesI } from '../../reducers/freeCell/freeCell';

export const FILLCARDCASCADES = 'FILLCARDCASCADES';

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

export const CHANGECASCADEFIELDNAME = 'CHANGECASCADEFIELDNAME';

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

export type FreeCellActionTypes = FillCardCascadesActionI | ChangeCascadeFieldNameActionI;
