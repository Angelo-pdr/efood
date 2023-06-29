import styled from 'styled-components'
import { cores } from '../../styles/index'
import { Props } from '.'

import { Link } from 'react-router-dom'

export const TagContainer = styled.a<Props>`
  background-color: ${cores.rosa};
  margin-right: 8px;
  padding 4px 6px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  font-size: ${(props) => (props.size == 'big' ? '14px' : '12px')};
`
export const ButtonLink = styled(Link)<Props>`
  background-color: ${cores.rosa};
  margin-right: 8px;
  padding: 4px 6px;
  color: ${cores.branca};
  font-weight: 700;
  display: inline-block;
  font-size: 12px;
`
