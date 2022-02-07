import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  Link
} from "@mui/material";

import classes from "../../../styles/Account.module.css"
import { useSignIn } from "@/components/LoginForm/useSignIn";

const LoginForm = () => {
  const {
    formik,
    isSubmitting,
    message,
    setMessage,
  } = useSignIn();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <div className={classes.titleField}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} >
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
              Sign In
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginForm