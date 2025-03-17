const User=require("../schemas/userSchema");
const bcrypt=require("bcrypt")
// 🔍 Search: Retrieves a user by their unique ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves a user by their email address
const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ userEmail: req.params.email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all users from the database
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ➕ Add: Creates a new user and saves them to the database
const createUser = async (req, res) => {
    try {
        const { userLastName, userFirstName, userEmail, userPassword, userPhoneNumber, userBirthDate, userPhoto, userGender, userCountry, userCity, userAddress } = req.body;

        // Create new user instance
        const newUser = new User({
            userLastName,
            userFirstName,
            userEmail,
            userPassword,
            userPhoneNumber,
            userBirthDate,
            userPhoto,
            userGender,
            userCountry,
            userCity,
            userAddress
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing user's information based on their ID
// ✏️ Update: Updates a user's details, including password if provided
const updateUser = async (req, res) => {
    try {
        const { userLastName, userFirstName, userPhoneNumber, userBirthDate, userPhoto, userGender, userCountry, userCity, userAddress, newPassword } = req.body;

        // Prepare the data to be updated
        const updateData = { userLastName, userFirstName, userPhoneNumber, userBirthDate, userPhoto, userGender, userCountry, userCity, userAddress };

        // If a new password is provided, hash it and add it to the updateData
        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10); // Assuming bcrypt is being used for hashing passwords
            updateData.userPassword = hashedPassword; // Assuming the password field in the schema is called userPassword
        }

        // Perform the update operation
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        // Handle case where user is not found
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the updated user details
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ❌ Delete: Deletes a user by their unique ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports=
{
    getUserById,
    getUserByEmail,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}