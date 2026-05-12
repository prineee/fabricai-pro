// src/components/StatsCard.tsx

type Props = {
    title: string;
    value: string;
  };
  
  export default function StatsCard({
    title,
    value,
  }: Props) {
    return (
      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <p className="text-slate-500 text-lg">
          {title}
        </p>
  
        <h2 className="text-5xl font-black text-emerald-600 mt-5">
          {value}
        </h2>
      </div>
    );
  }