import React from 'react'
import { Link, Text, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Title } from '@mantine/core';


export default function EventsComponent() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)  
    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events");
        const parsed = await response.json();
        setEvents(parsed);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);

    const goBack = () => {
        navigate('/')
    }

    const rows = events.map((event) => (
        <tr key={event._id}>
            <td>{event.title}</td>
            <td>{event.location}</td>
            <td>{`${event.day}/${event.month}/${event.year}`}</td>

        </tr>
    ))

    console.log(events.length)


  return isLoading ? (
    <h1>Loading...</h1>
  ):(

    events.length === 0 ? (
      <Title order={2}>No upcoming events at the moment </Title>
    ):(
 <>
   <Table>
   
    <thead>
    
        <tr>
        </tr>
    </thead>
    <tbody>{rows}</tbody>
   </Table>
<br></br>
    </>
 
  )
  )
}
