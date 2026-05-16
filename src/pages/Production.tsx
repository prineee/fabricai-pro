export default function Production() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black">
          Production Planning
        </h1>
  
        <p className="text-slate-500 text-xl mt-3">
          AI factory production management.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-3xl p-8 border">
            <p className="text-slate-500">
              Active Orders
            </p>
  
            <h2 className="text-6xl font-black text-emerald-600 mt-5">
              67
            </h2>
          </div>
  
          <div className="bg-white rounded-3xl p-8 border">
            <p className="text-slate-500">
              Production Lines
            </p>
  
            <h2 className="text-6xl font-black text-blue-600 mt-5">
              12
            </h2>
          </div>
  
          <div className="bg-white rounded-3xl p-8 border">
            <p className="text-slate-500">
              Efficiency
            </p>
  
            <h2 className="text-6xl font-black text-orange-500 mt-5">
              91%
            </h2>
          </div>
        </div>
  
        <div className="bg-white rounded-3xl border mt-10 p-8">
          <h2 className="text-3xl font-black mb-8">
            AI Production Status
          </h2>
  
          <div className="space-y-5 text-lg">
            <div className="flex justify-between">
              <span>
                Shirt Production
              </span>
  
              <span className="text-emerald-600 font-bold">
                Running
              </span>
            </div>
  
            <div className="flex justify-between">
              <span>
                Trouser Line
              </span>
  
              <span className="text-blue-600 font-bold">
                Planning
              </span>
            </div>
  
            <div className="flex justify-between">
              <span>
                Hoodie Batch
              </span>
  
              <span className="text-orange-500 font-bold">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }