import { ButtonContainer } from './styles'

const Button = ({ children, onClick, type }: ButtonProps) => (
  <ButtonContainer type={type} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
