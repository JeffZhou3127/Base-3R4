import { createSlice } from "@reduxjs/toolkit";

const problems = createSlice({
  name: "problems",
  initialState: {
    problems: [
      {
        num: 1,
        name: "Residence Renovations",
        description:
          "After landing on the planet, Mars, habitats need to be inflated. To do that, 3-dimensional structures are used to support the habitat while inflating. After inflating the habitat is complete, the 3D structure and packaging materials used to ship the structure are no longer needed and have to be reused.",
      },
      {
        num: 2,
        name: "Cosmic Celebrations",
        description:
          "A crew is commemorating a crewmate’s birthday. However, supplies for the occasion are not available and have to be created from existing waste. To make this party an occasion, it is required to reuse or recycle waste products.",
      },
      {
        num: 3,
        name: "Daring Discoveries",
        description:
          "After experimenting with oxygen-extracting machines, the leftover carbon and machinery parts are subject to reuse. The leftover carbon and parts like mesh and filters need to be either recycled or reused.",
      },
    ],
  },
});

export const selectProblem = ({ problems }) => problems.problems;
export default problems.reducer;
