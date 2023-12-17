import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <>
    <div className="admin__topbar">
      <div className="admin__topbarWrapper">
        <div>
          <div className="title">
            <span>
              <PeopleOutlineIcon />
            </span>
            <span>Students</span>
          </div>
        </div>
        <div>
          <Button variant="contained" disableElevation>
            <span>
              <AddIcon />
            </span>
            <span>Add Student</span>
          </Button>
        </div>
      </div>
    </div>

    <div className="table__container">
      <div className="admin__tableWrapper">
        <ul className="tableMainItems">
          <li>ID</li>
          <li>Profile Img</li>
          <li>Name</li>
          <li>Course Name</li>
          <li>Password</li>
        </ul>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            width: "10%",
            justifyContent: "space-between",
          }}
        >
          <li>ID</li>
          <li>ID</li>
        </ul>
      </div>

      <div></div>
    </div>
  </>
);
};

export default FeaturedInfo;