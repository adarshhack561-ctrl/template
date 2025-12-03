interface TableProps {
  columns: string[];
  data: any[];
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700">
          {columns.map((col) => (
            <th key={col} className="px-4 py-2 text-left border">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b">
            {columns.map((col) => (
              <td key={col} className="px-4 py-2 border">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
