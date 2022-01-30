import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  dark: {
    backgroundColor: "#292929",
    color: "white",
  },
}));

const useStyles2 = makeStyles((theme) => ({
  label: {
    marginBottom: "0px",
  },
  input: {
    padding: "7px 0 5px",
  },
}));

const dark = { backgroundColor: "#292929", color: "white" };
const tableHeadStyle = { fontWeight: 800, fontSize: "1rem" };

const columns = [
  { id: "EventName", label: "Event Name", minWidth: 170, fontweight: "bold" },
  {
    id: "code",
    label: "Date",
    minWidth: 100,
    align: "center",
    fontweight: "bold",
  },
  {
    id: "Venue",
    label: "Venue",
    minWidth: 170,
    align: "center",
    fontweight: "bold",
  },
  {
    id: "more",
    label: "See More",
    minWidth: 170,
    align: "center",
    fontweight: "bold",
  },
];

function createData(EventName, code, Venue, more) {
  return { EventName, code, Venue, more };
}

const StickyHeadTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const darkTheme = useStyles();
  const label = useStyles2();
  const pastEvents = useSelector((state) => state.activity.events.filter(event => event.status === 'Completed'));

  const rows = pastEvents.map((event) =>
    createData(event.title, event.date, event.venue, "See More")
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={
                    props.theme
                      ? { ...dark, ...tableHeadStyle }
                      : tableHeadStyle
                  }
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={props.theme ? dark : {}}
                        >
                          {column.format && typeof value === "number"
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
        <TablePagination
          SelectProps={
            props.theme
              ? { MenuProps: { classes: { paper: darkTheme.dark } } }
              : {}
          }
          classes={{
            selectLabel: label.label,
            displayedRows: label.label,
            select: label.input,
          }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          className={props.theme ? darkTheme.dark : ""}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
};

export default StickyHeadTable;
