import express from 'express'
import { getAttractions, getAttractionById } from '../controllers/attractionController.js'

const router = express.Router()

router.route('/').get(getAttractions)

router.route('/:id').get(getAttractionById)

export default router
