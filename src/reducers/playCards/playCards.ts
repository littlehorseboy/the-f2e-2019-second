
export interface PlayCard {
  suits: string;
  number: number;
}

export interface PlayCards {
  playCards: PlayCard[];
}

// 11 Jack 騎士
// 12 Queen 皇后
// 13 King 國王

const initState: PlayCards = {
  playCards: [
    // 黑桃 spade
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'spade', number: index + 1 }),
    ),
    // 紅心 heart
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'heart', number: index + 1 }),
    ),
    // 方塊 diamond
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'diamond', number: index + 1 }),
    ),
    // 梅花 club
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'club', number: index + 1 }),
    ),
  ],
};

const reducer = (state = initState): PlayCards => state;

export default reducer;
