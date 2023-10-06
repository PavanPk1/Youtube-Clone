import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '' : '#231f20')};
`

export const LoginForm = styled.form`
  box-shadow: 0px 4px 16px 0px ${props => (props.bgColor ? '#bfbfbf' : '')};
  padding: 25px;
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
  @media (max-width: 576px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
`
export const LabelName = styled.label`
  color: ${props => (props.textColor ? '#1e293b' : '#ffffff')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0px;
`
export const TextField = styled.input`
  color: ${props => (props.textColor ? '#1e293b' : '#ffffff')};
  outline: none;
  border-radius: 4px;
  border: 1px solid #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 42px;
  padding: 10px;
  background-color: transparent;
`
