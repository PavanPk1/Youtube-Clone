import styled from 'styled-components'

export const VideoItemDetailsRightContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  width: 80%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.textColor ? '#313131' : '#f1f1f1')};
  align-self: flex-start;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

export const ProfileName = styled.p`
  color: ${props => (props.textColor ? '#313131' : '#909090')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const VideoSubscribers = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.textColor ? '#313131' : '#909090')};

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`

export const VideoItemDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.textColor ? '#424242' : '#909090')};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

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
