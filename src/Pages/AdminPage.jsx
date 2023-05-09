import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/SessionContext'
import { Title } from '@mantine/core'
import AddEventForm from '../Components/EventForm'


export default function AdminPage() {
  return (
    <>
        <Title>Admin</Title>
        <br></br>
        <AddEventForm></AddEventForm>
        <br></br>
        <AddEventForm isUpdating></AddEventForm>
    </>
    
  )
}
