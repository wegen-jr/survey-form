import { useState } from "react";

export default function ResponseTable({ responses }) {
  const [selectedResponse, setSelectedResponse] = useState(null);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">

            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-4 font-semibold text-gray-700">
                  #
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Business
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Employees
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Biggest Problem
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Software
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Willing to Pay
                </th>

                <th className="px-5 py-4 font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {responses.map((response, index) => (
                <tr
                  key={response._id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  <td className="px-5 py-4 text-gray-500">
                    {index + 1}
                  </td>

                  <td className="px-5 py-4 font-medium text-gray-900">
                    {response.businessType}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {response.employeeCount}
                  </td>

                  <td className="max-w-xs px-5 py-4 text-gray-600">
                    {response.biggestProblem}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {response.usesSoftware}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {response.willingToPay}
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() =>
                        setSelectedResponse(response)
                      }
                      className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {selectedResponse && (
        <ResponseModal
          response={selectedResponse}
          onClose={() => setSelectedResponse(null)}
        />
      )}
    </>
  );
}
function ResponseModal({ response, onClose }) {
  const fields = [
    ["Business Type", response.businessType],
    ["Years Operating", response.yearsOperating],
    ["Employee Count", response.employeeCount],
    ["Daily Transactions", response.dailyTransactions],
    ["Sales Recording", response.salesRecording],
    ["Inventory Tracking", response.inventoryTracking],
    ["Expense Tracking", response.expenseTracking],
    ["Profit Calculation", response.profitCalculation],
    ["Review Frequency", response.reviewFrequency],
    ["Biggest Problem", response.biggestProblem],
    [
      "Inventory Problem Frequency",
      response.inventoryProblemFrequency,
    ],
    ["Money Loss Frequency", response.moneyLossFrequency],
    ["Uses Software", response.usesSoftware],
    ["Preferred Device", response.preferredDevice],
    ["Willing to Pay", response.willingToPay],
    ["Pricing Model", response.pricingModel],
    ["Price Range", response.priceRange],
    ["Improvement", response.improvement],
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Response Details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Complete survey response
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl bg-gray-50 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {label}
              </p>

              <p className="mt-1 text-sm text-gray-900">
                {value || "Not provided"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">

          <ArrayField
            label="Experienced Problems"
            values={response.experiencedProblems}
          />

          <ArrayField
            label="Dashboard Information"
            values={response.dashboardInformation}
          />

          <ArrayField
            label="Desired Features"
            values={response.desiredFeatures}
          />

          {response.softwareProblems?.length > 0 && (
            <ArrayField
              label="Software Problems"
              values={response.softwareProblems}
            />
          )}

        </div>

      </div>
    </div>
  );
}

function ArrayField({ label, values = [] }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {values.length === 0 ? (
          <span className="text-sm text-gray-500">
            None
          </span>
        ) : (
          values.map((value, index) => (
            <span
              key={`${value}-${index}`}
              className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200"
            >
              {value}
            </span>
          ))
        )}
      </div>
    </div>
  );
}