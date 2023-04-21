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

    /*const pastRows = pastEvents.map((event) => (
      <tr key={event._id}>
        <td>{event.title}</td>
        <td>{`${event.day}/${event.month}/${event.year}`}</td>
        <td>{event.location}</td>
        <td>{event.city}</td>
        <td>
          <a href={event.link}>{event.infolink}</a>
        </td>
      </tr>
    ));*/
    


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
