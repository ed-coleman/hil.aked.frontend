import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EventForm from '../Components/EventForm'
import { Loader } from '@mantine/core'

export default function UpdatePage() {

    const { eventId } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [event, setEvent] = useState()

    const fetchEvent = async () => {
        try {
            const response = await fetch(`https://hil-aked-backend.adaptable.app/events/${eventId}`)
            const parsed = await response.json()
            setEvent(parsed)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchEvent()
    }, [eventId])










  return isLoading ? (
    <>
    <br></br>
    <br></br>
    <br></br>
    <Loader color="dark" size="xl" variant="dots" />
    </>
  ):(
    <EventForm isUpdating eventTitle={event.title} eventLocation={event.location} eventCity={event.city} eventDay={event.day} eventMonth={event.month} eventYear={event.year} eventLink={event.link} />
  )
}
