import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "75vh",
      }}>
      <Typography
        sx={{
          marginBottom: ".5rem",
          fontSize: {
            lg: "2.5rem",
            md: "2rem",
            sx: "1.5rem",
            xs: "1.5rem",
          },
        }}>
        Something went wrong
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}>
        Try again
      </Button>
    </section>
  );
}

export default Error;
