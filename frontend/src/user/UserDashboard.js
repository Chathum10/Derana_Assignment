import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <>
      <Box sx={{ bgcolor: "white", p: 3 }}>
        <h1>Hello {user && user.name}!</h1>
        <h2>Welcome Back to News Buzz...</h2>
        <br />
        <h3>User Profile</h3>
        <p>Name: {user && user.name}</p>
        <p>E-mail: {user && user.email}</p>
        <Link to="/">
          <Button variant="contained" color="primary">
            View News
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default UserDashboard;
