const mongoose=require('mongoose');
const surveySchema = new mongoose.Schema(
  {
    businessType: {
      type: String,
      required: true,
    },

    yearsOperating: {
      type: String,
      required: true,
    },

    employeeCount: {
      type: String,
      required: true,
    },

    dailyTransactions: {
      type: String,
      required: true,
    },

    salesRecording: {
      type: String,
      required: true,
    },

    inventoryTracking: {
      type: String,
      required: true,
    },

    expenseTracking: {
      type: String,
      required: true,
    },

    profitCalculation: {
      type: String,
      required: true,
    },

    reviewFrequency: {
      type: String,
      required: true,
    },

    experiencedProblems: {
      type: [String],
      required: true,
    },

    biggestProblem: {
      type: String,
      required: true,
    },

    inventoryProblemFrequency: {
      type: String,
      required: true,
    },

    moneyLossFrequency: {
      type: String,
      required: true,
    },

    dashboardInformation: {
      type: [String],
      required: true,
    },

    usesSoftware: {
      type: String,
      required: true,
    },

    softwareProblems: {
      type: [String],
    },

    preferredDevice: {
      type: String,
      required: true,
    },

    desiredFeatures: {
      type: [String],
      required: true,
    },

    improvement: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },

    willingToPay: {
      type: String,
      required: true,
    },

    pricingModel: {
      type: String,
      required: false,
    },

    priceRange: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model("Survey", surveySchema);