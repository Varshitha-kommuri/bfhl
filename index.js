const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const userId = "john_doe_17091999";
const email = "john@xyz.com";
const rollNumber = "ABCD123";


//POST endpoint

app.post('/bfhl',(req,res)=>{
    const {data} = req.body;

    if(!Array.isArray(data)){
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item=> !isNaN(item));
    const alphabets = data.filter(item=> isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a,b)=>a.toUpperCase().localeCompare(b.toUpperCase())).pop()] : [];

    res.json({

        "is_success": true,
        "user_id": userId,
        "email" : email,
        "roll_number": rollNumber,
        "numbers" : numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    });
    
    
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});