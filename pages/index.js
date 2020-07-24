import { Fragment, useState } from "react";
import _fetch from "isomorphic-fetch";
import Header from "./components/Header";
import CardList from "./components/CardList";

export default function Index({ robotsData }) {
  const [robots, setrobots] = useState(robotsData);

  let filteredRobots = robots;

  function onSearch(value) {
    filteredRobots = robotsData.filter((robot) => {
      return robot.name.toUpperCase().includes(value.toUpperCase());
    });

    setrobots(filteredRobots);
  }

  return (
    <Fragment>
      <Header onSearch={onSearch} />
      <CardList robots={robots} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await _fetch("https://jsonplaceholder.typicode.com/users");
    const robotsData = await res.json();
    return { props: { robotsData } };
  } catch (err) {
    console.log(err);
    return {
      props: {
        robotsData: [
          {
            id: 1,
            name: "One",
            email: "something",
          },
          {
            id: 2,
            name: "Two",
            email: "something",
          },
          {
            id: 3,
            name: "Three",
            email: "something",
          },
          {
            id: 4,
            name: "Four",
            email: "something",
          },
        ],
      },
    };
  }
}
