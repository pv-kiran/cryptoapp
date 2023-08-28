import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationContext } from "./HundredCrypto";
import { useContext } from "react";

function CryptoPagination() {
  // pagination logic
  const { page, handleChange } = useContext(PaginationContext);

  return (
    <Stack
      sx={{
        margin: "auto",
        marginTop: "1rem",
        width: "50%",
      }}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default CryptoPagination;
