import { createSlice } from "@reduxjs/toolkit";

const solutions = createSlice({
  name: "solutions",
  initialState: {
    solutions: {
      "residence-renovations": {
        name: "Residence Renovations",
        solution:
          "In this situation, we identified two main types of waste: aluminum waste and polymer waste (which includes EVA and polymer matrix composites).",
        solutionOneName: "Dual Use Systems",
        solutionOneDetails:
          "This system is designed to reuse aluminum waste products. Building off of NASA’s Cargo Transport Bag (CTB) structure, which was shown to reduce waste to almost zero, we propose a system that involves a series of latches to convert these aluminum structures into useful furniture. These aluminum structures are purposely constructed so that the structures are able to be reassembled into furniture after their initial form is used.",
        solutionOneBenefits:
          "First, aluminum structures can be reused, like the NASA D-RATS testing repurposed CTBs into a geoscience workstation, reducing waste to nearly zero. Additionally, dual-use packaging will save weight by reducing the need to transport additional furniture to Mars. As one pound of additional cargo accounts for ten extra pounds of fuel, the implementation of dual-use packaging will save fuel and other unnecessary logistics.",
        solutionTwoName: "Ultrasonic Welding",
        solutionTwoDetails:
          "Ultrasonic waves operate at 15 kHz to 40 kHz, which are produced by vibrations from the converter and amplified by the booster, and sent by the sonotrode, or a machinery part capable of transmitting high-frequency vibrations, to be applied to the parts being welded or molded. The sonotrode’s high frequency of vibration causes enough friction and heat to be generated to soften materials and causes the molecular structure of two different parts to join together.",
        solutionTwoBenefits:
          "Ultrasonic welding is a versatile tool that is also currently being developed. Through the partnership with Agile Ultrasonics and NASA, which began in 2022 under the Thermoplastics Development for Exploration Applications (TDEA) program, we utilize groundbreaking technologies from these sectors to recycle hard-to-recycle plastics. Through these processes, we can transform polymer waste into practical items utilized on the Red Planet.",
      },
      "cosmic-celebrations": {
        name: "Cosmic Celebrations",
        solution:
          "In this circumstance, we mainly focused on the decorations typically found at a birthday party. As a team, we chose to focus on two things: balloons and flowers. To make this possible, two systems are implemented.",
        solutionOneName: "Ultrasound Waves",
        solutionOneDetails:
          "Ultrasonic waves can mold and shape polymers. In a celebration scenario, polyester waste can be used to make balloons. These polyester wastes can be compacted, softened by applying heat through friction, molded, and sealed together to create a flexible pouch that can be blown into a balloon.",
        solutionOneBenefits:
          'The ability for ultrasonic waves to be shaped into balloons is critical to add to the atmosphere of a party. It is shown that balloons’ vibrant colors and buoyant nature cause our brain to release dopamine, or the "feel-good" hormone.',
        solutionTwoName: "Carbon fertilizers",
        solutionTwoDetails:
          "This solution requires composting carbon into human feces. Because carbon atoms are able to form complex molecules from it, pure carbon can be put together with human feces as fertilizers to assist in the growth of plants. However, the only downside is that carbon in fertilizers may pose a risk of contamination in food. Though it happens only in certain scenarios, we propose that carbon fertilizers be used only in non-food plants, like flowers. To produce these carbon fertilizers, using practical items, we propose the use of leftover carbon to be incorporated into manure and other organic items and stored in a ventilated container before being used on non-food plants.",
        solutionTwoBenefits:
          "This reduces carbon dumping, which causes a destabilization of oxygen and carbon in Mars’ atmosphere. Not only does it help the Martian environment, but flowers are essential to an occasion. The light fragrance of flowers and their symbolism also trigger dopamine.",
      },
      "daring-discoveries": {
        name: "Daring Discoveries",
        solution:
          "Based on the descriptions, we also separated the waste into two categories: carbon and aluminum products.",
        solutionOneName: "Carbon Fertilizers",
        solutionOneDetails:
          "As referenced earlier, carbon dumping is harmful to the Martian environment, so we came up with the solution of carbon fertilizers. Combined with manure, these fertilizers significantly increase plant growth. According to ScienceDirect, manure fertilizers increase crops by 7.6% to 12.26%, which not only increases the opportunities for flowers to grow, but also increases the amount of yields.",
        solutionOneBenefits:
          "Increasing plant yields assists in oxygen generation and other bio-benefits. Additionally, the contamination from carbon dumping is eliminated, and instead, an increase in much-needed oxygen will be released, aiding in astronaut survival.",
        solutionTwoName: "Dual-Use Functions",
        solutionTwoDetails:
          "As referenced earlier as well, mesh and filters have a dual use. In collecting scientific samples, scientists find it critical to sift through fine dust to collect and analyse minerals that may open insights into scientific discoveries, which are achieved through mesh. Additionally, filters are critical in dust management and keeping dust out of critical parts, serving a dual purpose.",
        solutionTwoBenefits:
          "Not only do dual-use functions significantly reduce waste, they aid in scientific discoveries, too. This saves the need for additional sifting tools to be brought along. Additionally, other machinery preservation is made possible due to filtering dust with used filters.",
      },
    },
  },
});

export const selectSolutions = ({ solutions }) => solutions.solutions;
export default solutions.reducer;
