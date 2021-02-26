import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
    margin: "12 px"
  },
});

export default function CapsuleDisplay(props) {
  const [results, setResults] = useState([]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const fetchResults = () => {
    fetch(`${props.url}/capsules`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      
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
                  {result.capsule_serial}
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <CapsuleModal />
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
