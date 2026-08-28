import { useEffect, useState } from "react";
import ResponseTable from "../components/ResponseTable";
const API_URL = "https://survey-form-soeh.onrender.com";

export default function AdminResponses() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchResponses = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/admin/responses`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to load responses"
        );
      }

      setResponses(data.responses || []);
    } catch (error) {
      console.error("Responses error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">
          Loading responses...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-600">{error}</p>

          <button
            onClick={fetchResponses}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm text-white"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Survey Responses
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View individual responses submitted by business owners.
          </p>
        </div>

        {responses.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="text-gray-500">
              No survey responses yet.
            </p>
          </div>
        ) : (
          <ResponseTable responses={responses} />
        )}

      </div>
    </main>
  );
}