import React, {Fragment} from "react";
import Card from "./Card";

const CardList = ({robots}) => {
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
