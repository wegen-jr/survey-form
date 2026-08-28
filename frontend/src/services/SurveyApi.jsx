const API_URL = "http://localhost:5000/api/surveys";

export const submitSurvey = async (formData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        "Failed to submit survey"
    );
  }

  return data;
};