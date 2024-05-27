import { useState } from 'react';
import axios from 'axios';

function usePost(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(url, payload);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
}

export default usePost;