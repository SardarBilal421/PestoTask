import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { tasks } from "../../lib/data";
import axios from "axios";

const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [loading, setLoading] = useState(false);




  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:1122/api/v1/task/');
      console.log("=>>>0",response.data.data.doc);
      
      setTasks(response.data.data.doc);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    // loading ? (
    //   <DataLoader />
    // ) :
    //  users.length > 0 ? (
    <table className="border-solid border-2 border-black p-4 w-full mx-20 bg-yellow-400  ">
      <TableHead />
      <TableBody
        setLoading={setLoading}
        setUpdateFlag={setUpdateFlag}
        tasks={tasks}
      />
    </table>
  );
  // )
  // : (
  //   <p className="text-red-600 text-2xl">No Users found</p>
  // );
};

export default Table;
