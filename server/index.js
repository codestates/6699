require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  })
);

// ****************** multer 테스트 ************************ //

const multer = require('multer');
app.use('/uploads', express.static('uploads'));

const upload = multer({
  storage: multer.diskStorage({
    // set a localstorage destination
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    // convert a file name
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

const { uploadFile, getFileStream } = require('./s3')

app.get('/upload/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

// 클라이언트에서 받은 이미지를 업로드
app.post('/upload', upload.single('img'), async (req, res) => {

  const file = req.file
  console.log(file)
  const result = await uploadFile(file)
  console.log(result)
  const description = req.body.description

  // res.status(200).json({ data: { img: req.file.path }, message: 'Image Upload Success!' })
  res.json({ imagePath: `/upload/${result.key}`})
});

// ****************** multer 테스트 ************************ //

// Routing
app.use('/auth', router.authRouter);
app.use('/user', router.userRouter);
app.use('/ranking', router.rankingRouter);
app.use('/', router.sayingRouter);

// Running
const server = app.listen(port, () => console.log(`${port} port http server runnning`));
module.exports = server;