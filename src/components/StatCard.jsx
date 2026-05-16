const StatCard = ({ title, value }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-zinc-400 text-lg mb-4">
        {title}
      </h2>

      <p className="text-5xl font-bold text-white">
        {value}
      </p>
    </div>
  );
};

export default StatCard;