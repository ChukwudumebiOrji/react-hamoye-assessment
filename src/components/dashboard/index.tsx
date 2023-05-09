import React, { useEffect, useState } from "react"
import useAxios from "../../hooks/useAxios"
import {
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TableCell,
  Table,
  TableBody,
  TablePagination,
} from "@mui/material"
import { IRow } from "../../types/row"
import { getFlightDataUrl, formatFlightObject } from "../../utils"

const Index = () => {
  const url = getFlightDataUrl()
  const res = useAxios(url)
  let tableData: IRow[] = []

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage) // Update the current page with the newPage value
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value) // Update the number of rows per page with the new value from the event
    setPage(0) // Reset the current page to the first page
  }

  if (res.data == undefined)
    return <></> // If res.data is undefined, return an empty fragment
  else {
    res.data.forEach((el: any, i: number) => {
      if (el.estArrivalAirport !== null || el.estDepartureAirport !== null)
        tableData.push(formatFlightObject(el, i + 1)) // Format the flight object and push it into the tableData array if either estArrivalAirport or estDepartureAirport is not null
    })
  }

  return (
    <div className="bg-[#F8DAC7] text-very-dark-orange p-8 h-screen overflow-y-auto overflow-x-hidden">
      <div className="rounded-lg bg-white h-full p-8 max-w-full">
        <h1 className="text-3xl mb-4">Flights</h1>
        <div>
          <TableContainer component={Paper}></TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="capitalize">
                <TableCell>id</TableCell>
                <TableCell align="center">airport</TableCell>
                <TableCell align="center">current time</TableCell>
                <TableCell align="center">departure time</TableCell>
                <TableCell align="center">arrival time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="center">{row.airport}</TableCell>
                    <TableCell align="center">{row.currentTime}</TableCell>
                    <TableCell align="center">{row.departureTime}</TableCell>
                    <TableCell align="center">{row.arrivalTime}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
