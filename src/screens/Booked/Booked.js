import { Button } from "@mui/material";
import React from "react";
import { useGeneralContext } from "../Context/GeneralContext";
import "./Booked.css";
import { useNavigate } from "react-router-dom";
import { Navabr } from "../Navabr";

export const Booked = () => {
  const navigate = useNavigate();

  const { date, time } = useGeneralContext();
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Navabr />
      <div className="mainBooked">
        <div className="booked">
          <h3>Your Table is Reserved!</h3>
          <h4>
            We expect you at {formattedTime} on {formattedDate}
          </h4>
          <Button
            variant="contained"
            onClick={handleHome}
            sx={{
              my: 4,
              mx: 1.2,
              float: "left",
              bgcolor: "#495E57",
              ":hover": { bgcolor: "#333333" },
            }}
          >
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};
