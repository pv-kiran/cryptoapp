/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { USDollar } from "../../utils/convertor";

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
              const { uuid, name, iconUrl, price, marketCap, change } = crypto;
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
                    onClick={() => handleClick(uuid)}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      color: "#2c93b0",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}>
                    <img
                      src={iconUrl}
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
                    {USDollar.format(price)}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: change > 0 ? "#79d47c" : "#de4a33",
                    }}>
                    {`${parseFloat(change).toFixed(2)}%`}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#2c93b0",
                    }}
                    align="right">
                    {USDollar.format(marketCap)}
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
