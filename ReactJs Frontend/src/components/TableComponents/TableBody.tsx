import Button from "../../ui/Button";
import TaskStatusDropDown from "../../ui/dropdown/TaskStatusDropDown";
import Column from "./Column";
import { MdDelete } from "react-icons/md";
import "./index.css";
import axios from "axios";
type TableBodyProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateFlag: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: { id: number; name: string; description: string; status: string }[] | null;
};

const TableBody = ({ setLoading, setUpdateFlag, tasks }: TableBodyProps) => {

  const deleteTask = async (taskName:string) => {
    try {
      await axios.delete(`http://localhost:1122/api/v1/task/${taskName}`);
      console.log('Task deleted successfully');
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };
  const handleDelete = async (taskName:string) => {
    setLoading(true);
    await deleteTask(taskName);
    setLoading(false);
    setUpdateFlag(prev => !prev); // Toggle update flag to refetch tasks
  };


  return (
    <tbody>
      {tasks?.map((task, index) => (
        <tr className=" border-black" key={task.id}>
          <Column content={index + 1} />
          <Column content={task.name} />
          <Column content={task.description} />
          <Column
            content={<TaskStatusDropDown savedTaskType={task.status} savedTaskName={task.name} />}
          />
          <Column
            content={
              <Button
                variant="danger"
                className="py-2 px-2 my-2 flex flex-col items-center"
                onClick={() => handleDelete(task.name)}
              >
                <MdDelete color="white" size={15} />
              </Button>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
