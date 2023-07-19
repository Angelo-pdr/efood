import { string } from 'yup'
import { ButtonContainer } from './styles'

export type ButtonProps = {
  children: JSX.Element
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({ children, onClick, type }: ButtonProps) => (
  <ButtonContainer type={type} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
