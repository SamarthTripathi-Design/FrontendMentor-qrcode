import { useEffect, useState } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "36215dd3f372ebd42";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        // https://www.googleapis.com/customsearch/v1?key=AIzaSyA7TH9m_8tl6ye6oxGMs3K423wRxWKban4&cx=36215dd3f372ebd42&q=hello
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    fetchData()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);
  console.log(data);
  return { data };
};

export default useGoogleSearch;
