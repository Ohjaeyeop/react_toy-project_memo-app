import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const MemoListItemBlock = styled.div`
  background-color: SeaShell;
  padding: 1.125rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  border-radius: 10px;
  color: DimGray;
  & + & {
    margin-top: 2.25rem;
  }
`;

const RemoveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 17px;
  top: -4px;
  button {
    outline: none;
    border: none;
    background-color: SeaShell;
    color: coral;
    font-size: 0.5rem;
    cursor: pointer;
  }
`;

const QuoteSpan = styled.span`
  color: gray;
  font-size: 0.9rem;
  :nth-child(3) {
    padding-left: 8px;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.025rem;
  position: relative;
  top: 6px;
  left: 5px;
  line-height: 1.75rem;
`;

const MemoListItem = ({ memo, onRemove }) => {
  const onClick = () => onRemove(memo.id);

  return (
    <MemoListItemBlock>
      <RemoveWrapper>
        <button onClick={onClick}>X</button>
      </RemoveWrapper>
      <div>
        <QuoteSpan>
          <ImQuotesLeft />
        </QuoteSpan>
        <StyledSpan>{memo.contents}</StyledSpan>
        <QuoteSpan>
          <ImQuotesRight />
        </QuoteSpan>
        {memo.who && <StyledSpan> - {memo.who}</StyledSpan>}
        {memo.where && <StyledSpan> ,&lt; {memo.where} &gt; 중에서</StyledSpan>}
      </div>
    </MemoListItemBlock>
  );
};

export default MemoListItem;
