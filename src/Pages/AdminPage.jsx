import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/SessionContext'
import { Title } from '@mantine/core'
import AddEventForm from '../Components/EventForm'
import IsPrivate from '../Components/IsPrivate'





export default function AdminPage() {
  const { isLoggedIn } = useContext(AuthContext)
  return !isLoggedIn ? (
    <>
      <p>Page requires admin access</p>
    </>
  ):(
    <>
        <Title>Admin</Title>
        <br></br>
        <AddEventForm></AddEventForm>
        <br></br>
        <AddEventForm isUpdating></AddEventForm>
    </>
    
  )
}
