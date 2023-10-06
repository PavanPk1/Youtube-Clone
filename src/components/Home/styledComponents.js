import styled from 'styled-components'

export const HomeRightContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f1f1f1' : '#181818')};
  width: 80%;
  padding: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const HomePage = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
  min-height: 100vh;
`
export const LeftPannel = styled.div`
  width: 20%;
  padding: 20px;
  height: 90vh;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#231f20')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    display: none;
  }
`

export const NavigationOption = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`

// left pannel bottom styling
export const ContactUs = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`
export const SocialMedia = styled.img`
  width: 20%;
  margin-right: 10px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`
//  no search results styling
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  line-height: 18px;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`
export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`
