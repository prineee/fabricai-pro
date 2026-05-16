export default function Library() {
    const garments = [
      {
        name: "Formal Shirt",
        image:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      },
  
      {
        name: "Hoodie",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      },
  
      {
        name: "Trouser",
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      },
  
      {
        name: "Dress",
        image:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      },
    ];
  
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black">
          Garment Library
        </h1>
  
        <p className="text-slate-500 text-xl mt-3">
          AI-ready garment database.
        </p>
  
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
          {garments.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border"
            >
              <img
                src={item.image}
                className="h-80 w-full object-cover"
              />
  
              <div className="p-6">
                <h2 className="text-2xl font-black">
                  {item.name}
                </h2>
  
                <button className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl font-bold">
                  Open Garment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }