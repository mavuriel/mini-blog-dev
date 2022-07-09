import styled, { css } from 'styled-components'

export const PrimaryButtonStyle = css`
  display: block;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: ${props => props?.theme?.colors?.primary ?? 'navy'};
  color: ${props => props?.theme?.colors?.lightText ?? 'white'};
  cursor: pointer;
`

export const SecondaryButtonStyle = css`
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  text-decoration-thickness: 3px;
  background: transparent;
  color: inherit;
  border: 0;
  display: inline-block;
  cursor: pointer;
`

export const LinkPrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`

export const PrimaryButton = styled.button`
  ${PrimaryButtonStyle}
`

export const LinkSecondaryButton = styled.a`
  ${SecondaryButtonStyle}
`

export const SecondaryButton = styled.button`
  ${SecondaryButtonStyle}
`
