import asyncHandler from '../middleware/asyncHandler.js'

import Category from '../models/categoryModel.js'

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})
  res.json(categories)
})

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

// @desc    Create a category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: 'Sample name',
    image: '/images/sample.jpg',
    description: 'Sample description',
    category: 'Sample category',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0
  })
  const createdCategory = await category.save()
  res.status(201).json(createdCategory)
})

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const {
    name, image, description, price, countInStock
  } = req.body
  const category = await Category.findById(req.params.id)
  if (category) {
    category.name = name
    category.image = image
    category.description = description
    category.category = category
    category.price = price
    category.countInStock = countInStock

    const updatedCategory = await category.save()
    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (category) {
    await category.remove()
    res.json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

export {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}
