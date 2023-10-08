import styled from 'styled-components'

export const GameName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.textColor ? '#475569' : '#f8fafc')};
`

export const GameViewers = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.textColor ? '#475569' : '#f8fafc')};
`
