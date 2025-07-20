import express from "express";
import { connectDB } from "./connectDb/connectdb.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorhandler.js";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Error handler
app.use(errorHandler);

// DB Connection
const connect = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};

app.listen(8000, () => {
  connect();
  console.log("Server is running on port 8000");
});
