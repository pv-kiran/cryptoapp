import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationContext } from "./HundredCrypto";
import { useContext } from "react";

function CryptoPagination() {
  const { page, handleChange } = useContext(PaginationContext);
  return (
    <Stack
      sx={{
        margin: "auto",
        // marginTop: "1rem",
        width: { xl: "50%", lg: "50%", md: "50%", sm: "90%", xs: "90%" },
      }}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default CryptoPagination;
