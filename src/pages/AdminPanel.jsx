// ===============================================
// FILE: src/pages/AdminPanel.jsx
// COMPLETE PROFESSIONAL ADMIN PANEL
// ===============================================

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [affiliates, setAffiliates] = useState([]);
  const [history, setHistory] = useState([]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSales: 0,
    mrr: 0,
    aiGenerations: 0,
    affiliateCommission: 0,
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const userSnap = await getDocs(collection(db, "users"));
      const paymentSnap = await getDocs(collection(db, "payments"));
      const subscriptionSnap = await getDocs(
        collection(db, "subscriptions")
      );
      const affiliateSnap = await getDocs(
        collection(db, "affiliates")
      );
      const historySnap = await getDocs(
        collection(db, "ai_history")
      );

      const userData = userSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const paymentData = paymentSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const subscriptionData = subscriptionSnap.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      const affiliateData = affiliateSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const historyData = historySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      let totalSales = 0;
      paymentData.forEach((p) => {
        totalSales += Number(p.amount || 0);
      });

      let totalCommission = 0;
      affiliateData.forEach((a) => {
        totalCommission += Number(
          a.totalCommission || 0
        );
      });

      setUsers(userData);
      setPayments(paymentData);
      setSubscriptions(subscriptionData);
      setAffiliates(affiliateData);
      setHistory(historyData);

      setStats({
        totalUsers: userData.length,
        totalSales,
        mrr: totalSales,
        aiGenerations: historyData.length,
        affiliateCommission: totalCommission,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // =====================================
  // USER BAN
  // =====================================

  const banUser = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        banned: true,
      });

      alert("User Banned");

      fetchAllData();
    } catch (error) {
      console.log(error);
    }
  };

  // =====================================
  // CREATE COUPON
  // =====================================

  const createCoupon = async () => {
    if (!couponCode || !discount) {
      alert("Enter Coupon Details");
      return;
    }

    try {
      await addDoc(collection(db, "coupons"), {
        code: couponCode,
        discount,
        active: true,
        createdAt: new Date(),
      });

      alert("Coupon Created");

      setCouponCode("");
      setDiscount("");
    } catch (error) {
      console.log(error);
    }
  };

  // =====================================
  // MAIN UI
  // =====================================

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "10px",
        }}
      >
        FabricAI Admin Panel
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        SaaS Analytics & Management Dashboard
      </p>

      {/* STATS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Card
          title="Total Users"
          value={stats.totalUsers}
        />

        <Card
          title="Total Sales"
          value={`₹${stats.totalSales}`}
        />

        <Card
          title="MRR Revenue"
          value={`₹${stats.mrr}`}
        />

        <Card
          title="AI Generations"
          value={stats.aiGenerations}
        />

        <Card
          title="Affiliate Commission"
          value={`₹${stats.affiliateCommission}`}
        />
      </div>

      {/* COUPON SYSTEM */}

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      >
        <h2>Create Promo Coupon</h2>

        <input
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) =>
            setCouponCode(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Discount %"
          value={discount}
          onChange={(e) =>
            setDiscount(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={createCoupon}
          style={buttonStyle}
        >
          Create Coupon
        </button>
      </div>

      {/* USERS */}

      <SectionTitle title="Users" />

      <div style={tableStyle}>
        {users.map((user) => (
          <div key={user.id} style={rowStyle}>
            <div>
              <p>{user.email}</p>

              <small>
                Plan: {user.plan || "starter"}
              </small>
            </div>

            <button
              onClick={() => banUser(user.id)}
              style={dangerButton}
            >
              Ban User
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENTS */}

      <SectionTitle title="Payments" />

      <div style={tableStyle}>
        {payments.map((payment) => (
          <div key={payment.id} style={rowStyle}>
            <div>
              <p>{payment.paymentId}</p>

              <small>
                ₹{payment.amount}
              </small>
            </div>

            <span
              style={{
                color: "#22c55e",
              }}
            >
              {payment.status}
            </span>
          </div>
        ))}
      </div>

      {/* SUBSCRIPTIONS */}

      <SectionTitle title="Subscriptions" />

      <div style={tableStyle}>
        {subscriptions.map((sub) => (
          <div key={sub.id} style={rowStyle}>
            <div>
              <p>{sub.plan}</p>

              <small>
                {sub.currency} {sub.amount}
              </small>
            </div>

            <span>
              {sub.status}
            </span>
          </div>
        ))}
      </div>

      {/* AFFILIATES */}

      <SectionTitle title="Affiliates" />

      <div style={tableStyle}>
        {affiliates.map((a) => (
          <div key={a.id} style={rowStyle}>
            <div>
              <p>{a.email}</p>

              <small>
                Sales: {a.totalSales}
              </small>
            </div>

            <span>
              ₹{a.totalCommission}
            </span>
          </div>
        ))}
      </div>

      {/* AI HISTORY */}

      <SectionTitle title="AI History" />

      <div style={tableStyle}>
        {history.map((h) => (
          <div key={h.id} style={rowStyle}>
            <div>
              <p>{h.type}</p>

              <small>{h.prompt}</small>
            </div>

            <span>
              Generated
            </span>
          </div>
        ))}
      </div>

      {/* WARRIORPLUS / JVZOO */}

      <SectionTitle title="Affiliate Platforms" />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <PlatformCard
          title="WarriorPlus"
          text="Track affiliate sales from WarriorPlus"
        />

        <PlatformCard
          title="JVZoo"
          text="Track affiliate conversions from JVZoo"
        />
      </div>
    </div>
  );
}

// ===============================================
// COMPONENTS
// ===============================================

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "40px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h2
      style={{
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      {title}
    </h2>
  );
}

function PlatformCard({ title, text }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "20px",
        width: "300px",
      }}
    >
      <h2>{title}</h2>

      <p
        style={{
          color: "#94a3b8",
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ===============================================
// STYLES
// ===============================================

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "none",
  background: "#1e293b",
  color: "white",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "15px 30px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const dangerButton = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "#dc2626",
  color: "white",
  cursor: "pointer",
};

const tableStyle = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "20px",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #1e293b",
};