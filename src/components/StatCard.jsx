const StatCard = ({ title, value }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-zinc-400 text-sm">
        {title}
      </h2>

      <p className="text-3xl font-bold text-white mt-2">
        {value}
      </p>
    </div>
  );
};

export default StatCard;