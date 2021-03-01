import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    // const signal = abortCont.signal; 

    setTimeout(() => {

      fetch(url, { signal: abortCont.signal })
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
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message);
            setLoading(false);
          }

        })
    }, 1000);

    return () => abortCont.abort();

  }, [url]);
  return ({ data, loading, error });
}

export default useFetch;