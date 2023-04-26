import { Title, Table } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "/Hooks/MediaQueryHook";

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

  let reportsCopy = [...reports];

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

  const isRowBased = useMediaQuery('(min-width: 700px)')

  const rows = reportsCopy.map((report) => (
    <tr key={report._id}>
      <td><a href={report.link}>{report.title}</a></td>
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

  return isLoading ? (
    <Title order={2}>Loading...</Title>
  ) : (
   isRowBased ? (
    <>
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

