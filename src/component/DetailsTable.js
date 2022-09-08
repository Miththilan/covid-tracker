import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const columns = [
  { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'totalCases', label: 'Total Cases', minWidth: 100 },
  {
    id: 'newCases',
    label: 'New Cases',
    align: 'right',
  },
  {
    id: 'totalDeaths',
    label: 'Total Deaths',
    align: 'right',
  },
  {
    id: 'newDeaths',
    label: 'New Deaths',
    align: 'right',
  },
  {
    id: 'totalRecovered',
    label: 'Total Recoverd',
    align: 'right',
  }, {
    id: 'newRecovered',
    label: 'New Recoverd',
    align: 'right',
  }, {
    id: 'activeCases',
    label: 'Active Cases',
    align: 'right',
  },
  {
    id: 'critical',
    label: 'Critical',
    align: 'right',
  },
];

function createData(country, totalCases, newCases, totalDeaths,newDeaths,totalRecovered,newRecovered,activeCases,critical) {
  return { country, totalCases, newCases, totalDeaths,newDeaths,totalRecovered,newRecovered,activeCases,critical};
}

const rows = [
  createData('India', 1324171354, 3287263,1324171354, 3287263,1324171354, 3287263,1324171354, 3287263),
  createData('China', 1324171354, 3287263,1324171354, 3287263,1324171354, 3287263,1324171354, 3287263),
  createData('Italy', 1324171354, 3287263,1324171354, 3287263,1324171354, 3287263,1324171354, 3287263),
  createData('United States', 1324171354, 3287263,1324171354, 3287263,1324171354, 3287263,1324171354, 3287263),
  createData('Canada', 1324171354, 3287263,1324171354, 3287263,1324171354, 3287263,1324171354, 3287263),
  createData('Australia',25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Germany',25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Ireland', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Mexico', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Japan', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('France', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('United Kingdom', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Russia', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Nigeria', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
  createData('Brazil', 25475400, 7692024,25475400, 7692024,25475400, 7692024,25475400, 7692024),
];

export default function DetailsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Typography style={{backgroundColor:"#574f6b"}}>All affected countries</Typography>
    <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }} style={{backgroundColor:"#574f6b"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{backgroundColor:"#574f6b"}}>
            <TableRow style={{backgroundColor:"#574f6b"}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,backgroundColor:"#574f6b"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
