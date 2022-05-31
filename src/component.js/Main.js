import React, { useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import "./style/Main.css";
import { useSelector, useDispatch } from "react-redux";
import {
  chracterName,
  loadCharacterAsync,
  movieLoaderAsync,
} from "../state/reducers/character/character.thunks";

function Main() {
  const dispatch = useDispatch();
  const { isLoading, character, error, movieArray, characterName, lastDate } =
    useSelector((state) => state.character);

  useEffect(() => {
    dispatch(loadCharacterAsync());
  }, [dispatch]);
  const handleSelect = (e) => {
    // console.log([e]);
    const split = e.split(",");

    dispatch(movieLoaderAsync(split));
  };
  const handleTitleName = (e) => {
    // console.log(e);
    dispatch(chracterName(e));
  };
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="padding-overall">Character:</div>
          <DropdownButton
            id="dropdown-basic-button"
            title={characterName}
            onSelect={handleSelect}
          >
            {character &&
              character.results?.map((everyCharacter) => (
                <Dropdown.Item
                  key={everyCharacter.name}
                  eventKey={`${everyCharacter.films}`}
                  onClick={(e) => handleTitleName(everyCharacter.name)}
                >
                  {everyCharacter.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </div>
        <div className="sub-container">
          <div className="padding-overall">List of Movies:</div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              {movieArray &&
                movieArray.map((everyMovie) => {
                  return (
                    <ListGroup.Item key={everyMovie.title}>
                      {everyMovie.title}
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Card>
        </div>
        <div className="sub-container">
          <div className="padding-overall">Name/Year last Movie:</div>
          <div className="text-underline">{movieArray && lastDate[0]}</div>
        </div>
      </div>
    </>
  );
}

export default Main;
