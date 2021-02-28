import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CapsuleModal from "./CapsuleModal";

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
    margin: "12 px",
  },
});

export default function CapsuleDisplay(props) {
  const [results, setResults] = useState([]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const fetchResults = () => {
    fetch(`${props.url}/missions`)
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
      <div>
        <p>
          A space program is nothing without completing missions. Failed or
          successful, each mission has brought further insight to SpaceX's
          ultimate mission, exploring space and our galaxy, and one day in the
          not so distant future, colonising Mars.
        </p>
      </div>
      {results.map((result) => {
        return (
          <div>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {" "}
                  <strong>Mission name: </strong>
                  {result.mission_name}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  {result.description}
                </Typography>
              </CardContent>
              <CardActions>
                <CapsuleModal results={result} />
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
