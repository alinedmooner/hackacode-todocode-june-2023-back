import asyncHandler from '../middleware/asyncHandler.js'
import Customer from '../models/customerModel.js'

// @desc    Get all customers
// @route   GET /api/customers
// @access  Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({})
  res.json(customers)
})

// @desc    Get single customer
// @route   GET /api/customers/:id
// @access  Public
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  if (customer) {
    res.json(customer)
  } else {
    res.status(404)
    throw new Error('Customer not found')
  }
})

// @desc    Create a customer
// @route   POST /api/customers
// @access  Private/Admin
const createCustomer = asyncHandler(async (req, res) => {
  const customer = new Customer({
    name: 'Sample name',
    image: '/images/sample.jpg',
    description: 'Sample description',
    category: 'Sample category',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0
  })
  const createdCustomer = await customer.save()
  res.status(201).json(createdCustomer)
})

// @desc    Update a customer
// @route   PUT /api/customers/:id
// @access  Private/Admin
const updateCustomer = asyncHandler(async (req, res) => {
  const {
    name, image, description, category, price, countInStock
  } = req.body
  const customer = await Customer.findById(req.params.id)
  if (customer) {
    customer.name = name
    customer.image = image
    customer.description = description
    customer.category = category
    customer.price = price
    customer.countInStock = countInStock

    const updatedCustomer = await customer.save()
    res.json(updatedCustomer)
  } else {
    res.status(404)
    throw new Error('Customer not found')
  }
})

export {
  getCustomers, getCustomerById, createCustomer, updateCustomer
}
