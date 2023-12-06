import styled from 'styled-components'

export const ScrollToTopButton = styled.button`
  line-height: 0;
  border: 0;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 6px;

  transition: all 0.2s;

  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};

  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;

  &:hover {
    background-color: ${(props) => props.theme['purple-700']};
  }

  &.buttonVisible {
    visibility: auto;
    opacity: 1;
  }

  &.buttonIsNotVisible {
    visibility: hidden;
    opacity: 0;
  }
`
