export default function Question({
  question,
  value,
  onChange,
}) {
  const handleMultipleChange = (option) => {
    const currentValues = Array.isArray(value) ? value : [];

    if (currentValues.includes(option)) {
      onChange(
        currentValues.filter((item) => item !== option)
      );

      return;
    }

    if (
      question.maxSelections &&
      currentValues.length >= question.maxSelections
    ) {
      return;
    }

    onChange([...currentValues, option]);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold leading-relaxed text-gray-900">
          {question.question}
        </h2>

        {question.type === "multiple" && (
          <p className="mt-2 text-sm text-gray-500">
            Select all that apply
            {question.maxSelections &&
              ` • Maximum ${question.maxSelections}`}
          </p>
        )}
      </div>

      {/* Single choice */}
      {question.type === "single" && (
        <div className="space-y-3">
          {question.options.map((option) => {
            const selected = value === option;

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                  selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={selected}
                  onChange={() => onChange(option)}
                  className="h-4 w-4"
                />

                <span className="text-gray-800">
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Multiple choice */}
      {question.type === "multiple" && (
        <div className="space-y-3">
          {question.options.map((option) => {
            const selected =
              Array.isArray(value) &&
              value.includes(option);

            const limitReached =
              question.maxSelections &&
              Array.isArray(value) &&
              value.length >= question.maxSelections &&
              !selected;

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                  selected
                    ? "border-blue-600 bg-blue-50"
                    : limitReached
                      ? "cursor-not-allowed opacity-50"
                      : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  disabled={limitReached}
                  onChange={() =>
                    handleMultipleChange(option)
                  }
                  className="h-4 w-4 rounded"
                />

                <span className="text-gray-800">
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Text answer */}
      {question.type === "text" && (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Please tell us..."
          rows={5}
          className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      )}
    </div>
  );
}