import React from 'react'
import { useTable } from 'react-table'
import Table from '.'

export default { title: 'components/Table' }

export const All = () => {
  const {
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
    ],
    data: [
      {
        name: 'name1',
        age: '10',
        gender: 'male',
      },
      {
        name: 'name2',
        age: '12',
        gender: 'female',
      },
      {
        name: 'name3',
        age: '13',
        gender: 'female',
      },
    ],
  })

  return (
    <Table.Wrapper>
      <Table.Head>
        {headerGroups.map((headerGroup, index) => (
          <Table.Row key={index}>
            {headerGroup.headers.map(column => (
              <Table.Title key={column.id}>
                {column.render('Header')}
              </Table.Title>
            ))}
          </Table.Row>
        ))}
      </Table.Head>
      <Table.Body>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <Table.Row key={index} onPress={() => { console.info('onPress') }}>
              {row.cells.map((cell, index) => (
                <Table.Cell key={index}>
                  {cell.render('Cell')}
                </Table.Cell>
              ))}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Wrapper>
  )
}
