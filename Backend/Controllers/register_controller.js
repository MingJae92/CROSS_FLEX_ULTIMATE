// register_controller.js
import Register_User from "../Models/register_schema.js";

const registerCustomer = async (req, res) => {
  try {
    const { fullname, lastname, email, password, confirmpassword } = req.body;

    // Validate input data (you can use a validation library or custom validation logic)
    if (!fullname || !lastname || !email || !password || !confirmpassword) {
      return res.status(400).json({ error: "Please provide all required fields." });
      
    }

    // Create a new user in the database
    const register = await Register_User.create(req.body);

    // You might want to return only necessary information or a success message
    return res.status(201).json({ message: "User registered successfully", user: register });
  } catch (error) {
    console.error("Error in registerCustomer:", error);
    
    return res.status(500).json({ error: "Internal Server Error" });
    
  }
};

export { registerCustomer };
