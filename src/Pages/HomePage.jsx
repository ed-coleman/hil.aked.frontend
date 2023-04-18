import React, { useEffect, useState, Link } from "react";
import {
  Grid,
  Card,
  Image,
  Group,
  Badge,
  Text,
  Button,
  Flex,
  Paper,
  Blockquote,
  Container,
  Title,
  createStyles,
  ThemeIcon,
} from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";
import EventsComponent from "../Components/EventsComponent";

export default function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/events");
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

  const goToEvents = () => {
    navigate('/events')
  }

  const goToPastEvents = () => {
    navigate('/events/past')
  }

  const goToBookPage = () => {
    navigate('/friendsofisrael')
  }

 

  return isLoading ? (
    <Title>Loading...</Title>
  ) : (
    <div className="homeShell">
    <div className="sectionOne">
   
    <Title className='header' align='left'>Friend's of Israel: The Backlash against Palestine Solidarity</Title>
    <Paper  className='bio' radius='lg' shadow="sm" p="xl" >
    <Grid justify='center' align-content='center' gutter='xl'>
      <Grid.Col md={6} lg={4}>
      <Image maw={550} width={550} height={550} mx="auto" radius="md" src='src/assets/images/Friends of Israel_mockup.jpg' alt="Random image" />
      </Grid.Col>
      <Grid.Col md={0} lg={2}></Grid.Col>
      <Grid.Col sm={9} md={6} lg={6}>
      <Paper shadow="xs" p="lg">
      <Blockquote cite="– Arun Kundnani, author of The Muslims Are Coming! and What Is Antiracism?" icon={null}>
      “Friends of Israel is a meticulous study of the organizations seeking to reverse widening support for the Palestinian cause in Britain. On a topic that is fraught with exaggeration, distortion, and propaganda, Aked proceeds with precision and nuance, giving us a much-needed, authoritative analysis. Grounded in anti-racism, Friends of Israel paints a complex picture of Zionism in Britain, giving readers the tools to oppose both anti-Semitism and Israeli apartheid.”
    </Blockquote>
    </Paper>
    <div id='availableNowBadgeContainer'>
    <Paper id='availableNowBadge' radius='lg' shadow="sm" p="xl" >
    <a className='badgeLink' href='https://www.versobooks.com/en-gb/products/723-friends-of-israel'><Title order={3}>Available now in paperback and ebook</Title></a>
      <br></br>
      <a className='badgeLink' href='/friendsofisrael'><Title order={4}>Find out more</Title></a>
      </Paper>
      </div>
    </Grid.Col>
    </Grid>
    </Paper>
    </div>
    <br></br>
    <Title align='left' className="header">Bio</Title>
    <Paper  className='bio' radius='lg' shadow="sm" p="xl" >
    <Grid justify='center' align="center" gutter='xl'>
      <Grid.Col md={6} lg={6}>
      
    <Text>Hil Aked (they/them) is a writer, investigative researcher and activist with a background in political sociology whose work has appeared in the Guardian, Independent, Sky News and Al Jazeera, as well as volumes from Pluto Press and Zed Books/Bloomsbury. Their first book Friends of Israel: The Backlash Against Palestine Solidarity was published by Verso in 2023.</Text>
    
    <Paper id='availableNowBadge' radius='lg' shadow="sm" p="lg" >
      <a className="badgeLink" href='/about'><Title order={3}>More Info</Title></a>
      </Paper>
      </Grid.Col>
      <Grid.Col gutter='xl' md={1} lg={1}>
      </Grid.Col>
      <Grid.Col gutter='xl' md={6} lg={4}>
      <Image maw={400} mx="auto" radius="sm" src='src/assets/images/Screenshot 2023-04-18 at 10.54.25.png' alt="Random image"/>
      </Grid.Col>
    </Grid>
    </Paper>
    
      <Title className="header" align="left">Upcoming Events</Title>
      <br></br>
      <EventsComponent></EventsComponent>
      <br></br>
      <div className='badgeContainer'>
      <Paper id='availableNowBadge' radius='lg' shadow="sm" p="lg" >
      <a className='badgeLink' href='/events'><Title order={3}>More Events</Title></a>
      <br></br>
      <a className='badgeLink' href='/events/past'><Title order={4}>Past Events</Title></a>
      </Paper>
      </div>
    </div>
  );
}
