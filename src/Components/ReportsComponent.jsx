import { Title, Table, Popover, Button, Text, Loader } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "/Hooks/MediaQueryHook";
import { useDisclosure } from "@mantine/hooks";
import { LinkPreviewer } from "./LinkPreviewer";

export default function ReportsComponent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [work, setWork] = useState([]);
  const [reports, setReports] = useState([]);

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

  const reportsCopy = [...reports];

  for (let i = 0; i < work.length; i++) {
    if (work[i].category === "report") {
      reportsCopy.push(work[i]);
    }
  }

  reportsCopy.forEach((report) => {
    if (!report.month) {
      report.month = "-";
    }
  });

  const isRowBased = useMediaQuery("(min-width: 800px)");

  const rows = reportsCopy.map((report) => (
    <tr key={report._id}>
      <td>
        <div className="link">
          <LinkPreviewer
            href={report.link}
            image={report.image}
            title={report.title}
            text={report.link}
          >{`${report.title.substring(0, 105)}...`}</LinkPreviewer>
        </div>
      </td>
      <td>{report.published}</td>
      <td>{report.month}</td>
      <td>{report.year}</td>
    </tr>
  ));

  const smallRows = reportsCopy.map((report) => (
    <tr key={report.id}>
      <td>
        <a className="link" href={report.link}>
          {report.title}
        </a>
        <br></br>
        {`${report.year} / ${report.published}`}
      </td>
    </tr>
  ));

  return isRowBased ? (
    <>
      <Title>Reports / Chapters / Journal Articles </Title>
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
      <Title>Reports / Chapters / Journal Articles </Title>
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
