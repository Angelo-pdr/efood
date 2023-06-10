import styled from 'styled-components'
import { cores } from '../../styles/index'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  margin-top: 1rem;
  margin-bottom: 8px;
  margin-right: 8px;
  padding 4px 6px;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  font-size: ${(props) => (props.size == 'big' ? '14px' : '12px')};
`
