export default async function CertificatePage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

return ( <main className="min-h-screen bg-gray-100 py-20">

  <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

    <div className="text-center">

      <img
        src="/logo/logo.png"
        alt="AJF Logo"
        className="h-24 mx-auto"
      />

      <h1 className="text-4xl font-bold text-green-700 mt-6">
        Certificate Verified
      </h1>

      <p className="mt-4 text-gray-600">
        Anand Jivan Foundation Trust
      </p>

    </div>

    <div className="mt-12 space-y-4">

      <p>
        <strong>Certificate ID:</strong> {id}
      </p>

      <p>
        <strong>Name:</strong> Barun Kumar Mahto
      </p>

      <p>
        <strong>Type:</strong> Experience Certificate
      </p>

      <p>
        <strong>Status:</strong>
        <span className="text-green-600 font-bold">
          Verified
        </span>
      </p>

      <p>
        <strong>Issued By:</strong>
        Anand Jivan Foundation Trust
      </p>

    </div>

  </div>

</main>

);
}


