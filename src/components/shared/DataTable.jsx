/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const cellStyle = { fontSize: "1rem", color: "#2c93b0", fontWeight: "400" };

function DataTable({ topTen }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/coin/${id}`);
  };
  return (
    <>
      <TableContainer
        sx={{
          padding: ".7rem",
          bgcolor: "#e1eff2",
          marginBottom: "2rem",
        }}
        component={Paper}>
        <Table
          // size="small"
          aria-label="a dense table"
          sx={{ bgcolor: "#e1eff2", color: "blue" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#2c93b0",
                }}>
                Name
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                Current Price
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                24h
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                Market Cap
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topTen.map((crypto, index) => {
              const {
                id,
                name,
                image,
                current_price,
                market_cap,
                price_change_percentage_24h,
              } = crypto;
              return (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: "lightblue" },
                  }}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => handleClick(id)}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      color: "#2c93b0",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}>
                    <img
                      src={image}
                      alt="image"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                    {name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#2c93b0",
                    }}
                    align="right">
                    &#8377;
                    {current_price.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color:
                        price_change_percentage_24h > 0 ? "#79d47c" : "#de4a33",
                    }}>
                    {`${parseFloat(price_change_percentage_24h).toFixed(2)}%`}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#2c93b0",
                    }}
                    align="right">
                    &#8377;
                    {market_cap.toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DataTable;
