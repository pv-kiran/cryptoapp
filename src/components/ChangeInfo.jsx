import { Chip } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ChangeInfo({ cap_change }) {
  return (
    <Chip
      sx={{
        backgroundColor: cap_change > 0 ? "#8dd9a7" : "#a81936",
        color: "#fff",
      }}
      label={`${parseFloat(cap_change).toFixed(2)}%`}></Chip>
  );
}

export default ChangeInfo;
