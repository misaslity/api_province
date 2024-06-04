const express = require('express');
const get_list_province = require('../controller/get_province');
const get_list_district = require('../controller/get_district');
const get_list_ward = require('../controller/get_ward');

const router = express.Router();

router.get("/api/v1/province", get_list_province)
router.get("/api/v1/district/:province_id", get_list_district)
router.get("/api/v1/ward/:district_id", get_list_ward)

module.exports = router;