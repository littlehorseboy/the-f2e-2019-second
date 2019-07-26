const pathToCard = require.context('../../assets/images', false, /\.svg$/);


export interface PlayCard {
  suits: string;
  number: number;
  imgSrc: string;
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
      (n, index): PlayCard => ({ suits: 'spade', number: index + 1, imgSrc: pathToCard(`./spade${index + 1}.svg`) }),
    ),
    // 紅心 heart
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'heart', number: index + 1, imgSrc: pathToCard(`./heart${index + 1}.svg`) }),
    ),
    // 方塊 diamond
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'diamond', number: index + 1, imgSrc: pathToCard(`./diamond${index + 1}.svg`) }),
    ),
    // 梅花 club
    ...new Array(13).fill(null).map(
      (n, index): PlayCard => ({ suits: 'club', number: index + 1, imgSrc: pathToCard(`./club${index + 1}.svg`) }),
    ),
  ],
};

const reducer = (state = initState): PlayCards => state;

export default reducer;
