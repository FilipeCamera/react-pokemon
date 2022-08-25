import BoxBackground from "./components/BoxBackground";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <BoxBackground>
      <Header />
      <Filter />
      <Search />
    </BoxBackground>
  );
}

export default App;
