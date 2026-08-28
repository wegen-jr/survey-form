const questions = [
  {
    id: "businessType",
    question: "What type of business do you operate?",
    type: "single",
    options: [
      "Grocery / Mini-market",
      "Clothing / Fashion",
      "Electronics",
      "Restaurant / Café",
      "Pharmacy",
      "Hardware / Building materials",
      "Wholesale",
      "Beauty salon / Barber",
      "Other",
    ],
  },

  {
    id: "yearsOperating",
    question: "How long has your business been operating?",
    type: "single",
    options: [
      "Less than 1 year",
      "1–3 years",
      "3–5 years",
      "5–10 years",
      "More than 10 years",
    ],
  },

  {
    id: "employeeCount",
    question: "How many people work in your business?",
    type: "single",
    options: [
      "Just me",
      "2–5",
      "6–10",
      "11–20",
      "More than 20",
    ],
  },

  {
    id: "dailyTransactions",
    question:
      "Approximately how many sales transactions do you make on a normal day?",
    type: "single",
    options: [
      "Less than 10",
      "10–30",
      "31–50",
      "51–100",
      "More than 100",
      "I'm not sure",
    ],
  },

  {
    id: "salesRecording",
    question: "How do you currently record your sales?",
    type: "single",
    options: [
      "Notebook / Paper",
      "Excel / Spreadsheet",
      "Mobile application",
      "Computer software",
      "POS system",
      "I don't regularly record sales",
      "Other",
    ],
  },

  {
    id: "inventoryTracking",
    question:
      "How do you currently track your inventory/stock?",
    type: "single",
    options: [
      "Notebook / Paper",
      "Excel / Spreadsheet",
      "Mobile application",
      "Computer software",
      "POS system",
      "I check stock manually",
      "I don't regularly track inventory",
      "Other",
    ],
  },

  {
    id: "expenseTracking",
    question:
      "How do you currently record your business expenses?",
    type: "single",
    options: [
      "Notebook / Paper",
      "Excel / Spreadsheet",
      "Mobile application",
      "Computer software",
      "I don't regularly record expenses",
      "Other",
    ],
  },

  {
    id: "profitCalculation",
    question:
      "How do you currently calculate your business profit?",
    type: "single",
    options: [
      "Manually",
      "Excel / Spreadsheet",
      "Software / Application",
      "Accountant calculates it",
      "I estimate it",
      "I don't regularly calculate profit",
    ],
  },

  {
    id: "reviewFrequency",
    question:
      "How often do you review your business performance?",
    type: "single",
    options: [
      "Every day",
      "Several times a week",
      "Once a week",
      "Once a month",
      "Occasionally",
      "Almost never",
    ],
  },

  {
    id: "experiencedProblems",
    question:
      "Which business-management problems do you experience?",
    type: "multiple",
    options: [
      "Difficulty tracking inventory",
      "Running out of products unexpectedly",
      "Difficulty tracking sales",
      "Difficulty tracking expenses",
      "Difficulty calculating profit",
      "Losing or forgetting records",
      "Customer debt / credit tracking",
      "Difficulty tracking suppliers",
      "Difficulty monitoring employees",
      "No major problems",
      "Other",
    ],
  },

  {
    id: "biggestProblem",
    question:
      "Which ONE of these is the biggest problem for your business?",
    type: "single",
    options: [
      "Inventory management",
      "Sales tracking",
      "Expense tracking",
      "Profit calculation",
      "Customer/debt management",
      "Supplier management",
      "Employee management",
      "Record keeping",
      "Other",
    ],
  },

  {
    id: "inventoryProblemFrequency",
    question:
      "How often do you experience problems with your inventory or stock records?",
    type: "single",
    options: [
      "Very often",
      "Often",
      "Sometimes",
      "Rarely",
      "Never",
      "Inventory is not important for my business",
    ],
  },

  {
    id: "moneyLossFrequency",
    question:
      "Have you ever lost money because of poor record keeping, inventory problems, forgotten expenses, or similar issues?",
    type: "single",
    options: [
      "Frequently",
      "Several times",
      "Once or twice",
      "Never",
      "I'm not sure",
    ],
  },

  {
    id: "dashboardInformation",
    question:
      "What information would be most useful to see immediately in a business dashboard?",
    type: "multiple",
    maxSelections: 3,
    options: [
      "Today's sales",
      "Monthly sales",
      "Today's expenses",
      "Monthly expenses",
      "Current profit",
      "Low-stock products",
      "Best-selling products",
      "Customer debts",
      "Supplier debts",
      "Employee performance",
      "Other",
    ],
  },

  {
    id: "usesSoftware",
    question:
      "Do you currently use any software or application to manage your business?",
    type: "single",
    options: [
      "Yes, regularly",
      "Yes, but only for some tasks",
      "I have tried software before but stopped using it",
      "No, I use paper/manual methods",
    ],
  },

  {
    id: "softwareProblems",
    question:
      "If you use software, what is the biggest problem with your current solution?",
    type: "multiple",
    options: [
      "Too expensive",
      "Difficult to use",
      "Too many unnecessary features",
      "Missing important features",
      "Doesn't work well on my device",
      "Internet requirements",
      "Technical/support problems",
      "No major problem",
      "Other",
    ],

    showWhen: (answers) =>
      answers.usesSoftware === "Yes, regularly" ||
      answers.usesSoftware === "Yes, but only for some tasks" ||
      answers.usesSoftware ===
        "I have tried software before but stopped using it",
  },

  {
    id: "preferredDevice",
    question:
      "Which device would you prefer to use for managing your business?",
    type: "single",
    options: [
      "Smartphone",
      "Tablet",
      "Laptop",
      "Desktop computer",
      "Smartphone + computer",
      "No preference",
    ],
  },

  {
    id: "desiredFeatures",
    question:
      "Which features would be most valuable to you?",
    type: "multiple",
    maxSelections: 5,
    options: [
      "Sales recording",
      "Inventory management",
      "Expense tracking",
      "Profit calculation",
      "Customer management",
      "Customer debt tracking",
      "Supplier management",
      "Automatic low-stock alerts",
      "Business reports",
      "Invoice/receipt generation",
      "Employee management",
      "Data backup",
      "Other",
    ],
  },

  {
    id: "improvement",
    question:
      "What is the ONE thing you would most like to improve about the way you currently manage your business?",
    type: "text",
  },

  {
    id: "willingToPay",
    question:
      "If a software product could solve your biggest business-management problem, would you consider paying for it?",
    type: "single",
    options: [
      "Definitely yes",
      "Probably yes",
      "Maybe",
      "Probably not",
      "Definitely not",
    ],
  },

  {
    id: "pricingModel",
    question: "Which pricing model would you prefer?",
    type: "single",
    options: [
      "Monthly subscription",
      "Yearly subscription",
      "One-time payment",
      "Free basic version + paid features",
      "I don't know yet",
    ],

    showWhen: (answers) =>
      answers.willingToPay === "Definitely yes" ||
      answers.willingToPay === "Probably yes" ||
      answers.willingToPay === "Maybe",
  },

  {
    id: "priceRange",
    question:
      "What price range would you consider reasonable?",
    type: "single",
    options: [
      "Less than 100 ETB/month",
      "100–300 ETB/month",
      "300–500 ETB/month",
      "500–1,000 ETB/month",
      "More than 1,000 ETB/month",
      "I would prefer a one-time payment",
      "I don't know",
    ],

    showWhen: (answers) =>
      answers.willingToPay === "Definitely yes" ||
      answers.willingToPay === "Probably yes" ||
      answers.willingToPay === "Maybe",
  },
];

export default questions;