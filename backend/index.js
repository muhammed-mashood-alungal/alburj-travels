// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/connection')
const app = express();
const bodyParser = require('body-parser');
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const passport =require('passport')

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true 
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(cookieParser());
db.connect()

 dotenv.config()

// Routes 
const packageRoutes = require('./routes/packageRoutes');
app.use('/api/package', packageRoutes);

const topDealsRoutes=require('./routes/topDealRoutes')
app.use('/api/topDeals',topDealsRoutes)

const signUpRoutes=require('./routes/AuthRoutes')
app.use('/api/auth',signUpRoutes) 

const adminRoutes=require('./routes/AdminRoutes/authRoutes')
app.use('/api/admin',adminRoutes)

const userRoutes=require('./routes/userRoutes')
app.use('/api/user',userRoutes)

const companyRoutes=require('./routes/AdminRoutes/companyDataRoutes')
app.use('/api/admin/company',companyRoutes)

const panelRoutes=require('./routes/AdminRoutes/panelRoutes')
app.use('/api/admin/panel',panelRoutes)
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
