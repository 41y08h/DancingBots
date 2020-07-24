function CardList({ robots }) {
  return (
    <div className="bots-container">
      {robots.map((robot) => (
        <div className="bot-card" key={robot.id}>
          <img src={`https://robohash.org/${robot.id}?size=170x170`} />
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
