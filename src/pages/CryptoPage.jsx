import CryptoList from "../components/CryptoList";
import CryptoNews from "../components/CryptoNews";
import CryptoTrending from "../components/CryptoTrending";

CryptoTrending;

function CryptoPage() {
  return (
    <>
      <CryptoTrending></CryptoTrending>
      <CryptoNews></CryptoNews>
      <CryptoList></CryptoList>
    </>
  );
}

export default CryptoPage;
