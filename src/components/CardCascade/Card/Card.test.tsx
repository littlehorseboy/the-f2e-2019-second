import React from 'react';
import { render, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import { FreeCell } from '../../../reducers/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';
import Card from './Card';

afterEach(cleanup);

const freeCell = useSelector((
  state: { freeCellReducer: FreeCell },
): FreeCell => state.freeCellReducer);

test('測試', (): void => {
  const utils = render(<Card cascadeFieldName="first" cascadeField={freeCell.cardCascades.first as PlayCard[]} />);
  const el = utils.getByTestId('draggingCard');

  expect(el).toBe('div');
});
