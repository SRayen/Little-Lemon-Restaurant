import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import "./UserInput.css";
import { useGeneralContext } from "../Context/GeneralContext";

const theme = createTheme();

export default function Userinput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setName, setPhone, setEmail, date, setDate, setTime } =
    useGeneralContext();

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get("name"),
      phone: data.get("phone"),
      date: data.get("date"),
      time: data.get("time"),
    });
    navigate("/review");
  };
  const handleError = (errors) => {};


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          justifyContent={"center"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(handleRegistration, handleError)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="yourName"
              label="Your Name"
              {...register("name", { required: "Name is required" })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              onChange={(event) => {
                setName(event.target.value);
              }}
              id="yourName"
              autoComplete=""
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              id="phoneNumber"
              label="Phone Number"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{8,}$/,
                  message: "Invalid Phone Number",
                },
              })}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Stack>
              <DatePicker
                label="Select a date"
                sx={{ mt: 2 }}
                onChange={(e) => {
                  setDate(e);
                }}
              />
              <TimePicker
                label="Select a time"
                sx={{ mt: 2 }}
                onChange={(e) => {
                  setTime(e);
                }}
              />
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#495E57",
                ":hover": { bgcolor: "#333333" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
