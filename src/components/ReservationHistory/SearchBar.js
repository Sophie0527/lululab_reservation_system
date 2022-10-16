import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({
  orderUrl,
  setOrderUrl,
  handleOnKeyPress,
  handleOnClick,
}) => {
  return (
    <SearchContainer>
      <h2>예약조회</h2>
      <SearchBox>
        <input
          placeholder="예약 번호를 입력해주세요."
          type="text"
          value={orderUrl}
          onChange={e => {
            setOrderUrl(e.target.value);
          }}
          onKeyDown={handleOnKeyPress}
        />
        <SearchOutlined type="button" value="search" onClick={handleOnClick} />
      </SearchBox>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  background-color: #da005c;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  padding-bottom: 10px;
  h2 {
    padding: 10px;
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 10px;
  padding: 10px 50px;
  border-radius: 5px;
  svg {
    color: #3a3a3a;
    cursor: pointer;
  }
  input {
    border: none;
    font-size: 15px;
    padding-left: 10px;
    ::placeholder {
      font-size: 13px;
      padding: 5px;
    }
    :focus {
      outline: none;
    }
  }
`;
