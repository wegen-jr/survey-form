import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import FormNavigation from "../components/FormNavigation";
import { submitSurvey } from "../services/SurveyApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Survey() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  /*
    Only questions whose conditions are satisfied
    are included in the current form.
  */
  const visibleQuestions = useMemo(() => {
    return questions.filter((question) => {
      if (!question.showWhen) {
        return true;
      }

      return question.showWhen(formData);
    });
  }, [formData]);

  /*
    If an answer changes and causes a conditional question
    to disappear, make sure currentStep doesn't point
    outside the visible questions.
  */
  useEffect(() => {
    if (currentStep >= visibleQuestions.length) {
      setCurrentStep(visibleQuestions.length - 1);
    }
  }, [currentStep, visibleQuestions.length]);

  const currentQuestion = visibleQuestions[currentStep];

  if (!currentQuestion) {
    return null;
  }

  const currentValue = formData[currentQuestion.id];

  const handleAnswer = (value) => {
    setFormData((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));

    setError("");
  };

  const validateCurrentQuestion = () => {
    if (currentQuestion.type === "multiple") {
      return (
        Array.isArray(currentValue) &&
        currentValue.length > 0
      );
    }

    if (currentQuestion.type === "text") {
      return (
        typeof currentValue === "string" &&
        currentValue.trim().length > 0
      );
    }

    return Boolean(currentValue);
  };

  const handleNext = async () => {
    if (!validateCurrentQuestion()) {
      setError(
        "Please answer this question before continuing."
      );

      return;
    }

    setError("");

    if (currentStep < visibleQuestions.length - 1) {
      setCurrentStep((previous) => previous + 1);

      return;
    }

    try {
      setSubmitting(true);

      await submitSurvey(formData);
        toast.success('submitted successfully.')
      navigate("/thank-you");
    } catch (error) {
      console.error("Survey submission failed:", error);

        toast.error(
            error.message ||
            "Something went wrong while submitting your response."
        );
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((previous) => previous - 1);
    setError("");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Small Business Research
          </h1>

          <p className="mt-2 leading-relaxed text-gray-600">
            Help us understand the real challenges small
            businesses face when managing their daily
            operations.
          </p>
        </div>

        {/* Progress */}
        <ProgressBar
          current={currentStep + 1}
          total={visibleQuestions.length}
        />

        {/* Question card */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <Question
            question={currentQuestion}
            value={currentValue}
            onChange={handleAnswer}
          />

          {error && (
            <p className="mt-4 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <FormNavigation
            currentStep={currentStep}
            totalSteps={visibleQuestions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLastStep={
              currentStep === visibleQuestions.length - 1
            }
            submitting={submitting}
          />
        </div>
      </div>
    </main>
  );
}