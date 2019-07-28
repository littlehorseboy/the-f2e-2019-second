import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { TimeI } from '../../reducers/time/time';
import { timeAddOne } from '../../actions/time/time';

const useStyles = makeStyles({
  root: {
    color: '#A75300',
    fontSize: 24,
    fontWeight: 'bold',
    '& svg': {
      marginRight: 8,
    },
  },
});

let timer = setInterval((): void => {}, 10000);

export default function Timing(): JSX.Element {
  const classes = useStyles();

  const time = useSelector((
    state: { timeReducer: TimeI },
  ): TimeI => state.timeReducer);

  const dispatch = useDispatch();

  useEffect((): void => {
    if (time.status === 'timing') {
      timer = setInterval((): void => {
        dispatch(timeAddOne());
      }, 1000);
    } else if (time.status === 'stop') {
      clearInterval(timer);
    }
  }, [time.status]);

  return (
    <div className={classes.root}>
      <SvgIcon viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
      </SvgIcon>
      {Math.floor(time.seconds / 60).toString().padStart(2, '0')} : {(time.seconds % 60).toString().padStart(2, '0')}
    </div>
  );
}
