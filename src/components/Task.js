import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData, deleteData, addData } from "../actions/data";
import "../index.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function CustomizedTables(props) {
  const classes = useStyles();
  useEffect(() => {
    props.dispatch(fetchData());
  }, [props.auth.username]);
  function deletedata(data) {
    props.dispatch(deleteData(data));
  }
  function adddata() {
    props.dispatch(
      addData({
        userId: props.auth.username,
        id: props.data.products.length + 1,
        title: "hello",
        completed: true,
      })
    );
  }
  console.log(props.data);
  return (
    <div>
      {props.data.loading && <h1>Loading..</h1>}

      <div className="center">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
              {props.data.products.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.title}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.completed}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        deletedata(row);
                      }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="addtask">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            adddata();
          }}
        >
          Add a Task
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(CustomizedTables);
