import React from 'react';
import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const MemoListBlock = styled.div`
  margin-top: 2.5rem;
`;

const MemoList = ({ memos, onRemove }) => {
  return (
    <MemoListBlock>
      {memos.map((memo) => (
        <MemoListItem memo={memo} onRemove={onRemove} key={memo.id} />
      ))}
    </MemoListBlock>
  );
};

export default MemoList;
