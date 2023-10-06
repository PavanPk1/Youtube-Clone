import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#f9f9f9 ' : '#0f0f0f ')};
`
export const TrendingRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: ${props => (props.bgColor ? '#f1f1f1' : '#181818')};
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const TrendingBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#d7dfe9' : '#424242')};
`
export const TrendingHeading = styled.h1`
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
