import mongoose from 'mongoose'

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
