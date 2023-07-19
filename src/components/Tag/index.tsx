import * as S from './styles'

export type Props = {
  type: 'tag' | 'link'
  size?: 'small' | 'big'
  children: string
  to?: string
}

const Tag = ({ children, to, type, size = 'small' }: Props) => {
  if (type === 'tag') {
    return (
      <S.TagContainer type="tag" size={size}>
        {children}
      </S.TagContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} type="link" size={size}>
      {children}
    </S.ButtonLink>
  )
}

export default Tag
