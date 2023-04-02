import React from 'react'
import {Button} from '@mui/material'
import { alpha, styled } from "@mui/material/styles";
const CSButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "28px",
  color: "#FFFFFF",
  padding: "16px 54px",
  borderRadius: "60px",
  textDecoration: "uppercase",
  boxShadow: `0px 10px 15px 0px  ${alpha(theme.palette.primary.main, 0.5)}`,
  "&:hover": {
    // boxShadow: `0px 10px 15px 0px  ${alpha(theme.palette.primary.dark,0.5)}`,
  },
}));


// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

export default CSButton;