import React, { useEffect, useState } from "react";
import { taskTypes } from "../../lib/data";
import axios from "axios";

type TaskStatusDropDownTypes = {
  savedTaskType: string;
  savedTaskName: string; // Changed to savedTaskName for unique identification
};

const TaskStatusDropDown = ({ savedTaskType, savedTaskName }: TaskStatusDropDownTypes) => {
  const [selectedStatus, setSelectedStatus] = useState(savedTaskType);

  useEffect(() => {
    setSelectedStatus(savedTaskType);
  }, [savedTaskType]);

  const updateTaskStatus = async (newStatus: string) => {
    try {
      await axios.patch(`http://localhost:1122/api/v1/task/updateTask/${savedTaskName}`, { status: newStatus });
      console.log('Task status updated successfully');
    } catch (err) {
      console.error('Error updating task status:', err);
    }
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    updateTaskStatus(newStatus);
  };

  return (
    <select
      value={selectedStatus}
      onChange={handleStatusChange}
      className="cursor-pointer outline-none bg-transparent"
    >
      {taskTypes.map((taskType) => (
        <option key={taskType} value={taskType}>
          {taskType}
        </option>
      ))}
    </select>
  );
};

export default TaskStatusDropDown;
