import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';

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

const MemoAddBlock = styled.div`
  width: 512px;
  border-radius: 10px;
  background-color: FloralWhite;
  h3 {
    color: gray;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    margin-bottom: 2.5rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-top: 1.5rem;
  }
`;

const StyledLabel = styled.label`
  padding: 0.5rem;
  width: 15%;
  color: gray;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 70%;
  border-bottom: 1px solid Bisque;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Footer = styled.div`
  margin-top: 3.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-evenly;
`;

const MemoAdd = ({ visible, onCancelClick, memos }) => {
  if (!visible) return null;
  const onButtonClick = () => {
    onCancelClick();
  };
  return (
    <Fullscreen>
      <MemoAddBlock>
        <h3>메모 작성하기</h3>
        <form>
          <InputWrapper>
            <StyledLabel for="contents">Contents</StyledLabel>
            <StyledInput
              name="contents"
              placeholder="명언, 명대사, 좋은 구절 등"
              id="contents"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledLabel for="person">Who?</StyledLabel>
            <StyledInput name="who" placeholder="인물" id="who" />
          </InputWrapper>
          <InputWrapper>
            <StyledLabel for="where">Where?</StyledLabel>
            <StyledInput name="where" placeholder="책, 영화 등" id="where" />
          </InputWrapper>
        </form>
        <Footer>
          <Button onClick={onButtonClick}>추가</Button>
          <Button onClick={onButtonClick}>취소</Button>
        </Footer>
      </MemoAddBlock>
    </Fullscreen>
  );
};

export default MemoAdd;
