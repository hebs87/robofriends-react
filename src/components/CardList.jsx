import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  return (
    <>
      {
        robots &&
        robots.map(robot => (
          <Card key={robot.id} robot={robot}/>
        ))
      }
    </>
  )
}

export default CardList;
