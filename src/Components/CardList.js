import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  const CardArray = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} phone={robots[i].phone}/>
})
  return (
    <div>
    {CardArray}
    </div>
  );
}

export default CardList;