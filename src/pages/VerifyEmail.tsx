export default function VerifyEmail() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-16 rounded-[40px] shadow-xl max-w-2xl">
          <h1 className="text-5xl font-bold">
            Verify Your Email
          </h1>
  
          <p className="mt-8 text-2xl text-slate-600 leading-10">
            We sent a verification link to your
            email address.
          </p>
  
          <div className="mt-10 bg-emerald-50 border border-emerald-200 p-8 rounded-3xl">
            <p className="text-emerald-700 text-xl leading-9">
              Please check your inbox and click
              the verification link to activate
              your FabricAI ERP account.
            </p>
          </div>
        </div>
      </div>
    );
  }