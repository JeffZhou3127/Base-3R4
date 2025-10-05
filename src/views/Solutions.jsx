import React from "react";
import { useParams } from "react-router-dom";

const solutions = [
  {
    solutionName: "residence-renovations",
    solution:
      "However, we suggest a simpler, more practical alternative. Building off of NASA’s Cargo Transport Bag (CTB) structure, which was tested in the D-RATS field trials conducted by NASA and shown to reduce waste to almost zero, we propose a system that involves a series of latches to convert these aluminum structures into useful furniture.",
    solutionDetails:
      "Involving pre-launch logistics, aluminum structures like the 3D structures used to inflate Martian habitats are built with foldable joints, ensuring easy reassembling into essential space equipment.",
    benefits: [
      "First, aluminum structures can be recycled into space furnishing, like the D-RATS field testing had reassembled CTBs into a workstation. This decreases waste on Mars.",
      "Second, it reduces the weight on rockets to transport space furnishing, such as tables of workstations, to Mars, and instead uses dual-use packaging of aluminum furnishing to substitute for those items.",
    ],
  },
  {
    solutionName: "cosmic-celebrations",
    solution:
      "Leading-age technology ultrasonic welding machines are able to alter the molecular structure and mold plastics like EVA, Polymer Matrix Composites, and Polymer. Using technology through the Agile Ultrasonics and NASA partnership since 2022, under the program Thermoplastics Development for Exploration Applications (TDEA), we utilize groundbreaking technologies from these sectors to recycle these hard-to-recycle plastics.",
    solutionDetails:
      "Ultrasonic waves operate 15 kHz to 40 kHz, which are produced by vibrations from the converter and amplified by the booster, and sent by the sonotrode, or a machinery part capable of transmitting high-frequency vibrations, to be applied to the parts being welded or molded. The sonotrode’s high frequency of vibration causes enough friction and heat to be generated to soften materials and causes the molecular structure of two different parts to join together.",
    benefits: [
      "It is a versatile (and one of the NASA-backed) method for utilizing thermoplastics such as EVA and Polymer Matrix that would’ve been severely damaged by traditional heat exposure.",
      "It is one of the most effective ways of breaking down and rejoining the molecular structure of EVAs, which is very difficult to break down due to its permanent cross-linked molecular structure.",
    ],
  },
  {
    solutionName: "daring-discoveries",
    solution:
      "We suggest a plan to incorporate carbon into human feces. Because carbon atoms are able to form complex molecules from it, pure carbon can be put together with human feces as fertilizers to assist in the growth of plants.",
    solutionDetails:
      "In this solution, one critical aspect is that carbon in fertilizers may pose a risk of contamination in food. Though it happens only in certain scenarios, we propose that carbon fertilizers be used only in non-food plants, like flowers. Using practical items, we propose the use of leftover carbon to be incorporated into human feces and other organic items and stored in a ventilated container before being used on non-food plants.",
    benefits: [
      "This reduces carbon dumping, which causes a destabilization of oxygen and carbon in Mars’ atmosphere.",
      "It reduces the risk of contamination and increases the rate of plant growth.",
    ],
  },
];

const Solutions = () => {
  const { solutionTitle } = useParams();

  const solution = solutions.find(({ solutionName }) => solutionName === solutionTitle);
  console.log(solution);
};

export default Solutions;
