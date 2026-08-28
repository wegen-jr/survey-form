import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SurveyChart({
  title,
  data = [],
  horizontal = false,
}) {
  const chartData = data.map((item) => ({
    name: item._id || "Unknown",
    count: item.count,
  }));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      {chartData.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-gray-500">
          No data available
        </div>
      ) : (
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout={horizontal ? "vertical" : "horizontal"}
              margin={{
                top: 10,
                right: 20,
                left: horizontal ? 50 : 0,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              {horizontal ? (
                <>
                  <XAxis type="number" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                  />
                </>
              ) : (
                <>
                  <XAxis
                    dataKey="name"
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                    height={80}
                  />
                  <YAxis allowDecimals={false} />
                </>
              )}

              <Tooltip />

              <Bar
                dataKey="count"
                name="Responses"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}