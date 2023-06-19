import bcrypt from "bcryptjs";

const employees = [
  {
    name: "John Doe",
    email: "johndoe@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: true,
  },
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,
  },
  {
    name: "Michael Johnson",
    email: "michaeljohnson@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
  {
    name: "Robert Wilson",
    email: "robertwilson@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
  {
    name: "Olivia Thompson",
    email: "oliviathompson@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
  {
    name: "William Clark",
    email: "williamclark@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
  {
    name: "Sophia Adams",
    email: "sophiaadams@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdministrator: false,

  },
];

export default employees;
