import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
  display: flex;
  width: 100%;
  height: 90vh;
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
