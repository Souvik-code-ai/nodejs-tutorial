const express=require('express');
let app=express();
const userRoutes = require('./userRoutes');

app.use(express.json())
// const express=require('express');
//let app=express();
app.use('/api', userRoutes); // all routes will start with /api
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
