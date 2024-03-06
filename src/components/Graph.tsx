// import { Box, MenuItem, TextField } from "@mui/material";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { Grid, Typography } from "@mui/material";

const Graph = () => {
  return (
    <Grid
      height="100%"
      p={2}
      sx={{
        border: "1px solid gray",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <Typography
        fontSize={12}
        color="gray"
        textTransform="uppercase"
        mb={1}
      >
        Overview
      </Typography>
      <div>
        <ResponsiveChartContainer
          series={[
            {
              type: "bar",
              data: [1, 2, 3, 2, 1],
            },
            {
              type: "bar",
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ["A", "B", "C", "D", "E"],
              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
          height={400}
        >
          <BarPlot />
          <ChartsXAxis
            label="X axis"
            position="bottom"
            axisId="x-axis-id"
          />
        </ResponsiveChartContainer>
      </div>
    </Grid>
  );
};

export default Graph;