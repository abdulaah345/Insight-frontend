import { Grid, Typography } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";
import {
  histogram,
  boxPlot,
  barChart,
  lineChart,
  scatterPlot,
} from "../utils/graph";
import { pieChart } from "../utils/pie";

const Graph: React.FC = () => {
  const { data, layout }: any = pieChart;
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
        <Plot
          data={data}
          layout={layout}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Grid>
  );
};

export default Graph;
