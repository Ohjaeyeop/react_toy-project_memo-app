import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdSearch } from 'react-icons/md';
import MemoAdd from './MemoAdd';

const MemoTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
`;

const MemoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: BlanchedAlmond;
  border-radius: 10px;
  color: white;
`;

const MemoSubWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: gray;
  input {
    background: none;
    outline: none;
    border: none;
    flex: 1;
    padding: 0.5rem;
    color: gray;
  }
  button {
    background: BurlyWood;
    outline: none;
    border: none;
    font-size: 1.5rem;
    color: white;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

const MemoTemplate = () => {
  const [modal, setModal] = useState(false);
  const onAddClick = () => {
    setModal(true);
  };
  return (
    <MemoTemplateBlock>
      <MemoTitleWrapper>
        <h1>Memo</h1>
      </MemoTitleWrapper>
      <MemoSubWrapper>
        <MdSearch />
        <input placeholder="작품, 인물 등" />
        <button onClick={onAddClick}>
          <MdAdd />
        </button>
      </MemoSubWrapper>
      <MemoAdd visible={modal} />
      <h3>MemoList</h3>
    </MemoTemplateBlock>
  );
};

export default MemoTemplate;
