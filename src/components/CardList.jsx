import React, {Fragment} from "react";
import robots from "../data/robots";
import Card from "./Card";

const CardList = () => {
  return (
    <Fragment>
      {
        robots &&
        robots.map(robot => (
          <Card key={robot.id} robot={robot}/>
        ))
      }
    </Fragment>
  )
}

export default CardList;
