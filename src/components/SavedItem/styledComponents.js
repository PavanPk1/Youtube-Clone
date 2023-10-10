import styled from 'styled-components'

export const SavedVideoTitle = styled.p`
  font-size: 16px;
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
export const ViewCount = styled.p`
  color: ${props => (props.textColor ? '#94a3b8' : '#f1f1f1')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
`
