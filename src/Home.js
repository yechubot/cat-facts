import useFetch from "./useFetch";
import FactsList from "./FactsList";

const Home = () => {

const {data:facts, loading, error} = useFetch("https://cat-fact.herokuapp.com/facts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading ... </div>}
      {facts && <FactsList facts={facts}/>}
    </div>
  );
}

export default Home;