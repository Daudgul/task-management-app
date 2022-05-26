import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Form from "./components/Form";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CardItem from "./components/Card";
import { INotes } from "./interfaces";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./App.css";

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//   },
// });

function App() {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [open, setOpen] = useState(false);

  // const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  let length = notes.length;

  return (
    <Container sx={{ backgroundColor: "#f6f6f6" }}>
      <Grid container spacing="1" direction="column">
        <Grid item>
          <Typography
            className="heading-first"
            fontSize={48}
            fontWeight={500}
            variant="h2"
            sx={{ fontFamily: "Poppins" }}
          >
            Welcome back,
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            className="heading-second"
            fontSize={24}
            color="#777777"
            fontWeight={400}
            sx={{ fontFamily: "Poppins" }}
          >
            you've got {length} tasks coming up in the next days.
          </Typography>
        </Grid>

        <div className="heading-third" style={{ display: "flex" }}>
          <Button onClick={handleToggle}>
            <AddTaskIcon sx={{ color: "#777777" }} />
          </Button>
          <Typography
            sx={{ fontFamily: "Poppins" }}
            color="#aaaaaa"
            variant="h6"
          >
            Add a new task...
          </Typography>
        </div>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#645e5e",
            color: "#fff",
            overflow: "hidden",
            mb: 0.2,
            fontFamily: "Poppins",
          }}
        >
          Please Write your Daily Tasks
        </DialogTitle>
        <Form notes={notes} setNotes={setNotes} handleClose={handleClose} />
      </Dialog>

      <Grid container direction="column" spacing="20">
        <CardItem notes={notes} setNotes={setNotes} />
      </Grid>
    </Container>
  );
}

export default App;
