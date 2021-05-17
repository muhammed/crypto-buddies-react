import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 184px;
  display: flex;
  align-items: flex-start;
`

export const Avatar = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 100%;
  object-fit: cover;
  background-color: #ddd;
  margin-right: 56px;
`

export const Title = styled.h1`
  font-size: 128px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -6px;
  color: #0a0912;
  margin-top: 0;
  margin-bottom: 72px;
  max-width: 900px;
`

export const Button = styled.button`
  border: none;
  width: 280px;
  height: 72px;
  padding: 21px 0 27px;
  box-shadow: 0 8px 32px 0 rgba(10, 9, 18, 0.16),
    0 4px 64px 0 rgba(188, 64, 199, 0.32);
  background-color: #bc40c7;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`
