import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
  name: String,
  rules: Object
});

export default mongoose.model("Policy", policySchema);