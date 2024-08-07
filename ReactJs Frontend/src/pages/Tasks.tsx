import React from "react";
import Navbar from "../components/Navbar";
import MaxWidthContainer from "../components/MaxWidthContainer";
import H1 from "../ui/H1";
import Table from "../components/TableComponents/Table";

const Tasks = () => {
  return (
    <>
      <Navbar />
      <MaxWidthContainer>
        <H1 title="Tasks" className="my-10" />
        <Table />
      </MaxWidthContainer>
    </>
  );
};

export default Tasks;
