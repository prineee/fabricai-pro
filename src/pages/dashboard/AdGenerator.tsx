import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function AdGenerator() {

  const [product, setProduct] =
    useState("");

  const [audience, setAudience] =
    useState("");

  const [result, setResult] =
    useState("");

  function generateAd() {

    setResult(
`🔥 ${product}

Perfect for ${audience}

✅ High Quality
✅ Affordable
✅ AI Powered

Buy Now & Transform Your Business Today.`
    );
  }

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        AI Ad Generator
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      >

        <input
          placeholder="Product Name"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Target Audience"
          value={audience}
          onChange={(e) =>
            setAudience(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={generateAd}
          style={{
            padding: "16px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Generate Ad Copy
        </button>

      </div>

      {
        result && (
          <div
            style={{
              marginTop: "30px",
              background: "#0f172a",
              padding: "35px",
              borderRadius: "20px",
              border:
                "1px solid #1e293b",
              whiteSpace: "pre-wrap",
              lineHeight: "1.9",
            }}
          >
            {result}
          </div>
        )
      }

    </DashboardLayout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#ffffff",
  color: "#000000",
  fontSize: "16px",
  outline: "none",
};