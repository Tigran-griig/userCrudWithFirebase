import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  TextField,
} from "@mui/material";

import classes from "../../../styles/Account.module.css"
import { useSignUp } from "@/components/RegisterForm/useSignUp";

interface RegisterFormProps {
  mode: "CREATE" | "EDIT",
}

const RegisterForm = ({ mode }:RegisterFormProps) => {
  const {
    formik,
    isSubmitting,
    message,
    setMessage,
  } = useSignUp(mode);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <div className={classes.titleField}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            {mode === "CREATE" ? "Create new user" : "Edit user"}
          </Typography>
        </div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ""}
                error={!!(formik.errors.firstName && formik.touched.firstName)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : ""}
                error={!!(formik.errors.lastName && formik.touched.lastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ""}
                error={!!(formik.errors.email && formik.touched.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                type={"number"}
                label="Phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                helperText={formik.errors.phone && formik.touched.phone ? formik.errors.phone : ""}
                error={!!(formik.errors.phone && formik.touched.phone)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                helperText={formik.errors.address && formik.touched.address ? formik.errors.address : ""}
                error={!!(formik.errors.address && formik.touched.address)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ""}
                error={!!(formik.errors.password && formik.touched.password)}
              />
            </Grid>
          </Grid>
          <Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {mode === "CREATE" ? "Create" : "Edit"}

            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  )
};

export { RegisterForm };