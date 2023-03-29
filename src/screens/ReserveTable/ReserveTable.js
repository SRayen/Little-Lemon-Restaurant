import React from "react";
import tablePhoto from "../images/9.jpeg";
import { Navabr } from "../Navabr";
import Userinput from "../UserInput/UserInput";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./ReserveTable.css";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © 2023 "}
      <Link color="inherit" href="https://mui.com/">
        Little Lemon Restaurant
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const ReserveTable = () => {
  return (
    <div>
      <Navabr />
      <div>
        <main className="reserveMain">
          <div className="reserveSection">
            <div className="reserveTop">
              <div className="reserveTable">
                <h2>Reserve Table</h2>
                <h5>
                  Little Lemon does not impose additional charges for table
                  reservations. Our objective is to offer our customers a
                  straightforward and transparent dining experience.
                </h5>
              </div>
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                width={300}
                height={400}
              ></img>
            </div>
          </div>
        </main>
      </div>
      <div>
        <div className="details">
          <h1>Provide Details</h1>
        </div>
      </div>
      <div className="inputNote">
        <div className="userInput">
          <Userinput />
        </div>
        <article className="note">
          <h1>Stress-Free Bookings</h1>
          <h3>
            You can reserve your table with ease at Little Lemon! They do not
            impose any additional fees for making a reservation. Book your table
            now and savor a dining experience that is straightforward and
            transparent.
          </h3>
        </article>
      </div>
    </div>
  );
};
