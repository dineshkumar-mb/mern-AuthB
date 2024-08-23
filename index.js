import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.js';

dotenv.config();

const app = express();
app.use(express.json());

// CORS options
const corsOptions = {
    origin: "https://heroic-cactus-c569b6.netlify.app",
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

// If you need to allow multiple origins, uncomment and modify the following block
// const allowedOrigins = [
//   'http://localhost:5173',
//   'https://heroic-cactus-c569b6.netlify.app'
// ];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   allowedHeaders: 'Content-Type,Authorization'
// }));

app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/auth', UserRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


// import express from 'express'
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// dotenv.config()
// import { UserRouter } from './routes/user.js'

// const app = express()
// app.use(express.json())
// app.use(cors(corsOptions))
// const corsOptions = {
// origin : "https://heroic-cactus-c569b6.netlify.app"
// }
// // const allowedOrigins = [
// //   'http://localhost:5173',
// //   'https://heroic-cactus-c569b6.netlify.app'
  
// // ];

// // app.use(cors({
// //   origin: function (origin, callback) {
// //     if (!origin) return callback(null, true);
// //     if (allowedOrigins.indexOf(origin) === 1) {
// //       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
// //       return callback(new Error(msg), false);
// //     }
// //     return callback(null, true);
// //   },
// //   credentials: true,
// //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //   allowedHeaders: 'Content-Type,Authorization'
// // }));
// app.use(cookieParser())
// app.use('/auth', UserRouter)

// mongoose.connect(process.env.MONGODB_URI)


// app.listen(process.env.PORT, () => {
//     console.log("Server is Running")
// })