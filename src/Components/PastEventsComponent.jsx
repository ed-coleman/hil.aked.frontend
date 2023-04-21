import React from "react";
import { Link, Text, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Title } from "@mantine/core";

export default function PastEventsComponent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://hil-aked-backend.adaptable.app/events"
      );
      const parsed = await response.json();
      setEvents(parsed);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const goBack = () => {
    navigate("/");
  };

  events.forEach((event) => {
    if (!event.link) {
      event.infolink = "-";
    } else {
      event.infolink = "More Info/Tickets";
    }
  });

  const eventsCopy = [...events]
  const date = new Date();
  const pastEvents = [];

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;



for (let i = 0; i < eventsCopy.length; i++) {
  if (eventsCopy[i].year < year) {
    pastEvents.push(eventsCopy[i])
    {
      if ([i] > -1) {
eventsCopy.splice(i, 1)
      }
  }
}
}

for (let i = 0; i < eventsCopy.length; i++) {
  if (eventsCopy[i].month < month) {
    pastEvents.push(eventsCopy[i])
    {
      if ([i] > -1) {
eventsCopy.splice(i, 1)
      }
  }
}
}

for (let i = 0; i < eventsCopy.length; i++) {
  if (eventsCopy[i].day < day && eventsCopy.month <= month) {
    pastEvents.push(eventsCopy[i])
    {
      if ([i] > -1) {
eventsCopy.splice(i, 1)
      }
  }
}
}

eventsCopy.sort((a,b) => a.day - b.day)
eventsCopy.sort((a,b) => a.month - b.month)
eventsCopy.sort((a,b) => a.year - b.year)

pastEvents.sort((a,b) => a.day - b.day)
pastEvents.sort((a,b) => a.month - b.month)
pastEvents.sort((a,b) => a.year - b.year)



  const rows = eventsCopy.map((event) => (
    <tr key={event._id}>
      <td>{event.title}</td>
      <td>{`${event.day}/${event.month}/${event.year}`}</td>
      <td>{event.location}</td>
      <td>{event.city}</td>
      <td>
        <a href={event.link}>{event.infolink}</a>
      </td>
    </tr>
  ));

  const pastRows = pastEvents.map((event) => (
    <tr key={event._id}>
      <td>{event.title}</td>
      <td>{`${event.day}/${event.month}/${event.year}`}</td>
      <td>{event.location}</td>
      <td>{event.city}</td>
      <td>
        <a href={event.link}>{event.infolink}</a>
      </td>
    </tr>
  ));


  return isLoading ? (
    <Title order={2}>Loading...</Title>
  ) : events.length === 0 ? (
    <Title order={2}>No upcoming events at the moment </Title>
  ) : (
    <>
      <br></br>
      <div className="table">
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <Title>Past Events</Title>
      <br></br>
      <div className="table">
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>{pastRows}</tbody>
        </Table>
        <br></br>
      </div>
    </>
  );
}
