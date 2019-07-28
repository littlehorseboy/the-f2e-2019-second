export const TIMEADDONE = 'TIMEADDONE';
export const TIMESTOP = 'TIMESTOP';
export const TIMERESTART = 'TIMERESTART';


interface TimeAddOneActionI {
  type: typeof TIMEADDONE;
}

export const timeAddOne = (): TimeAddOneActionI => ({
  type: TIMEADDONE,
});

interface TimeStopActionI {
  type: typeof TIMESTOP;
  payload: {
    status: 'stop';
  };
}

export const timeStop = (status: 'stop'): TimeStopActionI => ({
  type: TIMESTOP,
  payload: {
    status,
  },
});

interface TimeRestartActionI {
  type: typeof TIMERESTART;
  payload: {
    status: 'timing';
  };
}

export const timeRestart = (status: 'timing'): TimeRestartActionI => ({
  type: TIMERESTART,
  payload: {
    status,
  },
});

export type TimeActionTypes = TimeAddOneActionI | TimeStopActionI | TimeRestartActionI;
