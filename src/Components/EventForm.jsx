import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/SessionContext";
import { useContext } from "react";
import { Title } from "@mantine/core";


export default function EventForm({
  eventTitle = "",
  eventLocation = "",
  eventCity = "",
  eventDay = 0,
  eventMonth = 0,
  eventYear= 0,
  eventTime= "",
  eventLink = "",
  isUpdating = false,
  eventId,
}) {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [title, setTitle] = useState(eventTitle);
  const [location, setLocation] = useState(eventLocation);
  const [city, setCity] = useState(eventCity);
  const [day, setDay] = useState(eventDay);
  const [month, setMonth] = useState(eventMonth);
  const [year, setYear] = useState(eventYear);
  const [time, setTime] = useState(eventTime)
  const [link, setLink] = useState(eventLink)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {;
      console.log(isUpdating)
      const response = await fetch(
        `https://hil-aked-backend.adaptable.app/events${
          isUpdating ? `/update/${eventId}` : ""
        }`,
        {
          method: isUpdating ? "PUT" : "POST",

          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            title,
            location,
            city,
            day,
            month,
            year,
            time,
            link,
          }),
        }
      );
      if (response.status === 201) {
        const parsed = await response.json();
        console.log(parsed)
        console.log(response.status);
        navigate(`/events`);
      }
      if (response.status === 200) {
        console.log(response.status)
        const parsed = await response.json();
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="crudFormContainer">
      <Title order={3}>{isUpdating ? "Update Event" : "Add Event"}</Title>
      <br></br>
      <br></br>
      <form className="crudForm" onSubmit={handleSubmit}>
        <label>
          Event Title: {" "}
          </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        
        <label>
          Location: {" "}
          </label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
       
        <label>
          City: {" "}
          </label>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
       
        <label>
          Day: {" "}
          </label>
          <input
            type="number"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
       
        <label>
          Month: {""}
          </label>
          <input
            type="number"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
          />
       
        <label>
          Year: {""}
          </label>
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        <label>
          Time: {""}
          </label>
          <input
            type="text"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
       
        <label>
          Link: {" "}
          </label>
          <input
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        <button onClick={handleSubmit} type="submit">{isUpdating ? "Update" : "Add"}</button>
      </form>
      </div>
    </>
  );
}