import React, { useState } from "react";
import TextField from "../ui/TextField";
import { handleChange } from "../lib/utils/handleChange";
import Button from "../ui/Button";
import { taskTypes } from "../lib/data";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("To Do");
  const [submissionStatus, setSubmissionStatus] = useState<
    "loading" | "error" | "success" | ""
  >("");
  const [loading, setLoading] = useState(false);



  const createTask = async (event: React.FormEvent) => {
    try {
      console.log("API CALL");
      event.preventDefault();
      setLoading(true);
      const response = await axios.post('http://localhost:1122/api/v1/task/', {name,description,status});
      console.log('Task created successfully:', response.data);
      setName('');
      setDescription('');
      setStatus('To Do');
    } catch (err) {
      console.error('Error creating task:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={createTask} className="flex flex-col justify-center gap-5 w-full m-auto ">
      <TextField
        type="text"
        value={name}
        placeholder="Enter title here..."
        onChange={handleChange(setName)}
      />
      <TextField
        type="text"
        value={description}
        placeholder="Enter Description here"
        onChange={handleChange(setDescription)}
      />
      
      <select
      value={status}
      onChange={handleChange(setStatus)}
      className="w-1/2 m-auto rounded-lg border-b-2 border-b-solid focus:border-b-[#C80A50] outline-none p-4 "
    >
      {taskTypes.map((taskType) => (
        <option key={taskType} value={taskType}>
          {taskType}
        </option>
      ))}
    </select>

      {submissionStatus === "error" && (
        <p className="text-red-500 text-center font-bold text-xl">
          Error Message will display here
        </p>
      )}
      <Button type="submit" color="primary" disabled={loading}>
        {loading ? 'Creating...' : 'Add Task'}
      </Button>
    </form>
  );
};

export default Form;
