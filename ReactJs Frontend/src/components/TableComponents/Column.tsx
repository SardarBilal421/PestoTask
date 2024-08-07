type ColumnProps = {
  content: string | number | React.ReactElement;
};

const Column = ({ content }: ColumnProps) => {
  return (
    <td className="border-b-1 border-solid border-black  px-5 items-center text-center ">
      {content}
    </td>
  );
};

export default Column;
