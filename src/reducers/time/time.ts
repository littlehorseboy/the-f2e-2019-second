import {
  TimeActionTypes,
  TIMEADDONE,
  TIMESTOP,
  TIMERESTART,
} from '../../actions/time/time';

export interface TimeI {
  status: 'timing' | 'stop';
  seconds: number;
}

const initState: TimeI = {
  status: 'timing',
  seconds: 0,
};

const reducer = (state = initState, action: TimeActionTypes): TimeI => {
  switch (action.type) {
    case TIMEADDONE:
      return {
        status: 'timing',
        seconds: state.seconds + 1,
      };
    case TIMESTOP:
      return {
        ...state,
        status: action.payload.status,
      };
    case TIMERESTART:
      return {
        status: action.payload.status,
        seconds: 0,
      };
    default:
      return state;
  }
};

export default reducer;
