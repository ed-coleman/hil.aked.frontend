
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { useState, Link } from 'react'
import { Title, MediaQuery, Aside, Footer, Burger, useMantineTheme, Navbar,Header, MantineProvider, Button, Loader, Paper, Text, AppShell } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import PastEventsPage from "./Pages/PastEventsPage";
import { withTheme } from "@emotion/react";
import FriendsPage from "./Pages/FriendsPage";
import WorkPage from "./Pages/WorkPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import EventsComponent from "./Components/EventsComponent";



function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <MantineProvider
    theme={{
      fontFamily: 'Raleway, sans-serif',
      headings: {
        fontFamily: 'Raleway, sans-serif'
      }
    }}>
    <AppShell
    styles={{
      main: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : withTheme
      },
    }}
    navbarOffsetBreakpoint="md"
    asideOffsetBreakpoint="sm"
    navbar={
      <Navbar opacity={0.95} align='center' withBorder={false} p='xl' hiddenBreakpoint={10000} hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <a className='navBarLink' href='/friendsofisrael'>Friends of Israel</a>
        <a className='navBarLink'href='/work'>Work</a>
        <a className='navBarLink'href='events'>Events</a>
        <a className='navBarLink'href='/contact'>Contact</a>
        <a className='navBarLink'href='/'>Home</a>
      </Navbar>
    }
    
    footer={
      <Footer withBorder={false} height={60} p="md">
       <Text>© Hil Aked 2023</Text>
      </Footer>
    }
    header={
      <Header height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <Title id='logo' order={1}>Hil Aked</Title>
        </div>
      </Header>
    }
    >
  
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/events/past' element={<PastEventsPage />} />
      <Route path='/friendsofisrael' element={<FriendsPage />} />
      <Route path='/work' element={<WorkPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
    </AppShell>
    </MantineProvider>
  );
}








export default App;
