const express = require('express');
const router = express.Router();
const {
    getAdministratorById,
    getAdministratorByUserId,
    getAllAdministrators,
    createAdministrator,
    updateAdministrator,
    deleteAdministrator
} = require('../controller/adminController');

// Route for getting an administrator by their unique ID
router.get('/administrators/:id', getAdministratorById);

// Route for getting an administrator by the associated user's unique ID
router.get('/administrators/user/:userId', getAdministratorByUserId);

// Route for getting all administrators
router.get('/administrators', getAllAdministrators);

// Route for creating a new administrator
router.post('/administrators', createAdministrator);

// Route for updating an administrator's department or access level
router.put('/administrators/:id', updateAdministrator);

// Route for deleting an administrator by their unique ID
router.delete('/administrators/:id', deleteAdministrator);

module.exports = router;
