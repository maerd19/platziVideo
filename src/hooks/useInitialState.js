import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  // useEffect(() => {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVideos(data);
  //       setCategories(Object.keys(data));
  //     });
  // }, []);

  return videos;
};

export default useInitialState;
