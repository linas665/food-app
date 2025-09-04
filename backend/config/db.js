import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://linas:linas665@cluster0.gumob.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}