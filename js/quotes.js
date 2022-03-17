const quotes = [
  {
    quote: "친구는 기쁨을 두 배로 늘려주고 슬픔을 반으로 줄여준다",
    author: "실러",
  },
  {
    quote:
      "우정은 평등한 사람 간의 사리 없는 거래다. 사랑은 폭군과 노예간의 비열한 교섭이다",
    author: "골드스미스",
  },
  {
    quote: "친구에게 속는 것보다 친구를 믿지 않는 것이 더 부끄러운 일이다",
    author: "라 로슈푸코",
  },
  {
    quote: "우정은 날개 없는 사랑이다",
    author: "바이런",
  },
  {
    quote: "친구란 또 하나의 자신이다",
    author: "아리스토텔레스",
  },
  {
    quote: "친구와 포도주는 오랠수록 좋다",
    author: "영국 속담",
  },
  {
    quote: "너의 친구를, 그의 결점과 함께 사랑하라",
    author: "이탈리아 격언",
  },
  {
    quote: "우정이란, 이해받는 것보다는 이해를 주는 데 있다",
    author: "아리스토 텔레스",
  },
  {
    quote: "친구는 근심과 슬픔을 서로 나눠야 하는 것이다",
    author: "셰익스피어",
  },
  {
    quote: "신은 용기 있는 자를 결코 버리지 않는다",
    author: "켄러",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
