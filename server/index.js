const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers');

const app = express();
const port = 80;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(
  cors({
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  })
);

// Routing
app.use('/', router.indexRouter);
app.use('/user', router.userRouter);
app.use('/category', router.sayingRouter);

// Running
const server = app.listen(port, () => console.log(`${port} port http server runnning`));
module.exports = server;