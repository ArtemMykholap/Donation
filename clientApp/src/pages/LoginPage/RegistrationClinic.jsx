import React from "react";
import { post } from "../../services/fetch";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./style";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const RegistrationClinic = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    post(data);
  };

  return (
    <div className={classes.base}>
      <div className={classes.paperWrapper} elevation={5}>
        <div className={classes.paper} elevation={5}>
          <div className={classes.title}>Clinic Registration</div>
          <form className={classes.input} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="standard-basic"
              {...register("clinic_name")}
              label="Clinic name"
              variant="standard"
            />
            <TextField
              {...register("address")}
              label="Address"
              variant="standard"
            />
            <TextField
              {...register("phone_number")}
              label="Phone number"
              variant="standard"
            />
            <ThemeProvider theme={theme}>
              <Button
                className={classes.button}
                variant="contained"
                // color="primary"
                type="submit"
              >
                Register
              </Button>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationClinic;
