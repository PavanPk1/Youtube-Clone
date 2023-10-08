import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  height: 90%;
  display: flex;
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
