import React, { useCallback, useRef, useState } from 'react';
import MemoTemplate from './components/MemoTemplate';

const App = () => {
  const [memos, setMemos] = useState([
    {
      id: 1,
      contents:
        '진정한 여행이란 새로운 풍경을 찾는 것이 아니라 새로운 시각을 갖는 것이다.',
      who: '마르셀 프루스트',
    },
    {
      id: 2,
      contents: '독재가 하나의 현실이라면 혁명은 하나의 의무이다.',
      where: '리스본행 야간열차',
    },
    {
      id: 3,
      contents:
        '누군가를 사랑할 때 가장 아름다운 시간은 시작하기 전 설레는 감정이라고',
      where: '그 시절, 우리가 좋아했던 소녀',
    },
    {
      id: 4,
      contents: '국경의 긴 터널을 빠져나오자, 눈의 고장이었다.',
      who: '가와바타 야스나리',
      where: '설국',
    },
  ]);
  const nextId = useRef(5);
  const onAdd = useCallback(
    (value) => {
      const memo = {
        id: nextId.current,
        contents: value.contents,
        who: value.who,
        where: value.where,
      };
      setMemos(memos.concat(memo));
      nextId.current += 1;
    },
    [memos],
  );
  const onRemove = useCallback(
    (id) => {
      setMemos(memos.filter((memo) => memo.id !== id));
    },
    [memos],
  );
  return <MemoTemplate onAdd={onAdd} onRemove={onRemove} memos={memos} />;
};

export default App;
