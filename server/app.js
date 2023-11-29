const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer')
const upload = multer({ dest: 'uploads/'});

const billRoutes = require('./routes/billRoutes');
const addPaymentRoutes = require('./routes/addPaymentRoutes');
const vocherRoutes = require('./routes/vocherRoutes');
const bankdetailsRoutes = require('./routes/bankdetailsRoutes');
const addPatientsRoutes = require('./routes/addPatientsRoutes');
const  addpatientwebRoutes = require('./routes/addpatientwebRoutes');
const  appointmentheaderRoutes = require('./routes/appointmentheaderRoutes');
const  invesdtagationRoutes = require('./routes/invesdtagationRoutes');
const  patientnoteRoutes = require('./routes/patientnoteRoutes');
const  addpreciptionRoutes = require('./routes/addpreciptionRoutes');
const  defaultfileRoutes = require('./routes/defaultfileRoutes');
const appointmentpageRoutes= require('./routes/appointmentpageRoutes');
const personalRoutes = require('./routes/personalRoutes');
const contactRoutes = require('./routes/contactRoutes');
const personalAttributeRoutes = require('./routes/personalAttributeRoutes');
const billpaymentRoutes = require('./routes/billpaymentRoutes');





const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'Dentee';

mongoose.connect(`${uri}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  app.use('/uploads', express.static('uploads'));



app.use('/api', billRoutes); 
app.use('/api', addPaymentRoutes); 
app.use('/api', vocherRoutes); 
app.use('/api', bankdetailsRoutes); 
app.use('/api', addPatientsRoutes); 
app.use('/api', addpatientwebRoutes); 
app.use('/api', appointmentheaderRoutes); 
app.use('/api', invesdtagationRoutes); 
app.use('/api', patientnoteRoutes);
app.use('/api', addpreciptionRoutes);
app.use('/api', defaultfileRoutes);
app.use('/api', appointmentpageRoutes);
app.use('/api', personalRoutes);
app.use('/api', contactRoutes);
app.use('/api', personalAttributeRoutes);
app.use('/api', billpaymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
