import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "./style/Main.css";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="padding-overall">Character:</div>
          <DropdownButton id="dropdown-basic-button" title="Select">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="sub-container">
          <div className="padding-overall">List of Movies:</div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="sub-container">
          <div className="padding-overall">Name/Year last Movie:</div>
          <div className="text-underline">Movie xxy-1989</div>
        </div>
      </div>
    </>
  );
}

export default Main;
