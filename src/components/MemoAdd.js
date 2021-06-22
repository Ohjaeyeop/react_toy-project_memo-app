import React from 'react';
import styled from 'styled-components';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
`;

const MemoAddBlock = styled.div``;

const StyledInput = styled.input``;

const MemoAdd = ({ visible }) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <MemoAddBlock>
        <h3>메모 작성하기</h3>
        <form>
          <StyledInput name="contents" placeholder="내용" />
          <StyledInput name="person" placeholder="내용" />
          <StyledInput name="where" placeholder="내용" />
        </form>
      </MemoAddBlock>
    </Fullscreen>
  );
};

export default MemoAdd;
