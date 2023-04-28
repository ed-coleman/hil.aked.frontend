import { Title, Table, Popover, Button, Text, Loader } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "/Hooks/MediaQueryHook";
import { useDisclosure } from "@mantine/hooks";
import { LinkPreviewer } from "./LinkPreviewer";

export default function MediaComponent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [work, setWork] = useState([]);
  const [media, setRepsetMedia] = useState([]);

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

  const [opened, {close, open }] = useDisclosure(false)

  useEffect(() => {
    fetchWork();
  }, []);

  const mediaCopy = [...media]

  for (let i = 0; i < work.length; i++) {
    if (work[i].category === "media") {
      mediaCopy.push(work[i]);
    }
  }

  reportsCopy.forEach((report) => {
    if (!report.month) {
      report.month = "-";
    }
  });


  const isRowBased = useMediaQuery('(min-width: 800px)')

  const tooLong = false



  const rows = reportsCopy.map((report) => (



    <tr key={report._id}>
       <td><LinkPreviewer
       href={report.link}
       image={report.image}
       title={report.title}
       text={report.link}
       >{`${report.title.substring(0,105)}...`}</LinkPreviewer></td>
      <td>{report.published}</td>
      <td>{report.month}</td>
      <td>{report.year}</td>
    </tr>
  )
  )

    const smallRows = reportsCopy.map((report) => (
      <tr key={report.id}>
        <td><a href={report.link}>{report.title}</a><br></br>{`${report.year} / ${report.published}`}</td>
      </tr>
    )
    )

  return (
     isRowBased ? (
    <>
    <br></br>
     <Title>Reports / Chapters / Journal Articles </Title>
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
    ):(
      <>
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

