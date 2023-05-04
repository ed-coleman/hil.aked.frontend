import { Title, Table } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "/Hooks/MediaQueryHook";
import { LinkPreviewer } from "./LinkPreviewer";


export default function JournalismComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [work, setWork] = useState([]);
  const [journalism, setJournalism] = useState([]);

  const fetchWork = async () => {
    try {
      const response = await fetch(
        "https://hil-aked-backend.adaptable.app/work"
      );
      const parsed = await response.json();
      setWork(parsed);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWork();
  }, []);

  let journalismCopy = [...journalism];

  for (let i = 0; i < work.length; i++) {
    if (work[i].category === "journalism") {
      journalismCopy.push(work[i]);
    }
  }

  journalismCopy.forEach((article) => {
    if (!article.month) {
      article.month = "-";
    }
  });

  const isRowBased = useMediaQuery("(min-width: 800px)");

  const rows = journalismCopy.map((article) => (
    <tr key={article._id}>
       <td><LinkPreviewer
       href={article.link}
       image={article.image}
       title={article.title}
       text={article.link}
       >{`${article.title.substring(0,105)}...`}</LinkPreviewer></td>
      <td>{article.published}</td>
      <td>{article.month}</td>
      <td>{article.year}</td>
    </tr>
  ));

  const smallRows = journalismCopy.map((article) => (
    <tr key={article.id}>
        <td><a className='link' href={article.link}>{article.title}</a><br></br>{`${article.year} / ${article.published}`}</td>
      </tr>
  ));

  return ( isRowBased ? (
    <>
      <br></br>
      <Title>Journalism / Investigations / Op-eds</Title>
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
      <br></br>
      <Title>Journalism / Investigations / Op-ed</Title>
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
  )
    )
}
