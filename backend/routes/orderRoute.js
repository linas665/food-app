import express from "express"
import authMiddleWare from "../middleware/authOrder.js"
import auth from "../middleware/auth.js"
import { placeOrder, userOrders,listOrders,updateStatus } from "../controllers/orderController.js"


const orderRouter = express.Router();

orderRouter.post("/place-order",authMiddleWare,placeOrder);
orderRouter.get("/user-orders",authMiddleWare,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;
