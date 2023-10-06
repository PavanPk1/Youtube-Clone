import styled from 'styled-components'

export const LeftPannel = styled.div`
  width: 20%;
  padding: 20px;
  height: 90vh;
  background-color: ${props => (props.bgColor ? '#ffffff' : '#231f20')};
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
  width: 25px;
  margin-right: 10px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.textColor ? '#231f20' : '#f9f9f9')};
`
