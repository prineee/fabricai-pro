// src/components/AiResultCard.tsx

type Props = {
    result: string;
  };
  
  export default function AiResultCard({
    result,
  }: Props) {
    return (
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <h2 className="text-4xl font-black text-slate-900 mb-6">
          AI Garment Analysis
        </h2>
  
        <div className="bg-slate-50 border rounded-3xl p-8 overflow-auto max-h-[700px]">
          <pre className="whitespace-pre-wrap text-lg leading-9 text-slate-800">
            {result}
          </pre>
        </div>
      </div>
    );
  }