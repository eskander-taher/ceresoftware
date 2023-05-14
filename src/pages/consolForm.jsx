import { Button, Card, CardContent, Typography, Box,  TextField } from '@mui/material'



import { Stack } from '@mui/system'
import React, {useState} from 'react'
import Section from '../components/UI/section/Section'

import validator from 'validator'



const ConsolForm = () => {

const inputStyle={
  sx: {
      borderRadius:'20px 20px 0  0', 
      backgroundColor:'#F1F3F5',
      textAlign:'left',
      p:'20px',
  },
}


 
const boxStyles = {
  '& > :not(style)': { m: 1, width: {xs:'280px', md:'300px'} }, 
  display:'flex', 
  flexDirection:{xs:'column',md:'row'},
   justifyContent:'center', 
   alignItems:'center',
  gap:'20px'}


  const [status, setStatus] = useState("Submit");
const [details,setDetails] = useState({
  name:"",
  email:"",
  phone:"",
  direction:"",
  message:"",
})





  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmpty(details.name) && !validator.isEmpty(details.direction) && validator.isMobilePhone(details.phone) && validator.isEmail(details.email) && !validator.isEmpty(details.message))  {

    let response = await fetch("http://localhost:5000/ConsolForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    return true
    } else{
      
      alert("Make sure to fill all the required information with the correct input");
      return false

  }};


  return (
    <Section header="Your Form">
        <Stack alignItems='center'>
        <form  autoComplete="off">
          <Card sx={{width:{xs:'340px',md:'900px'}, borderRadius:'50px', boxShadow:'5px 5px 20px  lightgray', p:'30px 0', }} >
            <Typography fontSize={{xs:'18px', md:'28px'}} pl={{xs:'30px',md:"100px"}}>Please fill the blancks beneath to accomplish your order</Typography>
              <CardContent sx={{display:'flex', flexDirection:'column',  justifyContent:'space-evenly', alignItems:'center', gap:'20px'}}>
                <Box component="form"
          sx={boxStyles}>
                  <TextField label="Add your Name"  id="name"  type="text"  fullWidth InputProps={inputStyle} variant='filled' 
                  onChange={(e)=>setDetails({...details,name:e.target.value})} required/>
                  <TextField label='Add a Country' id="direction"  type="text"  fullWidth InputProps={inputStyle} variant='filled'  required 
                  onChange={(e)=>setDetails({...details,direction:e.target.value})}/>
                </Box>
                <Box component="form"
          sx={boxStyles}>
                  <TextField id="email" label='Add your E-mail' type='email'  fullWidth InputProps={inputStyle}  variant='filled'  required
                  onChange={(e)=>setDetails({...details,email:e.target.value})}
                 />
                  <TextField   id="phone" label='Add your Phone number' type="text"  fullWidth InputProps={inputStyle} variant='filled'  required  
                  onInput={(e)=>{e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}}
                  onChange={(e)=>setDetails({...details,phone:e.target.value})}/>
                </Box>
                <Box component="form"
          sx={{'& > :not(style)': { m: 1, width: {xs:'280px', md:'630px'} }}}>
                  <TextField id="message" label='Add a Description'  type="text"  fullWidth minRows={5} maxRows={6}  multiline InputProps={inputStyle} variant='filled' required 
                  onChange={(e)=>setDetails({...details,message:e.target.value})}/>
                </Box>
                
                <Button type='submit'  sx={{ height:'50px', width:'150px', backgroundColor:'#1C7ED6', color:'#fff', borderRadius:'50px', fontSize:'22px', '&:hover':{
                  backgroundColor:'#FFD8A8'
                }}} onClick={handleSubmit}>{status}</Button>
              </CardContent>
          </Card>
        </form>
      </Stack>
    </Section>
  )
}

export default ConsolForm;
