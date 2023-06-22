import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    attraction: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Attraction",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;