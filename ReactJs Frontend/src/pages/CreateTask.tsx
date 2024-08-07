import React from "react";
import Navbar from "../components/Navbar";
import MaxWidthContainer from "../components/MaxWidthContainer";
import Form from "../components/Form";
import H1 from "../ui/H1";
import { Toaster } from "react-hot-toast";

const CreateTask = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <MaxWidthContainer>
        <H1 title="Create Task" className="my-10" />
        <Form />
      </MaxWidthContainer>
    </>
  );
};

export default CreateTask;
