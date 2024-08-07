import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Tasks from "./pages/Tasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CreateTask />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
