import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Top } from "./components/Top/Top";
import { Selector } from "./interfaces/interfaces";
import { useUsersQuery } from "./redux/services/api";

function App() {
  const [search, setSearch] = useState("octocat");
  const { isLoading, data, refetch,isError } = useUsersQuery(search);

  const { light } = useSelector((state: Selector) => state.theme);

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <div className={`App ${light ? "light" : "dark"}`}>
      <Top />
      <SearchBar setSearch={setSearch} isError={isError} />
    </div>
  );
}

export default App;
