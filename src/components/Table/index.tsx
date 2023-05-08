interface TableProps<T> {
  data: T[]
  columns: string[]
  onClickRow?: (row: T) => void
}

function Table<T>({ data, columns, onClickRow }: TableProps<T>) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-cloud-200">
          {columns.map((header) => (
            <th key={header} className="py-3 px-4 text-blackuppercase font-bold tracking-wider text-center">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((row, index) => (
          <tr
            key={index}
            className={`text-center hover:bg-black dark:hover:bg-gray-700 cursor-pointer ${
              index % 2 === 0 && 'bg-gray-900'
            }`}
            onClick={() => onClickRow && onClickRow(row)}
          >
            {columns.map((key) => (
              <td key={key} className="py-3 px-4 whitespace-nowrap">
                {(row as Record<string, any>)[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
