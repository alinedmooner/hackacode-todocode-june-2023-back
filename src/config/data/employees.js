import bcrypt from "bcryptjs";

const employees = [
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: true,
    attractions: ["Attraction 1", "Attraction 2", "Attraction 3"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/images/employee_profile/.webp.webp"
  },
  {
    name: "John Doe",
    email: "johndoe@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 2", "Attraction 4", "Attraction 6", "Attraction 8"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/austin-distel-7uoMmzPd2JA-unsplash.webp"
  },
  {
    name: "Michael Johnson",
    email: "michaeljohnson@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 1", "Attraction 3", "Attraction 5", "Attraction 7", "Attraction 9"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/ben-den-engelsen-YUu9UAcOKZ4-unsplash.webp"
  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 2", "Attraction 4"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/christopher-campbell-rDEOVtE7vOs-unsplash.webp"
  },
  {
    name: "Roberta Wilson",
    email: "robertawilson@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 2", "Attraction 4", "Attraction 6", "Attraction 8"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/edward-cisneros-_H6wpor9mjs-unsplash.webp"
  },
  {
    name: "Olivia Thompson",
    email: "oliviathompson@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 2", "Attraction 4", "Attraction 6", "Attraction 8"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/freestocks-9UVmlIb0wJU-unsplash.webp"
  },
  {
    name: "Ana Clark",
    email: "anaclark@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 3", "Attraction 5", "Attraction 7", "Attraction 9"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/jake-nackos-IF9TK5Uy-KI-unsplash.webp"
  },
  {
    name: "Sony Adams",
    email: "sonyadams@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 1", "Attraction 9"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/joseph-gonzalez-iFgRcqHznqg-unsplash.webp"
  },
  {
    name: "Israel Rodriguez",
    email: "israelrodriguez@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 1", "Attraction 9"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/lesly-juarez-RukI4qZGlQs-unsplash.webp"
  },
  {
    name: "Alexander Baker",
    email: "alexanderbaker@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 1", "Attraction 9"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.webp"
  },
  {
    name: "Liana Hamilton",
    email: "lianahamilton@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 4", "Attraction 5", "Attraction 6", "Attraction 7"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/stefan-stefancik-QXevDflbl8A-unsplash.webp"
  },
  {
    name: "Leo Messi",
    email: "leomessi@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
    attractions: ["Attraction 4", "Attraction 5", "Attraction 6", "Attraction 7"],
    categories: ["Arcade Games",],
    image: "images/employee_profile/taylor-8Vt2haq8NSQ-unsplash.webp"
  },
];

export default employees;