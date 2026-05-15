// ============================================================
// FICHIER 3 : app/don/page.tsx
// OÙ LE METTRE : Remplacez ENTIÈREMENT votre fichier existant
//   app/don/page.tsx  (ou pages/don.tsx selon votre structure)
// ============================================================

"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const AMOUNTS = [10, 25, 50, 100];

const CAUSES = [
  "🎒 Fournitures scolaires (orphelins)",
  "🏥 Soins médicaux (femmes vulnérables)",
  "🍽️ Aide alimentaire (personnes âgées)",
  "💡 Là où le besoin est le plus urgent",
  "🕌 Zakat & Sadaqah",
];

const IMPACT: Record<number, string> = {
  10: "Repas pour une famille pendant 3 jours",
  25: "Fournitures scolaires pour un enfant",
  50: "Consultation médicale complète",
  100: "Un mois de soutien pour un orphelin",
};

function DonPageContent() {
  const params = useSearchParams();
  const [amount, setAmount] = useState(25);
  const [cause, setCause] = useState(CAUSES[0]);
  const [method, setMethod] = useState<"paypal" | "moneygram" | "wu" | "zakat">("paypal");
  const [copied, setCopied] = useState(false);

  // Pré-remplir depuis le widget homepage
  useEffect(() => {
    const a = params.get("amount");
    const c = params.get("cause");
    const m = params.get("method");
    if (a && AMOUNTS.includes(Number(a))) setAmount(Number(a));
    if (c) setCause(decodeURIComponent(c));
    if (m && ["paypal","moneygram","wu","zakat"].includes(m))
      setMethod(m as "paypal" | "moneygram" | "wu" | "zakat");
  }, [params]);

  const copyEmail = () => {
    navigator.clipboard.writeText("azhaarlight@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const s: Record<string, React.CSSProperties> = {
    page:    { maxWidth: "700px", margin: "0 auto", padding: "2rem 1rem 4rem", fontFamily: "inherit" },
    title:   { fontSize: "clamp(22px,4vw,32px)", fontWeight: 700, color: "#1a3a2a", marginBottom: "6px" },
    sub:     { fontSize: "15px", color: "#555", marginBottom: "2rem" },
    section: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" },
    label:   { fontSize: "12px", fontWeight: 600, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.07em", marginBottom: "10px", display: "block" },
    amtBtn:  { borderRadius: "8px", padding: "8px 20px", fontSize: "16px", fontWeight: 500, cursor: "pointer", border: "1.5px solid #d1d5db", transition: "all 0.15s" },
    methBtn: { borderRadius: "10px", padding: "12px 8px", textAlign: "center" as const, cursor: "pointer", border: "1.5px solid #e5e7eb", background: "#fafafa", transition: "all 0.15s", flex: 1 },
    infoRow: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f3f4f6", fontSize: "14px" },
    cta:     { width: "100%", padding: "14px", background: "#1a3a2a", color: "#fff", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: 600, cursor: "pointer", marginTop: "1rem" },
  };

  return (
    <div style={s.page}>
      <h1 style={s.title}>Soutenez notre mission</h1>
      <p style={s.sub}>Chaque don, grand ou petit, transforme des vies au Burundi.</p>

      {/* Montant */}
      <div style={s.section}>
        <span style={s.label}>Choisissez un montant</span>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
          {AMOUNTS.map((a) => (
            <button
              key={a}
              onClick={() => setAmount(a)}
              style={{
                ...s.amtBtn,
                background: a === amount ? "#1a3a2a" : "#fff",
                color: a === amount ? "#fff" : "#1a3a2a",
                borderColor: a === amount ? "#1a3a2a" : "#d1d5db",
              }}
            >
              {a}€
            </button>
          ))}
        </div>
        {IMPACT[amount] && (
          <div style={{ fontSize: "13px", color: "#2d6a4f", background: "#f0fdf4", borderRadius: "6px", padding: "8px 12px" }}>
            💚 <strong>{amount}€</strong> = {IMPACT[amount]}
          </div>
        )}
      </div>

      {/* Cause */}
      <div style={s.section}>
        <span style={s.label}>Choisissez une cause</span>
        <select
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", background: "#fff" }}
        >
          {CAUSES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Méthode */}
      <div style={s.section}>
        <span style={s.label}>Méthode de paiement</span>
        <div style={{ display: "flex", gap: "8px", marginBottom: "1.25rem" }}>
          {[
            { id: "paypal", icon: "🅿️", label: "PayPal" },
            { id: "moneygram", icon: "💸", label: "MoneyGram" },
            { id: "wu", icon: "🌐", label: "Western Union" },
            { id: "zakat", icon: "🕌", label: "Zakat/Sadaqah" },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id as typeof method)}
              style={{
                ...s.methBtn,
                background: method === m.id ? "#f0fdf4" : "#fafafa",
                borderColor: method === m.id ? "#1a3a2a" : "#e5e7eb",
              }}
            >
              <span style={{ fontSize: "22px", display: "block" }}>{m.icon}</span>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#374151", display: "block", marginTop: "4px" }}>{m.label}</span>
            </button>
          ))}
        </div>

        {/* PayPal */}
        {method === "paypal" && (
          <div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Email PayPal</span><span style={{ fontWeight: 500 }}>azhaarlight@outlook.com</span></div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Montant</span><span style={{ fontWeight: 500 }}>{amount}€</span></div>
            <div style={{ ...s.infoRow, borderBottom: "none" }}><span style={{ color: "#6b7280" }}>Cause</span><span style={{ fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>{cause}</span></div>
            <button
              style={{ ...s.cta, background: "#003087" }}
              onClick={() => window.open(`https://www.paypal.me/azhaarlight/${amount}`, "_blank")}
            >
              Payer {amount}€ via PayPal ↗
            </button>
            <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "8px" }}>
              Ou envoyez directement à <strong>azhaarlight@outlook.com</strong> depuis votre app PayPal
            </p>
          </div>
        )}

        {/* MoneyGram */}
        {method === "moneygram" && (
          <div>
            <div style={{ background: "#fffbeb", border: "1px solid #fcd34d", borderRadius: "8px", padding: "12px 14px", marginBottom: "12px", fontSize: "13px", color: "#92400e" }}>
              ⚠️ Contactez-nous sur WhatsApp avant d'envoyer pour confirmer les détails.
            </div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Bénéficiaire</span><span style={{ fontWeight: 600 }}>Masumbuko Ntungwanayo</span></div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Pays</span><span style={{ fontWeight: 500 }}>Belgique</span></div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Ville</span><span style={{ fontWeight: 500 }}>Bruxelles</span></div>
            <div style={{ ...s.infoRow, borderBottom: "none" }}><span style={{ color: "#6b7280" }}>Montant à envoyer</span><span style={{ fontWeight: 600, color: "#1a3a2a" }}>{amount}€</span></div>
            <div style={{ borderTop: "1px solid #f3f4f6", marginTop: "10px", paddingTop: "10px", fontSize: "13px", color: "#555" }}>
              📩 Après le transfert, envoyez votre reçu à :<br />
              <strong>azhaarlight@outlook.com</strong>
              <button onClick={copyEmail} style={{ marginLeft: "8px", fontSize: "11px", padding: "2px 8px", borderRadius: "4px", border: "1px solid #d1d5db", cursor: "pointer", background: "#f9fafb" }}>
                {copied ? "Copié ✓" : "Copier"}
              </button>
              <br />ou WhatsApp 🇧🇪 <a href="https://wa.me/32470904620" style={{ color: "#25D366", fontWeight: 500 }}>+32 470 90 46 20</a>
            </div>
            <button
              style={{ ...s.cta, background: "#c8102e" }}
              onClick={() => window.open("https://www.moneygram.com", "_blank")}
            >
              Aller sur MoneyGram.com ↗
            </button>
          </div>
        )}

        {/* Western Union */}
        {method === "wu" && (
          <div>
            <div style={{ background: "#fffbeb", border: "1px solid #fcd34d", borderRadius: "8px", padding: "12px 14px", marginBottom: "12px", fontSize: "13px", color: "#92400e" }}>
              ⚠️ Contactez-nous sur WhatsApp avant d'envoyer pour confirmer les détails.
            </div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Bénéficiaire</span><span style={{ fontWeight: 600 }}>Masumbuko Ntungwanayo</span></div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Pays</span><span style={{ fontWeight: 500 }}>Belgique</span></div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Ville</span><span style={{ fontWeight: 500 }}>Bruxelles</span></div>
            <div style={{ ...s.infoRow, borderBottom: "none" }}><span style={{ color: "#6b7280" }}>Montant à envoyer</span><span style={{ fontWeight: 600, color: "#1a3a2a" }}>{amount}€</span></div>
            <div style={{ borderTop: "1px solid #f3f4f6", marginTop: "10px", paddingTop: "10px", fontSize: "13px", color: "#555" }}>
              📩 Après le transfert, envoyez votre reçu à :<br />
              <strong>azhaarlight@outlook.com</strong>
              <button onClick={copyEmail} style={{ marginLeft: "8px", fontSize: "11px", padding: "2px 8px", borderRadius: "4px", border: "1px solid #d1d5db", cursor: "pointer", background: "#f9fafb" }}>
                {copied ? "Copié ✓" : "Copier"}
              </button>
              <br />ou WhatsApp 🇧🇪 <a href="https://wa.me/32470904620" style={{ color: "#25D366", fontWeight: 500 }}>+32 470 90 46 20</a>
            </div>
            <button
              style={{ ...s.cta, background: "#FFDD00", color: "#000" }}
              onClick={() => window.open("https://www.westernunion.com", "_blank")}
            >
              Aller sur WesternUnion.com ↗
            </button>
          </div>
        )}

        {/* Zakat */}
        {method === "zakat" && (
          <div>
            <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "12px 14px", marginBottom: "12px", fontSize: "13px", color: "#166534" }}>
              🕌 Vos dons Zakat et Sadaqah sont utilisés pour les familles les plus vulnérables au Burundi, dans le respect des règles islamiques.
            </div>
            <div style={s.infoRow}><span style={{ color: "#6b7280" }}>Email PayPal</span><span style={{ fontWeight: 500 }}>azhaarlight@outlook.com</span></div>
            <div style={{ ...s.infoRow, borderBottom: "none" }}><span style={{ color: "#6b7280" }}>Remarque à ajouter</span><span style={{ fontWeight: 500 }}>Zakat / Sadaqah</span></div>
            <button
              style={{ ...s.cta, background: "#166534" }}
              onClick={() => window.open(`https://www.paypal.me/azhaarlight/${amount}`, "_blank")}
            >
              Faire ma Zakat/Sadaqah de {amount}€ ↗
            </button>
          </div>
        )}
      </div>

      {/* Impact */}
      <div style={{ ...s.section, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
        <span style={{ ...s.label, color: "#166534" }}>L'impact de votre don</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: "10px" }}>
          {Object.entries(IMPACT).map(([a, text]) => (
            <div key={a} style={{ textAlign: "center", padding: "10px 6px" }}>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#1a3a2a" }}>{a}€</div>
              <div style={{ fontSize: "12px", color: "#555", marginTop: "4px", lineHeight: 1.4 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{ textAlign: "center", fontSize: "13px", color: "#6b7280", marginTop: "1rem" }}>
        Une question ?{" "}
        <a href="https://wa.me/32470904620" style={{ color: "#25D366", fontWeight: 500 }}>WhatsApp 🇧🇪</a>{" "}
        ou{" "}
        <a href="https://wa.me/25767914387" style={{ color: "#25D366", fontWeight: 500 }}>WhatsApp 🇧🇮</a>
      </div>
    </div>
  );
}

export default function DonPage() {
  return (
    <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Chargement...</div>}>
      <DonPageContent />
    </Suspense>
  );
}
