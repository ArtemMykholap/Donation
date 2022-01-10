import React from "react";
import { post } from "../../services/fetch";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

import useStyles from "./style";

const RegistrationUser = () => {
  const classes = useStyles();
  const url = "/api/auth/signup";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    post(url, data);
  };

  return (
    <div className={classes.base}>
      <div className={classes.paperWrapper} elevation={5}>
        <div className={classes.paper} elevation={5}>
          <div className={classes.title}>Donor registration</div>
          <form className={classes.input} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="standard-basic"
              {...register("username")}
              label="Full name"
              variant="standard"
            />
            <TextField
              {...register("email")}
              label="Email"
              variant="standard"
            />
            <TextField
              {...register("phonenumber")}
              label="Phone number"
              variant="standard"
            />
            <TextField
              {...register("password")}
              label="Password"
              variant="standard"
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationUser;
