import styled from 'styled-components'

export const SavedVideoTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.textColor ? '#313131' : '#f1f1f1')};
  align-self: flex-start;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
