import mongoose from "mongoose";


const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});
//token expires in 3600 seconds i.e 1 hour

const token = mongoose.model("token", tokenSchema);
export default token;