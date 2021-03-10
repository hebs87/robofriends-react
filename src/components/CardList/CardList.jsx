import Card from "../Card/Card";

const CardList = ({robots}) => {
  return (
    <>
      {
        robots &&
        robots.map(robot => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))
      }
    </>
  )
}

export default CardList;
