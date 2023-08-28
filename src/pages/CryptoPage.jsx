import CryptoList from "../components/CryptoList";
import CryptoNews from "../components/CryptoNews";
import CryptoTrending from "../components/CryptoTrending";

CryptoTrending;

function CryptoPage() {
  return (
    // landing content area -  trending , news and top 10 list
    <>
      <CryptoTrending></CryptoTrending>
      <CryptoNews></CryptoNews>
      <CryptoList></CryptoList>
    </>
  );
}

export default CryptoPage;
