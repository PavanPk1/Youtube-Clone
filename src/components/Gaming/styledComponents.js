import styled from 'styled-components'

export const GamingRightContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  width: 80%;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const GamingBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => (props.bgColor ? '#cccccc' : '#424242')};
`
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#181818' : '#f1f1f1')};
`
