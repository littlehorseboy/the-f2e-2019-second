import React from 'react';
import { render, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import { FreeCell } from '../../../reducers/freeCell/freeCell';
import { PlayCard } from '../../../reducers/playCards/playCards';
import Card from './Card';

afterEach(cleanup);

const freeCell: FreeCell = {
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

test('測試', (): void => {
  const utils = render(<Card cascadeFieldName="first" cascadeField={freeCell.cardCascades.first as PlayCard[]} />);
  const el = utils.getByTestId('draggingCard');

  expect(el).toBe('div');
});
