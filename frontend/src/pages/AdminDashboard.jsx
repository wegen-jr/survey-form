import { useEffect, useState } from "react";
import {
  RefreshCw,
  Users,
  Store,
  Monitor,
  CreditCard,
} from "lucide-react";

import StatCard from "../components/StatCard";
import SurveyChart from "../components/SurveyChart";

const API_URL = process.env.API_URL;

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/admin/stats`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to load dashboard"
        );
      }

      setStats(data);
    } catch (error) {
      console.error("Dashboard error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />

          <p className="mt-3 text-gray-500">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-5">
        <div className="max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-red-700">
            Failed to load dashboard
          </h2>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

          <button
            onClick={fetchStats}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            <RefreshCw size={16} />
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Survey Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Analyze business owner responses and identify product opportunities.
            </p>
          </div>

          <button
            onClick={fetchStats}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>

        {/* Overview */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Responses"
            value={stats.totalResponses}
            description="Business owners surveyed"
          />

          <StatCard
            title="Top Business Type"
            value={stats.businessTypes[0]?._id || "—"}
            description={
              stats.businessTypes[0]
                ? `${stats.businessTypes[0].count} responses`
                : "No data"
            }
          />

          <StatCard
            title="Software Users"
            value={
              stats.usesSoftware[0]
                ? stats.usesSoftware[0]._id
                : "—"
            }
            description={
              stats.usesSoftware[0]
                ? `${stats.usesSoftware[0].count} responses`
                : "No data"
            }
          />

          <StatCard
            title="Preferred Device"
            value={
              stats.preferredDevice[0]
                ? stats.preferredDevice[0]._id
                : "—"
            }
            description={
              stats.preferredDevice[0]
                ? `${stats.preferredDevice[0].count} responses`
                : "No data"
            }
          />
        </section>

        {/* Business profile */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          <SurveyChart
            title="Business Types"
            data={stats.businessTypes}
          />

          <SurveyChart
            title="Years Operating"
            data={stats.yearsOperating}
          />

          <SurveyChart
            title="Employee Count"
            data={stats.employeeCount}
          />

          <SurveyChart
            title="Daily Sales Transactions"
            data={stats.dailyTransactions}
          />

        </section>

        {/* Business management */}
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Business Management
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">

            <SurveyChart
              title="How Businesses Record Sales"
              data={stats.salesRecording}
            />

            <SurveyChart
              title="Inventory Tracking"
              data={stats.inventoryTracking}
            />

            <SurveyChart
              title="Expense Tracking"
              data={stats.expenseTracking}
            />

            <SurveyChart
              title="Profit Calculation"
              data={stats.profitCalculation}
            />

          </div>
        </section>

        {/* Problems */}
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Problems Businesses Face
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">

            <SurveyChart
              title="Biggest Problems"
              data={stats.biggestProblems}
              horizontal
            />

            <SurveyChart
              title="Experienced Problems"
              data={stats.experiencedProblems}
              horizontal
            />

            <SurveyChart
              title="Inventory Problem Frequency"
              data={stats.inventoryProblemFrequency}
            />

            <SurveyChart
              title="Money Loss Frequency"
              data={stats.moneyLossFrequency}
            />

          </div>
        </section>

        {/* Product opportunity */}
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Product Opportunity
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">

            <SurveyChart
              title="Desired Features"
              data={stats.desiredFeatures}
              horizontal
            />

            <SurveyChart
              title="Dashboard Information Businesses Want"
              data={stats.dashboardInformation}
              horizontal
            />

            <SurveyChart
              title="Willingness to Pay"
              data={stats.willingToPay}
            />

            <SurveyChart
              title="Preferred Pricing Model"
              data={stats.pricingModel}
            />

            <SurveyChart
              title="Acceptable Price Range"
              data={stats.priceRange}
            />

            <SurveyChart
              title="Preferred Device"
              data={stats.preferredDevice}
            />

          </div>
        </section>

        {/* Review frequency */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          <SurveyChart
            title="How Frequently Businesses Review Performance"
            data={stats.reviewFrequency}
          />

          <SurveyChart
            title="Businesses Currently Using Software"
            data={stats.usesSoftware}
          />

        </section>

      </div>
    </main>
  );
}