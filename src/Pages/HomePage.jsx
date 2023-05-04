import React from "react";
import { Grid, Image, Text, Paper, Blockquote, Title } from "@mantine/core";
import EventsComponent from "../Components/EventsComponent";

export default function HomePage() {
  return (
    <div className="homeShell">
      <div className="sectionOne">
        <Title className="header" align="left">
          Friends of Israel: The Backlash against Palestine Solidarity
        </Title>
        <Paper className="bio" radius="lg" p="xl">
          <Grid justify="center" align-content="center" gutter="xl">
            <Grid.Col sm={9} md={6} lg={4}>
              <Image
                maw={400}
                width={400}
                height={400}
                mx="auto"
                radius="md"
                src="/images/Friends of Israel_mockup.jpg"
                alt="Random image"
              />
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
              <Paper className="quoteCard" shadow="md" p="lg">
                <Blockquote
                  cite="– Arun Kundnani, author of The Muslims Are Coming! and What Is Antiracism?"
                  icon={null}
                >
                  “Friends of Israel is a meticulous study of the organizations
                  seeking to reverse widening support for the Palestinian cause
                  in Britain. On a topic that is fraught with exaggeration,
                  distortion, and propaganda, Aked proceeds with precision and
                  nuance, giving us a much-needed, authoritative analysis.
                  Grounded in anti-racism, Friends of Israel paints a complex
                  picture of Zionism in Britain, giving readers the tools to
                  oppose both anti-Semitism and Israeli apartheid.”
                </Blockquote>
              </Paper>
              <div id="availableNowBadgeContainer">
                <Paper id="availableNowBadge" radius="sm" shadow="md" p="lg">
                  <a
                    className="badgeLink"
                    href="https://www.versobooks.com/en-gb/products/723-friends-of-israel"
                  >
                    <Title order={3}>
                      Available now in paperback and ebook
                    </Title>
                  </a>
                  <br></br>
                  <a className="badgeLink" href="/friendsofisrael">
                    <Title order={4}>Find out more</Title>
                  </a>
                </Paper>
              </div>
            </Grid.Col>
          </Grid>
        </Paper>
      </div>
      <br></br>
      <Title align="left" className="header">
        Bio
      </Title>
      <Paper className="bio" radius="lg" p="xl">
        <Grid justify="center" align="center" gutter="xl">
          <Grid.Col md={6} lg={6}>
            <Text>
              Hil Aked (they/them) is a writer, investigative researcher and
              activist with a background in political sociology whose work has
              appeared in the Guardian, Independent, Sky News and Al Jazeera, as
              well as volumes from Pluto Press and Zed Books/Bloomsbury. Their
              first book <span>Friends of Israel: The Backlash Against Palestine
              Solidarity</span> was published by Verso in 2023.
            </Text>
            <div id="availableNowBadgeContainer">
            </div>
          </Grid.Col>
          <Grid.Col gutter="xl" md={1} lg={1}></Grid.Col>
          <Grid.Col gutter="xl" md={6} lg={4}>
            <Image
              maw={400}
              mx="auto"
              radius="md"
              src="/images/HeardinLondon_Hil-104.jpg"
              alt="Random image"
            />
          </Grid.Col>
        </Grid>
      </Paper>
      <br></br>
      <EventsComponent />
      <br></br>
      <div className="badgeContainer">
        <Paper id="availableNowBadge" radius="lg" shadow="sm" p="lg">
          <a className="badgeLink" href="/events">
            <Title order={3}>More Events</Title>
          </a>
        </Paper>
      </div>
    </div>
  );
}
