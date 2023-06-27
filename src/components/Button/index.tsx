import { ButtonContainer } from './styles'

export type ButtonProps = {
  children: JSX.Element
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
)

export default Button
