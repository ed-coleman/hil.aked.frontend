import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Title, Loader } from "@mantine/core";
import { AuthContext } from "../Contexts/SessionContext";

export default function EventsComponent() {
  const { isLoggedIn, token } = useContext(AuthContext);
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

  events.forEach((event) => {
    if (!event.link) {
      event.infolink = "-";
    } else {
      event.infolink = "More Info/Tickets";
    }
  });

  const eventsCopy = [...events];
  const date = new Date();
  const pastEvents = [];

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  for (let i = 0; i < eventsCopy.length; i++) {
    if (eventsCopy[i].year < year) {
      pastEvents.push(eventsCopy[i]);
      eventsCopy.splice(i, 1);
    }
  }

  for (let i = 0; i < eventsCopy.length; i++) {
    if (eventsCopy[i].month < month && eventsCopy[i].year <= year) {
      pastEvents.push(eventsCopy[i]);
      eventsCopy.splice(i, 1);
    }
  }

  for (let i = 0; i < eventsCopy.length; i++) {
    if (
      eventsCopy[i].day < day &&
      eventsCopy[i].month <= month &&
      eventsCopy[i].year <= year
    ) {
      pastEvents.push(eventsCopy[i]);
      eventsCopy.splice(i, 1);
    }
  }

  eventsCopy.sort((a, b) => a.day - b.day);
  eventsCopy.sort((a, b) => a.month - b.month);
  eventsCopy.sort((a, b) => a.year - b.year);

  const rows = eventsCopy.map((event) => (
    <tr key={event._id}>
      <td>{event.title}</td>
      <td>{`${event.day}/${event.month}/${event.year}`}</td>
      <td>{`${event.location.substring(0, 35)}`}</td>
      <td>{event.city}</td>
      <td>
        <a className="link" href={event.link}>
          {event.infolink}
        </a>
      </td>
    </tr>
  ));

  const authRows = eventsCopy.map((event) => (
    <tr key={event._id}>
      <td>{event.title}</td>
      <td>{`${event.day}/${event.month}/${event.year}`}</td>
      <td>{`${event.location.substring(0, 35)}`}</td>
      <td>{event.city}</td>
      <td>
        <a className="link" href={event.link}>
          {event.infolink}
        </a>
      </td>
      <td>
        <a className="link" href={`/events/update/${event._id}`}>
          Update
        </a>
      </td>
    </tr>
  ));

  return isLoading ? (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Loader color="dark" size="xl" variant="dots" />
    </>
  ) : events.length === 0 ? (
    <Title order={2}>No upcoming events at the moment </Title>
  ) : isLoggedIn ? (
    <>
      <br></br>
      <Title>Upcoming Events</Title>
      <br></br>
      <br></br>
      <div className="table">
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>{authRows}</tbody>
        </Table>
        <br></br>
      </div>
    </>
  ) : (
    <>
      <br></br>
      <Title>Upcoming Events</Title>
      <br></br>
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
    </>
  );
}
