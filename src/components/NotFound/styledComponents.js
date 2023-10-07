import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 90vh;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#231f20')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  color: ${props => (props.textColor ? '#383838' : '#ffffff')};
  line-height: 12px;
`

export const NotFoundSubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.textColor ? '#909090' : '#f1f5f9')};
  text-align: center;
  @media (min-width: 576px) {
    line-height: 12px;
  }
`
