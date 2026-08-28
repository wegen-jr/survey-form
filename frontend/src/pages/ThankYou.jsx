export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Thank You!
        </h1>

        <p className="mt-4 text-gray-600">
          Your response has been submitted successfully.
          Your feedback will help us understand the real
          challenges faced by small businesses.
        </p>
      </div>
    </main>
  );
}