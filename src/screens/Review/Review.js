import { Button } from "@mui/material";
import React from "react";
import { useGeneralContext } from "../Context/GeneralContext";
import "./Review.css";
import { useNavigate } from "react-router-dom";
import { Navabr } from "../Navabr";

export const Review = () => {
  const navigate = useNavigate();

  const { name, phone, email, date, time } = useGeneralContext();
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

  const handleBooked = () => {
    navigate("/booked");
  };

  return (
    <div>
      <Navabr />
      <div className="mainReview">
        <div className="review">
          <h3>Your details</h3>
          <div className="userDetails">
            <h4>Your Name</h4>
            <p>{name}</p>
          </div>
          <hr size="1" width="100%" color="#333333" />
          <div className="userDetails">
            <h4>Email</h4>
            <p>{email}</p>
          </div>
          <hr size="1" width="100%" color="#333333" />
          <div className="userDetails">
            <h4>Phone Number</h4>
            <p>{phone}</p>
          </div>
          <hr size="1" width="100%" color="#333333" />
          <div className="userDetails">
            <h4>Selected Date</h4>
            <p>{formattedDate}</p>
          </div>
          <hr size="1" width="100%" color="#333333" />
          <div className="userDetails">
            <h4>Selected Time</h4>
            <p>{formattedTime}</p>
          </div>
          <Button
            variant="contained"
            onClick={handleBooked}
            sx={{
              my: 4,
              mx: 1.2,
              float: "right",
              bgcolor: "#495E57",
              ":hover": { bgcolor: "#333333" },
            }}
          >
            Book Table
          </Button>
        </div>
      </div>
    </div>
  );
};
