import React from 'react'

const TableComponent = (props) => {
  const {
    row,
    column
  } = props
  return (
    <div className="container mt-5">
    <table className="table table-bordered">
      <thead>
        <tr>
          {column.map((col) => (
            <th key={col.field}>{col.column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {row.map((item) => (
          <tr key={item.id}>
            {column.map((col) => (
              <td key={col.field}>{item[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default TableComponent