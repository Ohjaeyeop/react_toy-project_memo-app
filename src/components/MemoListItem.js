import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const MemoListItemBlock = styled.div`
  background-color: SeaShell;
  padding: 1.125rem;
  border-radius: 10px;
  color: DimGray;
  & + & {
    margin-top: 2.25rem;
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

const MemoListItem = ({ memo }) => {
  return (
    <MemoListItemBlock>
      <QuoteSpan>
        <ImQuotesLeft />
      </QuoteSpan>
      <StyledSpan>{memo.contents}</StyledSpan>
      <QuoteSpan>
        <ImQuotesRight />
      </QuoteSpan>
      {memo.who && <StyledSpan>- {memo.who}</StyledSpan>}
      {memo.where && <StyledSpan>, {memo.where} 중에서</StyledSpan>}
    </MemoListItemBlock>
  );
};

export default MemoListItem;
