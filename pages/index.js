import { Fragment, useState } from "react";
import _fetch from "isomorphic-fetch";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Head from "next/head";
import offlineRobots from "../public/robots";

export default function Index({ robotsData }) {
  const [searchField, setsearchField] = useState("");

  function onSearch(value) {
    setsearchField(value);
  }

  const filterRobots = () => {
    return robotsData.filter((robot) => {
      return robot.name.toUpperCase().includes(searchField.toUpperCase());
    });
  };

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Dancing Bots </title>
        <meta
          name="description"
          content="Dance with bots. NextJS everywhere :D"
        ></meta>
      </Head>
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
        robotsData: offlineRobots,
      },
    };
  }
}
