import { Fragment, useState } from "react";
import _fetch from "isomorphic-fetch";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Head from "next/head";

export default function Index({ robotsData }) {
  const [searchField, setsearchField] = useState("");

  function onSearch(value) {
    setsearchField(value);
  }

  const filterRobots = () => {
    return robotsData.filter((robot) =>
      robot.name.toUpperCase().includes(searchField.toUpperCase())
    );
  };

  return (
    <Fragment>
      <Header onSearch={onSearch} />
      <CardList robots={filterRobots()} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  try {
    const res = await _fetch("https://jsonplaceholder.typicode.com/users");
    const robotsData = await res.json();
    return { props: { robotsData } };
  } catch (err) {
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
