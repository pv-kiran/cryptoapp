/* eslint-disable react/prop-types */
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function CryptoPagination({ page, handleChange }) {
  // pagination logic

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
