import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 80vh;
  padding-top: 196px;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #fff;
    transition: all 0.25s ease-in-out;
    opacity: ${(props) => (props.active ? 0.7 : 0)};
    pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 64px;
`

export const Input = styled.textarea`
  font-size: 128px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -6px;
  color: #0a0912;
  border: none;
  max-width: 820px;
  height: ${(props) => (props.active ? '140px' : '260px')};
  resize: none;
  overflow: hidden;

  &::placeholder {
    opacity: 1;
    color: #0a0912;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    &::placeholder {
      opacity: 0.5;
      color: #0a0912;
    }
  }
`

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-right: 64px;
  margin-top: 48px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 32px 56px;
  padding-left: 112px;
`
