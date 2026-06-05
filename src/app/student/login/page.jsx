export default function StudentLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Student Login
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}