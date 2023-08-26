import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function TableSkeleton() {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton sx={{ height: "2rem" }} />
      <Skeleton sx={{ height: "2rem" }} animation="wave" />
      <Skeleton sx={{ height: "2rem" }} animation={false} />
    </Box>
  );
}

export default TableSkeleton;
