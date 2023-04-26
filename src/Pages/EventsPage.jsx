import React from 'react'
import { Link, Text, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Title } from '@mantine/core';
import PastEventsComponent from '../Components/PastEventsComponent';



export default function EventsPage() {

    const navigate = useNavigate()
   

    const goBack = () => {
        navigate('/')
    }


  return (
    <>
    <br></br>
    <br></br>
    <Title>Upcoming Events</Title>
    <br></br>
    <br></br>
    <PastEventsComponent />
   
    </>
  )
 
}
