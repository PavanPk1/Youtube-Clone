import styled from 'styled-components'

export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#231f20' : '#f4f4f4')};
  @media (max-width: 576px) {
    font-size: 16px;
  }
`
export const TrendingName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#424242' : ' #e2e8f0')};
  line-height: 3px;
`
