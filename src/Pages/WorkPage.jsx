import { Loader } from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";
import ReportsComponent from "../Components/ReportsComponent";
import JournalismComponent from "../Components/JournalismComponent";

export default function WorkPage() {
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

  return isLoading ? (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Loader color="dark" size="xl" variant="dots" />
    </>
  ) : (
    <>
      <br></br>
      <br></br>
      <ReportsComponent></ReportsComponent>
      <br></br>
      <br></br>
      <JournalismComponent></JournalismComponent>
    </>
  );
}
