import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdSearch } from 'react-icons/md';
import MemoAdd from './MemoAdd';
import MemoList from './MemoList';
import Button from './common/Button';

const MemoTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
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

const Paginator = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  Button {
    :first-child {
      margin-right: 0.75rem;
    }
    :last-child {
      margin-left: 0.75rem;
    }
  }
`;

const StyledPage = styled.span`
  cursor: pointer;
  & + & {
    margin-left: 0.5rem;
  }
  color: ${(props) => (props.active ? 'coral' : 'gray')};
`;

const MemoTemplate = ({ memos, onAdd, onRemove }) => {
  const [modal, setModal] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filteredMemos, setFilteredMemos] = useState(memos);

  const onAddClick = () => {
    setModal(true);
  };
  const onCancelClick = () => {
    setModal(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredMemos(memos);
  }, [memos]);

  useEffect(() => {
    setFilteredMemos(
      memos.filter(
        (memo) =>
          memo.contents.includes(search) ||
          (memo.who && memo.who.includes(search)) ||
          (memo.where && memo.where.includes(search)),
      ),
    );
  }, [search, memos]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(filteredMemos.length / 4); i++) {
    pages.push(i);
  }
  return (
    <MemoTemplateBlock>
      <MemoTitleWrapper>
        <h1>Memo</h1>
      </MemoTitleWrapper>
      <MemoSubWrapper>
        <MdSearch />
        <input placeholder="작품, 인물 등" value={search} onChange={onChange} />
        <button onClick={onAddClick}>
          <MdAdd />
        </button>
      </MemoSubWrapper>
      <MemoAdd visible={modal} onCancelClick={onCancelClick} onAdd={onAdd} />
      <MemoList
        memos={filteredMemos.slice((currentPage - 1) * 4, currentPage * 4)}
        onRemove={onRemove}
      />
      <Paginator>
        <Button
          onClick={() =>
            setcurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          이전
        </Button>
        {pages.map((page) => (
          <StyledPage
            active={page === currentPage}
            onClick={() => setcurrentPage(page)}
          >
            [{page}]
          </StyledPage>
        ))}
        <Button
          onClick={() =>
            setcurrentPage(
              currentPage < pages.length ? currentPage + 1 : currentPage,
            )
          }
        >
          다음
        </Button>
      </Paginator>
    </MemoTemplateBlock>
  );
};

export default MemoTemplate;
