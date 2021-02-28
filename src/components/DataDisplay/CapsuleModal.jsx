import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CapsuleModal(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(props)

  return (
    <div>
      <Button color="secondary" variant="contained" type="button" onClick={handleOpen}>
        Media sources
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4>Below you will find media sources to find out addition info about each launch</h4>
            <p id="transition-modal-description"><a href={props.results.wikipedia}>Wiki</a></p>
            <p id="transition-modal-description"><a href={props.results.website}>Website</a></p>
            <p id="transition-modal-description"><a href={props.results.twitter}>Twitter</a></p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
