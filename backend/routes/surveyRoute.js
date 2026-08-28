const express=require('express');
const router=express.Router();
const {postSurvey}=require('../controllers/surveyController');
router.post('/',postSurvey);

module.exports=router;