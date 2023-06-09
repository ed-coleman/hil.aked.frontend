import React from "react";
import { useNavigate } from "react-router-dom";
import { Title} from "@mantine/core";
import PastEventsComponent from "../Components/PastEventsComponent";
import EventsComponent from "../Components/EventsComponent";

export default function EventsPage() {
  const navigate = useNavigate();

  return (
    <>
      <br></br>
      <br></br>
     <EventsComponent />
      <br></br>
      <br></br>
      <PastEventsComponent />
    </>
  );
}
