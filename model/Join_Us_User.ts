import mongoose, { Schema, Document } from "mongoose";

export interface JoinUser extends Document {
  fullName: string;
  email : string; 
  mobile: string;
  dob : string; 
  gender : string;
}

const UserSchema = new Schema<JoinUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  gender: { type: String, required : true},

});

export default mongoose.models.Join_Us_User || mongoose.model<JoinUser>("Join_Us_User", UserSchema);
