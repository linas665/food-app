// filepath: [orderController.js](http://_vscodecontentref_/2)
import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import Stripe from "stripe";
import dotenv from 'dotenv';


dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
    const frontend_url = process.env.FRONTEND_URL;
    console.log(req.body)

    try {
        // Check required fields
        if (!req.body.userId || !req.body.items || !req.body.amount || !req.body.address) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Creating a new order
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Preparing Stripe line items
        // const line_items = req.body.items.map((item) => ({
        //     price_data: {
        //         currency: "inr",
        //         product_data: {
        //             name: item.name
        //         },
        //         unit_amount: item.price * 100
        //     },
        //     quantity: item.quantity
        // }));

        // Adding delivery charge
        // line_items.push({
        //     price_data: {
        //         currency: "inr",
        //         product_data: {
        //             name: "Delivery Charges"
        //         },
        //         unit_amount: 2 * 100
        //     },
        //     quantity: 1
        // });

        // Creating Stripe session
        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types: ['card'],
        //     line_items: line_items,
        //     mode: 'payment',
        //     success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        //     cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        // });

        // Sending response with session URL
        res.json({ success: true });

    } catch (error) {
        console.error("Order Placement Error: ", error.message);
        res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
    }
};

const userOrders = async(req, res) => { 
    console.log(req.body)
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data: orders});
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//listing order for admin panel 
const listOrders = async (req,res) =>{
       try {
        const orders = await  orderModel.find({});
        res.json({success:true,data:orders})
       } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
       }
}

// api for updating order status 
const updateStatus = async (req,res) =>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder, userOrders, listOrders,updateStatus };