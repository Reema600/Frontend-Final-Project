import React from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export default function Login() {
const [name , setName]=React.useState("")
const [password , setPassword]=React.useState("")
const [email , setEmail]=React.useState("")


const navigat = useNavigate()
const signUp = async()=>{

  if(name.length<=4 || email.length<=4 || password.length<=4){
    alert("User Name should be more then 4 ")
  }else{
const url =await axios.post("https://6486ea6abeba6297278f7b88.mockapi.io/name",{
  name,
  email,
  password
    }).then(res=>{
    
      localStorage.setItem("name", res.data.userName)
      localStorage.setItem("id", res.data.id)
    })
 navigat("/home")
  }
 
}
  return (
    <div>
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
          
            <center>
            < CgProfile size='100px'/>
            </center>
            
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}> Login</Heading>
              <HStack spacing="1" justify="center">
           
           
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
              <FormControl>
                  <FormLabel htmlFor="name"> User Name</FormLabel>
                  <Input id="name" type="name"  onChange={(event) => setName(event.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" onChange={(event) => setEmail(event.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" type="password"   onChange={(event) => setPassword(event.target.value)}/>
                </FormControl>
               
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
            
              </HStack>
              <Stack spacing="6">
                <Link to='/home"'>
                <Button type="submit" onClick={signUp}>Login</Button>
                </Link>
              
             
              
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

    </div>
  )
}
