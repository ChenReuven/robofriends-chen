import Card from "./Card";

const CardList = ({robots}) => {
    // if(true) {
    //     throw new Error("Test the Error Boundary COpponent");
    // }
    return (
        <div>
            {robots.map(robot => <Card key={robot.id} id={robot.id} username={robot.username} name={robot.name} email={robot.email}/>)}
        </div>
    )
}

export default CardList;