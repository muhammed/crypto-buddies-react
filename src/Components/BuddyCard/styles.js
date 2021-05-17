import styled, { css, keyframes } from 'styled-components'

const fadeUpAnimation = keyframes`
 from {
    opacity: 0;
    transform: translate3d(0, 70%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const cardAnimationStyles = css`
  animation: ${fadeUpAnimation} 0.45s ease;
  animation-delay: ${({ index }) => Number(index) * 0.04}s;
  animation-fill-mode: both;
`

export const Card = styled.div`
  width: 168px;
  display: inline-block;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  ${({ animate }) => animate && cardAnimationStyles};

  &:hover {
    img {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
      transform: scale(1.05);
    }
  }
`

export const Avatar = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 100%;
  object-fit: cover;
  background-color: #ddd;
  transition: all 0.25s ease-in-out;
`
export const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: rgba(10, 9, 18, 0.64);
  margin: 8px 0 0;
`
