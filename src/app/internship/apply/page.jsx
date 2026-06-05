export default function InternshipApply() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Internship Application Form
      </h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full border p-4 rounded-xl"
        />

        <select className="w-full border p-4 rounded-xl">
          <option>Select Domain</option>
          <option>Education</option>
          <option>Healthcare</option>
          <option>Social Work</option>
          <option>Digital Marketing</option>
          <option>Psychology</option>
        </select>

        <button
          className="
          bg-gradient-to-r
          from-amber-400
          to-yellow-600
          px-8 py-4
          rounded-xl
          font-bold
          "
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}