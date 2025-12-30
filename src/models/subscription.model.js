import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, // one who is subcribing 
    ref: "User"
  },
  channel: {
    type: Schema.Types.ObjectId, // one who is being subscribed
    ref: "User"
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ["active", "inactive", "expired"],
    default: "active"
  }
}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", subscriptionSchema);