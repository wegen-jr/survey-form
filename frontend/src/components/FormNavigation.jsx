export default function FormNavigation({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isLastStep,
  submitting,
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0 || submitting}
        className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={submitting}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting
          ? "Submitting..."
          : isLastStep
            ? "Submit Survey"
            : "Next"}
      </button>
    </div>
  );
}