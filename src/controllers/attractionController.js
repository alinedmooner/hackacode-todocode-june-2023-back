import asyncHandler from '../middleware/asyncHandler.js'
import Attraction from '../models/attractionModel.js'

// @desc    Get all attractions
// @route   GET /api/attractions
// @access  Public
const getAttractions = asyncHandler(async (req, res) => {
  const attractions = await Attraction.find({})
  res.json(attractions)
})

// @desc    Get single attraction
// @route   GET /api/attractions/:id
// @access  Public
const getAttractionById = asyncHandler(async (req, res) => {
  const attraction = await Attraction.findById(req.params.id)
  if (attraction) {
    res.json(attraction)
  } else {
    res.status(404)
    throw new Error('Attraction not found')
  }
})

// @desc    Create a attraction
// @route   POST /api/attractions
// @access  Private/Admin
const createAttraction = asyncHandler(async (req, res) => {
  const attraction = new Attraction({
    name: 'Sample name',
    image: '/images/sample.jpg',
    description: 'Sample description',
    category: 'Sample category',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0
  })
  const createdAttraction = await attraction.save()
  res.status(201).json(createdAttraction)
})

// @desc    Update a attraction
// @route   PUT /api/attractions/:id
// @access  Private/Admin
const updateAttraction = asyncHandler(async (req, res) => {
  const {
    name, image, description, category, price, countInStock
  } = req.body
  const attraction = await Attraction.findById(req.params.id)
  if (attraction) {
    attraction.name = name
    attraction.image = image
    attraction.description = description
    attraction.category = category
    attraction.price = price
    attraction.countInStock = countInStock

    const updatedAttraction = await attraction.save()
    res.json(updatedAttraction)
  } else {
    res.status(404)
    throw new Error('Attraction not found')
  }
})

// @desc    Delete a attraction
// @route   DELETE /api/attractions/:id
// @access  Private/Admin
const deleteAttraction = asyncHandler(async (req, res) => {
  const attraction = await Attraction.findById(req.params.id)
  if (attraction) {
    await attraction.remove()
    res.json({ message: 'Attraction removed' })
  } else {
    res.status(404)
    throw new Error('Attraction not found')
  }
})

export {
  getAttractions, getAttractionById, createAttraction, updateAttraction, deleteAttraction
}
