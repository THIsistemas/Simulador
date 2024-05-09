
import React from 'react'
import Imprimir from './imprimir'
import { Table, TableBody, TableCell, TableColumn, TableColumnProps, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'

const Corrida = ({columns, corrida}:any) => {
	
  return (
	<>	

	<Table aria-label="Example table with dynamic content" className="min-w-24 p-10">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className="text-red-700 font-bold" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={corrida}>
        {(item:any) => (
          <TableRow key={item.numero}>
            {(columnKey:any) => <TableCell className=" font-bold ">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
	</>
	
  )
}

export default Corrida