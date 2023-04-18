import React from 'react'
import { Link, Text, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Title } from '@mantine/core';

export default function EventsComponent() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(null)  
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
    const rows = events.map((event) => (
        <tr key={event._id}>
            <td>{event.title}</td>
            <td>{event.location}</td>
            <td>{event.date.getFullYear}</td>
        </tr>
    ))


return isLoading ? (
    <h1>Loading...</h1>
    ):(
    
    events.length === 0 ? (
      <Title order={4}>No upcoming events at the moment </Title>
    ):(
    <>
    <h1>Events</h1>
    <h2>Upcoming</h2>
    <Table>
    
    <thead>
    
        <tr>
        </tr>
    </thead>
    <tbody>{rows}</tbody>
    </Table>
    </>
    )
    )
}




