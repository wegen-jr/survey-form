const Survey = require("../models/surveyModel");

const getDashboardStats = async (req, res) => {
  try {
    const totalResponses = await Survey.countDocuments();

    const [
      businessTypes,
      yearsOperating,
      employeeCount,
      salesRecording,
      inventoryTracking,
      expenseTracking,
      profitCalculation,
      reviewFrequency,
      biggestProblems,
      inventoryProblemFrequency,
      moneyLossFrequency,
      usesSoftware,
      preferredDevice,
      willingToPay,
      pricingModel,
      priceRange,
      experiencedProblems,
      dashboardInformation,
      desiredFeatures,
    ] = await Promise.all([
      Survey.aggregate([
        {
          $group: {
            _id: "$businessType",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$yearsOperating",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$employeeCount",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$salesRecording",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$inventoryTracking",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$expenseTracking",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$profitCalculation",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$reviewFrequency",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$biggestProblem",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$inventoryProblemFrequency",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$moneyLossFrequency",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$usesSoftware",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$preferredDevice",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$willingToPay",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$pricingModel",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        {
          $group: {
            _id: "$priceRange",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        { $unwind: "$experiencedProblems" },
        {
          $group: {
            _id: "$experiencedProblems",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        { $unwind: "$dashboardInformation" },
        {
          $group: {
            _id: "$dashboardInformation",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),

      Survey.aggregate([
        { $unwind: "$desiredFeatures" },
        {
          $group: {
            _id: "$desiredFeatures",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
      ]),
    ]);

    res.status(200).json({
      totalResponses,

      businessTypes,
      yearsOperating,
      employeeCount,

      salesRecording,
      inventoryTracking,
      expenseTracking,
      profitCalculation,

      reviewFrequency,

      biggestProblems,
      inventoryProblemFrequency,
      moneyLossFrequency,

      usesSoftware,
      preferredDevice,

      willingToPay,
      pricingModel,
      priceRange,

      experiencedProblems,
      dashboardInformation,
      desiredFeatures,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);

    res.status(500).json({
      message: "Failed to load dashboard statistics",
    });
  }
};

module.exports = {
  getDashboardStats,
};