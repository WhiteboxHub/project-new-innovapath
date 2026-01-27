'use client';

export default function UnsubscribeSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl w-full text-center">

        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          You’re Unsubscribed
        </h1>

        <p className="text-lg text-slate-600">
          You will not receive any more emails from us.
        </p>

        <p className="text-sm text-slate-500 mt-4">
          Changes may take up to 24 hours to reflect.
        </p>

      </div>
    </main>
  );
}
