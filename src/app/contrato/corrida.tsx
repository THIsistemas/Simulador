import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import React from 'react'
import Imprimir from './imprimir'

const Corrida = ({columns, corrida}:any) => {
	
  return (
	<>	

	<Table aria-label="Example table with dynamic content" className="min-w-24 p-10">
      <TableHeader columns={columns}>
        {(column:any) => <TableColumn className="text-red-700 font-bold" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={corrida}>
        {(item:any) => (
          <TableRow key={item.numero}>
            {(columnKey) => <TableCell className=" font-bold ">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
	</>
	
  )
}

export default Corrida