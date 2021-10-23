import { useSelector } from 'react-redux'
import styled from "styled-components";

const StyledHeader  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`

const WebsiteLogo = styled.div`
  font-size: 25px;
  color: #bb0000;
`

const WebsiteSections = styled.div`
  a {
    margin-right: 15px;
    color: black;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const Circle = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: red;
`

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`

const SearchInput = styled.input`
  border-radius: 20px;
  border: 1px solid lightgray;
  padding: 10px;
  width: 30%;
`

const Header = () => {

  const name = useSelector(state => state.user.name)

  return (
    <StyledHeader>
      <WebsiteLogo>Miami Heat App</WebsiteLogo>
      <WebsiteSections>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </WebsiteSections>

      <SearchInput placeholder="Search for something..." />

      <UserProfile>
        <Circle></Circle>
        <span>{name}</span>
        <ion-icon name="caret-down-outline"></ion-icon>
      </UserProfile>
    </StyledHeader>
  )
}

export default Header;