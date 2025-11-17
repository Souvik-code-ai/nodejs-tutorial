let express=require("express");
let app=express();
app.use(express.json());
//let userTable=require("./user_data_insertion");
let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken");
let loginTable=require("./schema");
let db_2=require("./db_connection");
let secret_key = "drhdrd";
let router=express.Router();
// LOGIN API
router.post("/login", async (req, res) => {
    // const { email } = req.body;

    // console.log(email);    
    try {
        let contain = req.body;

        // 1. Check email exists
        let emailMatch = await loginTable.findOne({ email: contain.email });
        console.log(emailMatch,'ggggggggggggggggggggggggggggg');//consoles the particular document from database which is matched  
        if (!emailMatch) {
            return res.status(400).json({ message: "Email not found" });
        }

        // 2. Compare password
        let passwordMatch = await bcrypt.compare(contain.password, emailMatch.password);
        console.log("dfgbs",passwordMatch);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // 3. Generate token
        let header = {
            header_id: emailMatch._id,
            email: emailMatch.email,
            role: emailMatch.role
        };

        let token = jwt.sign(header, secret_key, { expiresIn: "1h" });

        let decrypt_data=jwt.verify(token,secret_key);
        console.log(decrypt_data);//displays token part with id and token creation(iat) and expiry time(exp)
        
        console.log(decrypt_data.header_id);
        //console.log(decrypt_data.role);//to access any particular key of decrypt data

        res.status(200).json({ message: "Login success", token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports=router;