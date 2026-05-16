const StatCard = ({ title, value }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-zinc-400 text-lg mb-2">
        {title}
      </h3>

      <h1 className="text-4xl font-bold">
        {value}
      </h1>
    </div>
  );
};

export default StatCard;