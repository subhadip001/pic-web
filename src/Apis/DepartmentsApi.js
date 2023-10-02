import math from "../assets/departments/math.svg";
import archi from "../assets/departments/archi.svg";
import biosci from "../assets/departments/biosci.svg";
import ce from "../assets/departments/ce.svg";
import chemical from "../assets/departments/chemical.svg";
import chemistry from "../assets/departments/chemistry.svg";
import cse from "../assets/departments/cse.svg";
import design from "../assets/departments/design.svg";
import earthquake from "../assets/departments/earthequake.svg";
import earthsci from "../assets/departments/earthsci.svg";
import ece from "../assets/departments/ece.svg";
import ee from "../assets/departments/ee.svg";
import hasc from "../assets/departments/hasc.svg";
import hydro from "../assets/departments/hydro.svg";
import hydroenegry from "../assets/departments/hydroenergy.svg";
import management from "../assets/departments/management.svg";
import mathematica from "../assets/departments/mathematics.svg";
import mechanical from "../assets/departments/mechanical.svg";
import meta from "../assets/departments/meta.png";
import paper from "../assets/departments/paper.svg";
import physics from "../assets/departments/physics.svg";
import polymer from "../assets/departments/polymer.svg";
import water from "../assets/departments/water.svg";
import ai from "../assets/centers/ai.svg";
import cm from "../assets/centers/cm.svg";
import coedmm from "../assets/centers/coedmm.svg";
import ctrans from "../assets/centers/ctrans.svg";
import dams from "../assets/centers/dams.svg";
import nanotechnology from "../assets/centers/nanotechnology.png";
import sst from "../assets/centers/sst.svg";
import sustainableEnergy from "../assets/centers/sustainableEnergy.svg";
const DepartmentsApi = [
  {
    img: math,
    name: "Department of Applied Mathematics and Scientific Computing",
    link: "https://drive.google.com/file/d/12pkmMHeGZY4-XCy5HhdW6FZos41XX_pg/view?usp=drive_link",
  },
  {
    img: archi,
    name: "Department of Architecture and Planning",
    link: "https://drive.google.com/file/d/1q8W5cpW5BKEowYFCdQHyZqc8ZapmIo6m/view",
  },
  {
    img: biosci,
    name: "Department of Biosciences and Bioengineering",
    link: "https://drive.google.com/file/d/1wLnlyZtnNAtuuhrHFPKst3uqyrXQVhGv/view?usp=drive_link",
  },
  {
    img: ce,
    name: "Department of Civil Engineering",
    link: "https://drive.google.com/file/d/1r38q9N6piRnsaHkT95eIuM28GCt1gegu/view?usp=drive_link",
  },
  {
    img: chemical,
    name: "Department of Chemical Engineering",
    link: "https://d17zlg3zez0c7d.cloudfront.net/pic/placement brochure for chemical department(2023-24).pdf",
  },
  {
    img: chemistry,
    name: "Department of Chemistry",
    link: "https://drive.google.com/file/d/1oVb3RPDtbIFriWXOecHxlGZZklHq0gAV/view?usp=drive_link",
  },
  {
    img: cse,
    name: "Department of Computer Science and Engineering",
    link: "https://drive.google.com/file/d/1fzAU9_CBRw-rwZjv_wWAMZZ91O0edxJj/view?usp=drive_link",
  },
  {
    img: design,
    name: "Department of Design",
    link: "https://drive.google.com/drive/folders/1g7Uo7WcygJQcmDlO0R28DTkIg1HQQWS6?usp=drive_link",
  },
  {
    img: earthquake,
    name: "Department of Earthquake Engineering",
    link: "https://drive.google.com/file/d/1MHfjzXk-FZNPvk1fHzSM7SQLZHHsYru5/view?usp=sharing",
  },
  {
    img: earthsci,
    name: "Department of Earth Sciences",
    link: "https://drive.google.com/file/d/1oZx_fXT9zK9Yp6W1B4GJp9UmQ5ksLfxt/view?usp=drive_link",
  },
  {
    img: ece,
    name: "Department of Electronics and Communication Engineering",
    link: "https://drive.google.com/file/d/18YWcclXMFMGPddqJwvi3YEXjrMIZCRnE/view?usp=drive_link",
  },
  {
    img: ee,
    name: "Department of Electrical Engineering",
    link: "https://drive.google.com/file/d/1wLnlyZtnNAtuuhrHFPKst3uqyrXQVhGv/view?usp=drive_link",
  },
  {
    img: hasc,
    name: "Department of Humanities and Social Sciences",
    link: "https://drive.google.com/file/d/1WKBlrFp2iDvzNYD1CKg0bFVjAcrxWyzO/view?usp=sharing",
  },
  {
    img: hydro,
    name: "Department of Hydrology",
    link: "https://drive.google.com/file/d/17T2CWIL4Tt7KRSq2ojrkowOZQvfTyv8Y/view?usp=drive_link",
  },
  {
    img: hydroenegry,
    name: "Department of Hydro and Renewable Energy",
    link: "https://drive.google.com/file/d/1zZlhnOBbhPXgYfURLjYjnx9p8LGb_ypC/view?usp=drive_link",
  },
  {
    img: management,
    name: "Department of Management Studies",
    link: "https://drive.google.com/file/d/1h4R3RVICO3UFOJ0cuUA9NGwfFXYhZbOy/view?usp=drive_link",
  },
  {
    img: mechanical,
    name: "Department of Mechanical and Industrial Engineering",
    link: "https://drive.google.com/file/d/1iIeVUQMy2uGoFx0A96onTc_-AQpqp-B7/view?usp=drive_link",
  },
  {
    img: mathematica,
    name: "Department of Mathematics",
    link: "https://drive.google.com/file/d/1s9hjsPQjL0Xv1Hku6jwFzIXo9Fb5uWk5/view?usp=drive_link",
  },
  {
    img: meta,
    name: "Department of Metallurgical and Materials Engineering",
    link: "https://drive.google.com/file/d/1xiAvBgBaJa_b3TZiQL_j4uFpjmMisqqo/view?usp=drive_link",
  },
  {
    img: paper,
    name: "Department of Paper Technology",
    link: "https://drive.google.com/file/d/1b9d7A3tBIxrFAfh7gN6rIQ_iKuktxnsv/view?usp=drive_link",
  },
  {
    img: physics,
    name: "Department of Physics",
    link: "https://drive.google.com/file/d/1cyeyBE0uDr-xMZCfhAH-7KnPhYYmcvmS/view?usp=drive_link",
  },
  {
    img: polymer,
    name: "Department of Polymer and Process Engineering",
    link: "https://drive.google.com/file/d/1XnrbbJwCDv-zq7dcwiZORw0CPiW93SRz/view?usp=drive_link",
  },
  {
    img: water,
    name: "Department of Water Resources Development and Management",
    link: "https://drive.google.com/file/d/1VIuH5bn5xRZNuJ2vGhqQU_wUmiYysRrG/view?usp=drive_link",
  },
];
const CentresApi = [
  {
    img: coedmm,
    name: "Centre of Excellence in Disaster Mitigation & Management (CoEDMM)",
    link: "https://drive.google.com/file/d/1mkbIJeSEHa34GTJgiWgDVsqcztsyiJeS/view?usp=drive_link",
  },
  {
    img: sustainableEnergy,
    name: "Center for Sustainable Energy",
    link: "https://cfse.iitr.ac.in/",
  },
  {
    img: nanotechnology,
    name: "Centre for Nanotechnology",
    link: "https://drive.google.com/file/d/1nrboa6fNZW2WNKZdBU3UHPaRXfeSghBs/view?usp=drive_link",
  },
  {
    img: cm,
    name: "Centre for Photonics and Quantum Communication Technology",
    link: "https://iitr.ac.in/Centres/Centre%20for%20Photonics%20and%20Quantum%20Communication%20Technology/index.html",
  },
  {
    img: sst,
    name: "Centre for Space Science and Technology",
    link: "https://csst.iitr.ac.in/",
  },
  {
    img: ctrans,
    name: "Centre for Transportation Systems (CTRANS)",
    link: "https://drive.google.com/file/d/18Hg-kp8MpHlDodQw2UDH4N1W8R9YVsGX/view?usp=drive_link",
  },
  {
    img: dams,
    name: "International Centre of Excellence for Dams",
    link: "https://drive.google.com/file/d/1sYusCv-iTRszsRNQchrQa6PxriU0LlTu/view?usp=drive_link",
  },
];
const SchoolsApi = [
  {
    img: ai,
    name: "Mehta Family School of Data Science and Artificial Intelligence",
    link: "https://www.iitr.ac.in/mfsdsai/",
  },
];

export { DepartmentsApi, CentresApi, SchoolsApi };
