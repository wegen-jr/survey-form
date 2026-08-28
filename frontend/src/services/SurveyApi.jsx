const API_URL = import.meta.env.VITE_API_URL;
export const submitSurvey = async (formData) => {
  const response = await fetch(`${API_URL}/api/surveys`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const text = await response.text();

  console.log("Backend status:", response.status);
  console.log("Backend response:", text);

  if (!response.ok) {
    throw new Error(
      text || `Request failed with status ${response.status}`
    );
  }

  // Parse only if the backend actually returned JSON
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      "Server returned an invalid response."
    );
  }
};