import React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "@mantine/core";
import PastEventsComponent from "../Components/PastEventsComponent";

export default function EventsPage() {
  const navigate = useNavigate();

  return (
    <>
      <br></br>
      <br></br>
      <Title>Upcoming Events</Title>
      <br></br>
      <br></br>
      <PastEventsComponent />
    </>
  );
}
