import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { auth } from '../config/firebase'
import HomeNav from './HomeNav'

export default function HomePage() {
  useEffect(()=>{
    if(auth.currentUser){
      console.log(auth.currentUser.phoneNumber)
    } 
})
  return (
    <>
    <HomeNav/>
    <Container>
        <h1>Hi</h1>
        <button onClick={(e)=>{auth.signOut(); window.location.href="/"}}>Log out</button>
    </Container>
    </>
  )
}
