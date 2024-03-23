const express = require('express')
const menuModel = require("../db/menuModel.js")
const {createMenu,findsMenu,findMenu,updateMenu,deleteMenu} = require("../controller/menu_controller.js")
const router = express.Router();

router.post('/create',createMenu);
router.get('/finds',findsMenu);
router.get('/find/:id',findMenu)
router.put('/update/:id',updateMenu)
router.delete('/delete/:id',deleteMenu);
module.exports = router