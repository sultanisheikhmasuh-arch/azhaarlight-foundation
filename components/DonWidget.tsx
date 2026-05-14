// ============================================================
// FICHIER 2 : components/DonWidget.tsx
// OÙ LE METTRE : src/components/DonWidget.tsx
// COMMENT L'UTILISER : Importez-le dans app/page.tsx (homepage)
//   et placez <DonWidget /> juste après votre section hero
// ============================================================

"use client";
import { useState } from "react";

const AMOUNTS = [10, 25, 50, 100];

const CAUSES = [
  "🎒 Fournitures scolaires (orphelins)",
  "🏥 Soins médicaux (femmes vulnérables)",
  "🍽️ Aide alimentaire (personnes âgées)",
  "💡 Là où le besoin est le plus urgent",
];

const METHODS = [
  { id: "paypal", label: "PayPal", icon: "🅿️" },
  { id: "moneygram", label: "MoneyGram", icon: "💸" },
  { id: "wu", label: "Western Union", icon: "🌐" },
];

export default function DonWidget() {
  const [amount, setAmount] = useState(25);
  const [cause, setCause] = useState(CAUSES[0]);
  const [method, setMethod] = useState("paypal");

  const handleDon = () => {
    if (method === "paypal") {
      window.open(
        `https://www.paypal.me/azhaarlight/${amount}`,
        "_blank"
      );
    } else {
      // Redirige vers la page /don avec les paramètres pré-remplis
      window.location.href = `/don?method=${method}&amount=${amount}&cause=${encodeURIComponent(cause)}`;
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 100%)",
        borderRadius: "16px",
        padding: "1.75rem",
        color: "#fff",
        maxWidth: "480px",
        margin: "2rem auto",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: 600, margin: "0 0 4px" }}>
        Faire un don maintenant
      </h2>
      <p style={{ fontSize: "13px", opacity: 0.75, margin: "0 0 1.25rem" }}>
        Chaque euro change une vie au Burundi
      </p>

      {/* Montants */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
        {AMOUNTS.map((a) => (
          <button
            key={a}
            onClick={() => setAmount(a)}
            style={{
              background: a === amount ? "#fff" : "rgba(255,255,255,0.12)",
              color: a === amount ? "#1a3a2a" : "#fff",
              border: `1.5px solid ${a === amount ? "#fff" : "rgba(255,255,255,0.25)"}`,
              borderRadius: "8px",
              padding: "7px 18px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {a}€
          </button>
        ))}
      </div>

      {/* Cause */}
      <select
        value={cause}
        onChange={(e) => setCause(e.target.value)}
        style={{
          width: "100%",
          padding: "9px 12px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.12)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.25)",
          fontSize: "13px",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      >
        {CAUSES.map((c) => (
          <option key={c} value={c} style={{ background: "#1a3a2a" }}>
            {c}
          </option>
        ))}
      </select>

      {/* Méthode de paiement */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "1.25rem" }}>
        {METHODS.map((m) => (
          <button
            key={m.id}
            onClick={() => setMethod(m.id)}
            style={{
              background: method === m.id ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
              border: `1.5px solid ${method === m.id ? "#fff" : "rgba(255,255,255,0.2)"}`,
              borderRadius: "8px",
              padding: "10px 6px",
              color: "#fff",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: "20px", display: "block" }}>{m.icon}</span>
            <span style={{ fontSize: "11px", fontWeight: 500, display: "block", marginTop: "3px" }}>
              {m.label}
            </span>
          </button>
        ))}
      </div>

      {/* Infos virement (MoneyGram / WU) */}
      {method !== "paypal" && (
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            borderLeft: "3px solid rgba(255,255,255,0.5)",
            padding: "10px 14px",
            fontSize: "13px",
            marginBottom: "1.25rem",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ display: "block", marginBottom: "4px" }}>
            Instructions {method === "moneygram" ? "MoneyGram" : "Western Union"}
          </strong>
          <div>👤 Bénéficiaire : <strong>Masumbuko Ntungwanayo</strong></div>
          <div>🌍 Pays : <strong>Belgique</strong> — Ville : <strong>Bruxelles</strong></div>
          <div style={{ marginTop: "6px", opacity: 0.75, fontSize: "12px" }}>
            Après le transfert, envoyez votre reçu à :<br />
            <strong>azhaarlight@outlook.com</strong> ou WhatsApp 🇧🇪 +32 470 90 46 20
          </div>
        </div>
      )}

      {/* Bouton CTA */}
      <button
        onClick={handleDon}
        style={{
          width: "100%",
          padding: "12px",
          background: "#fff",
          color: "#1a3a2a",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.15s",
        }}
        onMouseOver={(e) => ((e.target as HTMLButtonElement).style.background = "#e8f5e9")}
        onMouseOut={(e) => ((e.target as HTMLButtonElement).style.background = "#fff")}
      >
        {method === "paypal"
          ? `Faire un don de ${amount}€ via PayPal ↗`
          : `Voir les instructions ${method === "moneygram" ? "MoneyGram" : "Western Union"}`}
      </button>

      <p style={{ fontSize: "11px", opacity: 0.55, textAlign: "center", marginTop: "10px", marginBottom: 0 }}>
        🔒 Paiement sécurisé · 100% pour les bénéficiaires
      </p>
    </section>
  );
}
