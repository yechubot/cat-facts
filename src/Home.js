import { useEffect, useState } from "react";
import FactsList from "./FactsList";

const Home = () => {

  const [facts,setFacts] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false); 

  useEffect(()=> {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => {
      
      if(!res.ok){
        throw Error("could not fetch the data :'(");
      }
      return res.json() 
    })

    .then((data)=> {
      setFacts(data);
      setLoading(false)
      setError(null)
    })

    .catch(err => {
      setError(err.message);
      setLoading(false);
    })
  },[])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading ... </div>}
      {facts && <FactsList facts={facts}/>}
    </div>
  );
}

export default Home;