import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import Loading from "../../features/load/Loading";
import CatList from "../../features/list/CatList";

const App = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchCats = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/facts/randoms");
      setError("");
      setLoading(false);
      setCats(res.data);
    } catch (e) {
      setLoading(false);
      setError("Error fetching cats");
      console.log(e);
    }
  };

  return (
    <Container>
      <NavBar
        header="Cat Fetch"
        buttonText="Fetch Cats"
        handleFetchCats={handleFetchCats}
      />
      {loading ? (
        <Loading loadingText="Fetching cats, please wait..." />
      ) : (
        <CatList error={error} cats={cats} />
      )}
    </Container>
  );
};

export default App;
