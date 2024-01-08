import React from "react";
import axios from "axios";

const GetIndexComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ganti URL API sesuai dengan API TradingView yang Anda inginkan
        const response = await axios.get("URL_API_TRADINGVIEW");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data from TradingView API:", error);
      }
    };

    fetchData();
  }, []); // useEffect hanya dipanggil sekali setelah komponen dimount

  return (
    <div>
      <h2>Data from TradingView API</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GetIndexComponent;
