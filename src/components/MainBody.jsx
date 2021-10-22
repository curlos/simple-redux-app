import styled from 'styled-components'

const StyledMainBody = styled.div`
  flex: 3;
  padding: 15px;
  border-right: 1px solid lightgray;
`

const Header = styled.div`
  font-size: 24px;
  font-weight: 600;
`

const DeleteAccountContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-top: 15px;
  padding-bottom: 15px;
`

const WarningMessage = styled.div`
  background-color: #e6e674ab;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
`

const DeleteAccountButton = styled.button`
  border: none;
  color: white;
  background-color: #ff98a9;
  padding: 10px;
  border-radius: 10px;
`

const ProfilePicSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: red;
  margin-right: 10px;
`

const BlueLink = styled.a`
  color: #62a1ff;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const ProfileInfoContainer = styled.div`
  margin: 10px auto;
`

const UserInputs = styled.div`

`

const UserInput = styled.input`
  padding: 7px;
  width: 50%;
  margin: 10px auto;
  border-radius: 5px;
  border: 2px solid lightgray;
`

const UpdateButton = styled.button`
  margin-top: 5px;
  border-radius: 10px;
  background-color: #00b8a8;
  border: none;
  padding: 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

const MainBody = () => {

  return (
    <StyledMainBody>
      <Header>Update Your Account</Header>
      <DeleteAccountContainer>
        <WarningMessage>Deleting account cannot be undone! You should confirm your password to delete your account.</WarningMessage>
        <DeleteAccountButton>Delete Account</DeleteAccountButton>
      </DeleteAccountContainer>
      
      <ProfileInfoContainer>
        <span>Profile Picture</span>
        <ProfilePicSection>
          <Circle></Circle> <BlueLink>Change</BlueLink>
        </ProfilePicSection>
      </ProfileInfoContainer>

      <UserInputs>
        <div>Username</div>
        <UserInput />
        <div>Email</div>
        <UserInput />
        <div>Password</div>
        <UserInput />
      </UserInputs>

      <UpdateButton>Update</UpdateButton>
    </StyledMainBody>
  )
}

export default MainBody;