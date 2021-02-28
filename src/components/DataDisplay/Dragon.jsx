import React, { useState, useEffect } from "react";
//MUI
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Dragon = (props) => {
  const classes = useStyles();

  const [results, setResults] = useState([]);

  const fetchResults = () => {
    fetch(`${props.url}/dragons`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h3>
        Perhaps the most interesting spacecraft Space X have created are the
        Dragon and Dragon 2. Used for delivering cargo to the ISS and
        transporting astronauts, the Dragon and Dragon 2 are the backbone of
        Space X's success.
      </h3>
      {results.map((result) => {
        return (
          <div>
            <div>
              <h4>{result.name}</h4>
              <h5>{result.description}</h5>
            </div>
            <br />
          </div>
        );
      })}
      {results.map((result) => {
        return (
          <div>
            <div>
              <h6>{result.name}</h6>
              <h4>Overview</h4>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Height</StyledTableCell>
                      <StyledTableCell align="right">Diameter</StyledTableCell>
                      <StyledTableCell align="right">Capsule Volume</StyledTableCell>
                      <StyledTableCell align="right">Trunk Volume</StyledTableCell>
                      <StyledTableCell align="right">Launch Payload Mass</StyledTableCell>
                      <StyledTableCell align="right">Return Payload Mass</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">{result.height_w_trunk.meters} m/ {result.height_w_trunk.feet} ft</StyledTableCell>
                      <StyledTableCell align="right">{result.diameter.meters}m/ {result.diameter.feet}ft</StyledTableCell>
                      <StyledTableCell align="right">{result.pressurized_capsule.payload_volume.cubic_meters} cubic m<br />{result.pressurized_capsule.payload_volume.cubic_feet} cubic ft</StyledTableCell>
                      <StyledTableCell align="right">{result.trunk.trunk_volume.cubic_meters} cubic m<br />{result.trunk.trunk_volume.cubic_feet} cubic ft</StyledTableCell>
                      <StyledTableCell align="right">{result.launch_payload_mass.kg} kg<br />{result.launch_payload_mass.lb} lbs</StyledTableCell>
                      <StyledTableCell align="right">{result.return_payload_mass.kg} kg<br />{result.return_payload_mass.lb} lbs</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Dragon;
