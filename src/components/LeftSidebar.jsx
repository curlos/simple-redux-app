import styled from 'styled-components'

const StyledLeftSideBar = styled.div`
  font-size: 18px;
  padding: 20px;
  flex: 1;
  border-right: 1px solid lightgray;

  div {
    margin-bottom: 15px;
  }
`

const LeftSidebar = () => {

  return (
    <StyledLeftSideBar>
      <div><ion-icon name="home-outline"></ion-icon> Homepage</div>
      <div><ion-icon name="list-outline"></ion-icon> Lists</div>
      <div><ion-icon name="book-outline"></ion-icon> Products</div>
      <div><ion-icon name="people-outline"></ion-icon> Groups</div>
      <div><ion-icon name="copy-outline"></ion-icon> Pages</div>
      <div><ion-icon name="images-outline"></ion-icon> Photos</div>
      <div><ion-icon name="videocam-outline"></ion-icon> Videos</div>
      <div><ion-icon name="time-outline"></ion-icon> Schedule</div>
      <div><ion-icon name="list-circle-outline"></ion-icon> Wishlist</div>
      <div><ion-icon name="cog-outline"></ion-icon> Settings</div>
      <div><ion-icon name="chevron-forward-circle-outline"></ion-icon> Logout</div>
    </StyledLeftSideBar>
  )
}

export default LeftSidebar;