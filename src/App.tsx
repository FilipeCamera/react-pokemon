import { useEffect, useState } from "react";
import BoxBackground from "./components/BoxBackground";
import Filter, { IFilter } from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import Ordinate from "./components/Ordinate";
import Row from "./components/Row";
import Search from "./components/Search";

function App() {
  const [filter, setFilter] = useState<IFilter | null>(null);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const [next, setNext] = useState<string>();
  const [previous, setPrevious] = useState<string>();

  useEffect(() => {
    console.log(filter?.type);
    fetch(`https://pokeapi.co/api/v2/type`)
      .then((response) => response.json())
      .then((pokemons) => {
        console.log(pokemons.results);
      });
  }, [filter]);
  return (
    <BoxBackground>
      <Header />
      <Search />
      <Filter filter={filter} setFilter={setFilter} />
      <Row>
        <List pokemons={pokemons} />
        <Ordinate />
      </Row>
    </BoxBackground>
  );
}

export default App;
