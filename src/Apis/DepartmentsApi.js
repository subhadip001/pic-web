import math from "../assets/departments/math.svg"
import archi from "../assets/departments/archi.svg"
import biosci from "../assets/departments/biosci.svg"
import ce from "../assets/departments/ce.svg"
import chemical from "../assets/departments/chemical.svg"
import chemistry from "../assets/departments/chemistry.svg"
import cse from "../assets/departments/cse.svg"
import design from "../assets/departments/design.svg"
import earthquake from "../assets/departments/earthequake.svg"
import earthsci from "../assets/departments/earthsci.svg"
import ece from "../assets/departments/ece.svg"
import ee from "../assets/departments/ee.svg"
import hasc from "../assets/departments/hasc.svg"
import hydro from "../assets/departments/hydro.svg"
import hydroenegry from "../assets/departments/hydroenergy.svg"
import management from "../assets/departments/management.svg"
import mathematica from "../assets/departments/mathematics.svg"
import mechanical from "../assets/departments/mechanical.svg"
import meta from "../assets/departments/meta.png"
import paper from "../assets/departments/paper.svg"
import physics from "../assets/departments/physics.svg"
import polymer from "../assets/departments/polymer.svg"
import water from "../assets/departments/water.svg"
import ai from '../assets/centers/ai.svg'
import cm from '../assets/centers/cm.svg'
import coedmm from '../assets/centers/coedmm.svg'
import ctrans from '../assets/centers/ctrans.svg'
import dams from '../assets/centers/dams.svg'
import nanotechnology from '../assets/centers/nanotechnology.png'
import sst from '../assets/centers/sst.svg'
import sustainableEnergy from '../assets/centers/sustainableEnergy.svg' 
const DepartmentsApi = [{
        img: math,
        name: "Department of Applied Mathematics and Scientific Computing",
        link:'https://drive.google.com/file/d/1nKTl3ZV4YZsPk1NzzYrv9635B4ySTd9X/view'
    },
    {
        img: archi,
        name: "Department of Architecture and Planning",
        link:'https://drive.google.com/file/d/1q8W5cpW5BKEowYFCdQHyZqc8ZapmIo6m/view'
    },
    {
        img: biosci,
        name: "Department of Biosciences and Bioengineering",
        link:'https://drive.google.com/file/d/1wbPeLAxkR1kmvbdyYLkZz9c8aERw7ROO/view'
    },
    {
        img: ce,
        name: "Department of Civil Engineering",
        link:'https://drive.google.com/file/d/1XLjzqsM6No26DpiONoWIOcv-544lJcJ_/view'
    },
    {
        img: chemical,
        name: "Department of Chemical Engineering",
        link:'https://drive.google.com/file/d/11j9WDOz97SNaSXgRywIm3T5jgSCbvc3f/view'
    },
    {
        img: chemistry,
        name: "Department of Chemistry",
        link:'https://drive.google.com/file/d/1qZ0Bj4vvlFLl0nIZtZp9v_wu8XDhKWKO/view'
    },
    {
        img: cse,
        name: "Department of Computer Science and Engineering",
        link:'https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/index.html'
    },
    {
        img: design,
        name: "Department of Design",
        link:'https://drive.google.com/drive/folders/1g7Uo7WcygJQcmDlO0R28DTkIg1HQQWS6'
    },
    {
        img: earthquake,
        name: "Department of Earthquake Engineering",
        link:'https://drive.google.com/file/d/1C7jMvBA7io0gf0KjQJntcDcqVmOh5kKI/view'
    },
    {
        img: earthsci,
        name: "Department of Earth Sciences",
        link:'https://drive.google.com/file/d/1OqcawnGeFYB2U8BfGn6-Q4vmWmFeJvDS/view'
    },
    {
        img: ece,
        name: "Department of Electronics and Communication Engineering",
        link:'https://drive.google.com/file/d/1RSH-3meRb0OVzg9t7ySl2jUlCKObnl1n/view'
    },
    {
        img: ee,
        name: "Department of Electrical Engineering",
        link:'https://drive.google.com/file/d/1P4lPVRsy4htZ0UFPIZ_qXWqN--8w2Mqd/view'
    },
    {
        img: hasc,
        name: "Department of Humanities and Social Sciences",
        link:'https://drive.google.com/file/d/1dHLKNBvZcnz6ios-z1D2YKNHAH4kLN7I/view'
    },
    {
        img: hydro,
        name: "Department of Hydrology",
        link:'https://drive.google.com/file/d/1k0y4s_K6CcJ6k9coPJGhQpgIAGcIsjP1/view'
    },
    {
        img: hydroenegry,
        name: "Department of Hydro and Renewable Energy",
        link:'https://drive.google.com/file/d/1MYXPRgQvvu0S1U2K1EV7T2ldMa5A2emQ/view'
    },
    {
        img: management,
        name: "Department of Management Studies",
        link:'https://drive.google.com/file/d/1nypBPtRiAp3AAuapa6CMjTufQ33a5jEW/view'
    },
    {
        img: mechanical,
        name: "Department of Mechanical and Industrial Engineering",
        link:'https://drive.google.com/file/d/1rnK0Xfpqft_tt8WRiZo5W-uCLySz5H4l/view'
    },
    {
        img: mathematica,
        name: "Department of Mathematics",
        link:'https://drive.google.com/file/d/1vMBrqawIVkwgqwe1UDiG1BDKEnz2F-u9/view'
    },
    {
        img: meta,
        name: "Department of Metallurgical and Materials Engineering",
        link:'https://drive.google.com/file/d/1iP4U3GuuWHMfANi2RMPmR7jA2u0J_vbk/view'
    },
    {
        img: paper,
        name: "Department of Paper Technology",
        link:'https://drive.google.com/file/d/1qVcp0qb_K-1k4y-GhgCWIb_1GXSZpXUU/view'
    },
    {
        img: physics,
        name: "Department of Physics",
        link:'https://drive.google.com/file/d/1SrhBLj2YlCLiBaqxjLZ1BM2oIvaLpPvC/view'
    },
    {
        img: polymer,
        name: "Department of Polymer and Process Engineering",
        link:'https://drive.google.com/file/d/1lBGU1VGrtPxth-4wVYtHd3A6TGVsdNjz/view'
    },
    {
        img: water,
        name: "Department of Water Resources Development and Management",
        link:'https://drive.google.com/file/d/1Og8Adci7CbhNFLoGgCQXHaVzZbAc43wO/view'
    },



]
const CentresApi = [{
        img: coedmm,
        name: "Centre of Excellence in Disaster Mitigation & Management (CoEDMM)",
        link:'#'
    },
    {
        img: sustainableEnergy,
        name: "Center for Sustainable Energy",
        link:'#'
    },
    {
        img: nanotechnology,
        name: "Centre for Nanotechnology",
        link:'https://drive.google.com/file/d/1zTL2K6DEWdiyBEFYt35gX4wltD68m5Hn/view'
    },
    {
        img: cm,
        name: "Centre for Photonics and Quantum Communication Technology",
        link:'https://iitr.ac.in/Centres/Centre%20for%20Photonics%20and%20Quantum%20Communication%20Technology/index.html'
    },
    {
        img: sst,
        name: "Centre for Space Science and Technology",
        link:'https://csst.iitr.ac.in/'
    },
    {
        img: ctrans,
        name: "Centre for Transportation Systems (CTRANS)",
        link:'https://iitr.ac.in/Centres/Centre%20for%20Transportation%20Systems/index.html'
    },
    {
        img: dams,
        name: "International Centre of Excellence for Dams",
        link:'https://drive.google.com/file/d/1la2MMxMcwAz2dkB_u1Jy1yhiHmjEkWFV/view'
    },

]
const SchoolsApi = [{
        img: ai,
        name: "Mehta Family School of Data Science and Artificial Intelligence",
        link:'https://www.iitr.ac.in/mfsdsai/'
    },]

export { DepartmentsApi, CentresApi, SchoolsApi}