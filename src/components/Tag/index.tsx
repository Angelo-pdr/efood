import { TagContainer, ButtonLink } from './styles'

export type Props = {
  type: 'tag' | 'link'
  size?: 'small' | 'big'
  children: string
  to?: string
}

const Tag = ({ children, to, type, size = 'small' }: Props) => {
  if (type === 'tag') {
    return (
      <TagContainer type="tag" size={size}>
        {children}
      </TagContainer>
    )
  }
  return (
    <ButtonLink to={to as string} type="link" size={size}>
      {children}
    </ButtonLink>
  )
}

export default Tag
