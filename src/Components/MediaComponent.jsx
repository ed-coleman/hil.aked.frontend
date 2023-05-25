import { Title, Table } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "/Hooks/MediaQueryHook";
import { LinkPreviewer } from "./LinkPreviewer";

export default function MediaComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [media, setMedia] = useState([]);

  const fetchMedia = async () => {
    try {
      const response = await fetch(
        "https://hil-aked-backend.adaptable.app/media"
      );
      const parsed = await response.json();
      setMedia(parsed);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  let mediaCopy = [...media];

  mediaCopy.forEach((media) => {
    if (!media.month) {
      media.month = "-";
    }
  });

  const isRowBased = useMediaQuery("(min-width: 800px)");

  const rows = mediaCopy.map((media) => (
    <tr key={media._id}>
      <td>
        <LinkPreviewer
          href={media.link}
          image={media.image}
          title={media.title}
          text={media.link}
        >{`${media.title.substring(0, 105)}...`}</LinkPreviewer>
      </td>
      <td>{media.published}</td>
      <td>{media.month}</td>
      <td>{media.year}</td>
    </tr>
  ));

  const smallRows = mediaCopy.map((media) => (
    <tr key={media.id}>
      <td>
        <a href={media.link}>{media.title}</a>
        <br></br>
        {`${media.year} / ${media.published}`}
      </td>
    </tr>
  ));

  return isRowBased ? (
    <>
      <a className="header"><Title>Media Coverage</Title></a>
      <br></br>
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
  ) : (
    <>
      <a className="header"><Title>Media Coverage</Title></a>
      <br></br>
      <br></br>
      <br></br>
      <div className="table">
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>{smallRows}</tbody>
        </Table>
        <br></br>
      </div>
    </>
  );
}
