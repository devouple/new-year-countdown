import { keyframes } from 'styled-components'

export const rollIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

export const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
