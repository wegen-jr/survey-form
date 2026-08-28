const Survey=require('../model/surveyModel');

const postSurvey=async(req,res )=>{
    const formData=req.body;

    try{
        const survey=await Survey.create(formData);
        if(survey){
            return res.status(201).json({
                success:true,
                message:"survey submitted successfully"
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"invalid inputs or data"
            })
        }
    }catch(e){
        return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}
module.exports={
    postSurvey
}