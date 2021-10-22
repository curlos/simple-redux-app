import styled from 'styled-components'

const StyledRightSidebar = styled.div`
  padding: 15px;
  flex: 1;
  width: 100%;
`

const ImageContainer = styled.div`
  margin-bottom: 15px;
`

const DefaultImage = styled.div`
  width: 100%;
  height: 100px;
  background-color: #bb0000;
  margin-top: 10px;
`

const MoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  padding: 10px;
`

const RightSidebar = () => {

  return (
    <StyledRightSidebar>
      <ImageContainer>
        <div>Recommneded for undefined</div>
        <DefaultImage>&nbsp;</DefaultImage>
      </ImageContainer>

      <ImageContainer>
        <div>Popular on Miami Heat App</div>
        <DefaultImage>&nbsp;</DefaultImage>
      </ImageContainer>

      <ImageContainer>
        <div>Editor's choice</div>
        <DefaultImage>&nbsp;</DefaultImage>
      </ImageContainer>
      
      <MoreButton>See More <ion-icon name="caret-down-outline"></ion-icon></MoreButton>
    </StyledRightSidebar>
  )
}

export default RightSidebar;