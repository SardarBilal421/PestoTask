import { headItems } from "../../lib/data";
import "./index.css";

const TableHead = () => {
  return (
    <thead>
      <tr>
        {headItems.map((item: string) => (
          <th className="p-2 text-center" key={item}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
