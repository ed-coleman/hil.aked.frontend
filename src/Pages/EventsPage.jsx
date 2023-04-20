import React from 'react'
import { Link, Text, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Title } from '@mantine/core';
import EventsComponent from '../Components/EventsComponent';


export default function EventsPage() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)  
    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://hil-aked-backend.adaptable.app/events");
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

        </tr>
    ))

    console.log(events.length)


  return (
    <EventsComponent />
  )
 
}
