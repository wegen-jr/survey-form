const express=require('express');
const router=express.Router();
const {postSurvey}=require('../controller/surveyController');
router.post('/',postSurvey);

module.exports=router;