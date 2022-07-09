import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: ${props => props?.justify ?? 'center'};
  flex-wrap: wrap;
  gap: 1rem;
`
