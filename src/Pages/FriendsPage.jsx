import React from "react";
import { useRef } from "react";
import { Blockquote, Paper, Image, Title, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

export default function FriendsPage() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <div className="friendShell">
      <Title className="header">
        Friends of Israel: The Backlash against Palestine Solidarity
      </Title>

      <Carousel
        id="carousel"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        maw={800}
        mx="auto"
        height={300}
        slideGap={"lg"}
        breakpoints={[
          { maxWidth: "md", slideSize: "100%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          { maxWidth: "xs", slideSize: "100%", slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="– Arun Kundnani, author of The Muslims Are Coming! and What Is Antiracism?"
            icon={null}
          >
            “Friends of Israel is a meticulous study of the organizations
            seeking to reverse widening support for the Palestinian cause in
            Britain. On a topic that is fraught with exaggeration, distortion,
            and propaganda, Aked proceeds with precision and nuance, giving us a
            much-needed, authoritative analysis. Grounded in anti-racism,
            Friends of Israel paints a complex picture of Zionism in Britain,
            giving readers the tools to oppose both anti-Semitism and Israeli
            apartheid.”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Yara Hawari, author of The Stone House "
            icon={null}
          >
            “This book expertly maps out the key figures supporting and
            defending the Israeli apartheid regime in Britain whilst also
            illuminating how the British government remains deeply complicit in
            the oppression of Palestinians. It is an invaluable addition to the
            literature and whilst it focuses on pro-Israel actors, Aked explains
            that Israeli regime and supporters strategies are a direct response
            to over a century of Palestinian resistance. This book thus not only
            makes an important academic contribution but also a political one to
            a struggle that is ultimately for freedom and justice.”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Aviah Sarah Day, co-author of Abolition Revolution"
            icon={null}
          >
            “An essential contribution to anti-imperalist movements, which
            details the role of top-down civic organisations in manufacturing
            consent for Zionism in the UK. A book for activists and scholars
            seeking a deeper understanding of the tactics of imperialism. A must
            read for those who believe that a free Palestine will be achieved
            through grassroots anti-racist struggle in solidarity with those
            fighting to end anti-semitism and all forms of racism.”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Ilan Pappe, author of Ten Myths About Israel"
            icon={null}
          >
            “Those who are supporting Palestine in Britain know too well that
            they are targeted by a well-oiled and ruthless campaign. This is the
            first book that examines closely and meticulously this campaign of
            suppression and silencing. Now more than ever before, it is
            important to learn how Israeli propaganda and pro-Israel lobbyists
            in Britain operate. Hil Aked's brilliant book is a must read.”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Nadine El-Enany, author of (B)ordering Britain"
            icon={null}
          >
            “This book is as urgent as it is a long-awaited critique of the
            Zionist movement and all those in government and civil society who
            support and defend Israeli apartheid, or work to dismiss and vilify
            solidarity with Palestinians. Hil Aked's is a brave intervention in
            addressing a topic considered taboo in part due to a concerted
            effort by pro-Israel advocates to resist, and make dangerous,
            critical scrutiny. This book deserves to be widely read and will be
            treasured by all those who support the Palestinian struggle for
            liberation”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Liz Fekete, Director, Institute of Race Relations, author of Europe's Fault Lines"
            icon={null}
          >
            “Not only the definitive study of political influence, state
            propaganda and lobbying by British actors on behalf of 'Brand
            Israel', but also a passionate defence of the universal application
            of anti-racist principles. Hil Aked has grasped the indivisibility
            of the fight against Israeli Apartheid and the fight against
            antisemitism. A lucid and thoroughly courageous intervention that
            will stand the test of time.”
          </Blockquote>
        </Carousel.Slide>
        <Carousel.Slide>
          <Blockquote
            className="carouselQuote"
            cite="- Ghada Karmi, author of Return"
            icon={null}
          >
            “No one who reads Hil Aked's meticulously-researched book can be
            left in any doubt about how Israel's friends operate to subvert
            British popular perceptions and the British political process in
            favour of Zionism. An essential and timely expose of an important
            and hitherto neglected subject.”
          </Blockquote>
        </Carousel.Slide>
      </Carousel>
      <br></br>

      <div id="friendsPageBookContainer">
        <Image
          width={500}
          height={500}
          mx="auto"
          radius="md"
          src="/images/Friends of Israel_mockup.jpg"
          alt="Random image"
        />
      </div>
      <br></br>
      <br></br>
      <Paper id="bookBlurb" className="bio" radius="sm" p="xl">
        <br></br>
        <Text>
          Friends of Israel: the Backlash against Palestine Solidarity provides
          a forensically researched account of the activities of Israel's
          advocates in Britain, showing how they contribute to maintaining
          Israeli apartheid. The book traces the history and changing fortunes
          of key actors within the British Zionist movement in the context of
          the Israeli government's contemporary efforts to repress a rising tide
          of solidarity with Palestinians expressed through the Boycott
          Divestment and Sanctions (BDS) movement. Offering a nuanced and
          politically relevant account of pro-Israel actors' strategies,
          tactics, and varying levels of success in key arenas of society, it
          draws parallels with the similar anti-boycott campaign waged by
          supporters of the erstwhile apartheid regime in South Africa.
          <br></br>
          <br></br>
          Bydemystifying the actors involved in the Zionist movement, the book
          provides an anti-racist analysis of the pro-Israel lobby which
          robustly rebuffs anti-Semitic conspiracies. Sensitively and accessibly
          written, it emphasises the complicity of British actors - both those
          in government and in civil society. Drawing on a range of sources
          including interviews with leading pro-Israel activists and Palestinian
          rights activists, documents obtained through Freedom of Information
          requests and archival material, Friends of Israel is a much-needed
          contribution to Israel/Palestine-related scholarship and a useful
          resource for the Palestine solidarity movement.
          <div className="badgeContainer">
            <Paper id="availableNowBadge" radius="lg" shadow="sm" p="lg">
              <a
                className="badgeLink"
                href="https://www.versobooks.com/en-gb/products/723-friends-of-israel"
              >
                <Title order={3}>Order now</Title>
              </a>
            </Paper>
          </div>
        </Text>
      </Paper>
    </div>
  );
}
