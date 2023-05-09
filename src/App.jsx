import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  MediaQuery,
  Footer,
  Burger,
  useMantineTheme,
  Navbar,
  Header,
  MantineProvider,
  Text,
  Title,
  AppShell,
} from "@mantine/core";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import FriendsPage from "./Pages/FriendsPage";
import WorkPage from "./Pages/WorkPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import MediaPage from "./Pages/MediaPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import IsPrivate from "./Components/isPrivate";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <MantineProvider
      theme={{
        fontFamily: "Raleway, sans-serif",
        headings: {
          fontFamily: "Raleway, sans-serif",
        },
      }}
    >
      <AppShell
        navbarOffsetBreakpoint="md"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            opacity={0.95}
            align="center"
            withBorder={false}
            p="xl"
            hiddenBreakpoint={10000}
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <a className="navBarLink" href="/friendsofisrael">
              Friends of Israel
            </a>
            <a className="navBarLink" href="/work">
              Work
            </a>
            <a className="navBarLink" href='/media'>
              Media
            </a>
            <a className="navBarLink" href="events">
              Events
            </a>
            <a className="navBarLink" href="/contact">
              Contact
            </a>
            <a className="navBarLink" href="/">
              Home
            </a>
          </Navbar>
        }
        footer={
          <Footer withBorder={false} height={60} p="md">
            <Text>© Hil Aked 2023</Text>
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Title>Hil Aked</Title>
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/friendsofisrael" element={<FriendsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<IsPrivate> <AdminPage /></IsPrivate>} />
          <Route path={'/events/update/:eventId'} element={<IsPrivate><UpdatePage /></IsPrivate>} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
