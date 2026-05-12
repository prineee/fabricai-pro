// src/pages/Library.tsx

export default function Library() {
    const garments = [
      "Formal Shirt",
      "Trouser",
      "Hoodie",
      "Dress",
      "Pajama",
      "Salwar",
    ];
  
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black mb-4">
          Garment Library
        </h1>
  
        <p className="text-slate-500 text-xl mb-10">
          Saved techpacks and AI
          production analyses.
        </p>
  
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {garments.map((item) => (
            <div
              key={item}
              className="bg-white border rounded-3xl p-8 shadow-sm"
            >
              <div className="h-52 bg-slate-100 rounded-2xl mb-6"></div>
  
              <h2 className="text-3xl font-black">
                {item}
              </h2>
  
              <p className="text-slate-500 mt-3">
                AI ERP analysis saved.
              </p>
  
              <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl font-bold">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }