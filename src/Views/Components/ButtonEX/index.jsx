import emotionStyled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { Children } from 'react'

const ButtonEX = emotionStyled(Button)`
  
  padding: 8px 20px;
  min-width: 120px;
  color: #ffffff;
  background:#FF5B4A;
  border-radius: 6px;

  &:hover {
    background: #FF5B4A;
    color: #ffffff;
  }

  &.dark{
    color: #ffffff;
    background: #FF5B4A;

    &:hover {
      background: #FF5B4A;
      color: #ffffff;
    }
  }
`;

const StyledButton = ({link, children,isDark}) => {
  return (
    <ButtonEX href={link} className={isDark&&'dark'}>{children}</ButtonEX>
  )
}

export default StyledButton