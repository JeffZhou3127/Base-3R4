import { createSlice } from "@reduxjs/toolkit";

const problems = createSlice({
  name: "problems",
  initialState: {
    problems: [
      {
        num: 1,
        name: "Residence Renovations",
        description:
          "Aluminum structures and the 3-dimensional structure used to inflate Martian habitats are difficult to recycle and reuse in their current form without melting, which is unfeasible on Mars because of its lack of oxygen.",
      },
      {
        num: 2,
        name: "Cosmic Celebrations",
        description:
          "Plastics like Ethylene-Vinyl Acetate (EVA) waste and Polymer Matrix Composites are difficult to break up and recycle because of their robust and reinforced molecular crosslinked systems.",
      },
      {
        num: 3,
        name: "Daring Discoveries",
        description:
          "Pure carbon from oxygen separation projects may not seem to amount to anything useful. We don’t have the capability to transport such advanced technology to space to produce graphite from carbon.",
      },
    ],
  },
});

export const selectProblem = ({ problems }) => problems.problems;
export default problems.reducer;
