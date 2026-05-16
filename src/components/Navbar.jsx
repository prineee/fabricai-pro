const Navbar = () => {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold">
          Enterprise Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          N
        </div>
      </div>
    </div>
  );
};

export default Navbar;