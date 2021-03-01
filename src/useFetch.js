import { useEffect,useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => {

        if (!res.ok) {
          throw Error("could not fetch the data :'(");
        }
        return res.json()
      })

      .then((data) => {// 로컬 데이터라 이름 충돌 안한다구 그럼 
        setData(data);
        setLoading(false)
        setError(null)
      })

      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [url]);
  return ( {data,loading,error} );
}

export default useFetch;