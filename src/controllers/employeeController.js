import asyncHandler from "../middleware/asyncHandler.js";
import Employee from "../models/employeeModel.js";

// @desc    Get all employees
// @route   GET /api/employees
// @access  Public
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
}
);

// @desc    Get single employee
// @route   GET /api/employees/:id
// @access  Public
const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
}
);

// @desc    Create a employee
// @route   POST /api/employees
// @access  Private/Admin
const createEmployee = asyncHandler(async (req, res) => {
  const employee = new Employee({
    name: "Sample name",
    image: "/images/sample.jpg",
    description: "Sample description",
    category: "Sample category",
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  });
  const createdEmployee = await employee.save();
  res.status(201).json(createdEmployee);
}
);

// @desc    Update a employee
// @route   PUT /api/employees/:id
// @access  Private/Admin
const updateEmployee = asyncHandler(async (req, res) => {
  const { name, image, description, category, price, countInStock } = req.body;
  const employee = await Employee.findById(req.params.id);
  if (employee) {
    employee.name = name;
    employee.image = image;
    employee.description = description;
    employee.category = category;
    employee.price = price;
    employee.countInStock = countInStock;

    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
}
);

export { getEmployees, getEmployeeById, createEmployee, updateEmployee };

