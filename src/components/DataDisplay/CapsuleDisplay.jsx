
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CapsuleDisplay(props) {

  const classes = useStyles();
  console.log(props.results)
  return (
    <div>
      <h1>It's an h1</h1>
      <button onClick={props.handleSubmit}>Right here bro</button>
      {props.results.map(result => {
        console.log(result)
        return(
          <div>
            <h1>{result.countries}</h1>
          </div>
        )
      })}
      {console.log(props.results)}
    </div>
  );
}
