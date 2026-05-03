"use client"

import { useLanguage } from "@/lib/language-context"
import { FileText, Download, BarChart3, Camera, TrendingUp, Shield } from "lucide-react"

export function Reports() {
  const { t } = useLanguage()
  const r = t.reports

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">
            {r.sectionLabel}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{r.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{r.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">50+</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat1}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">6</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat2}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">2025</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat3}</div>
          </div>
        </div>

        {/* Annual Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.annualTitle}</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileText className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.report2025Title}</h3>
                <p className="text-gray-500 text-sm">{r.report2025Desc}</p>
              </div>
            </div>
            <span className="bg-amber-100 text-amber-700 text-sm font-medium px-4 py-2 rounded-full">
              {r.statusComing}
            </span>
          </div>
        </div>

        {/* Types of Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.typesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, title: r.type1Title, desc: r.type1Desc },
              { icon: <BarChart3 className="w-5 h-5" />, title: r.type2Title, desc: r.type2Desc },
              { icon: <Shield className="w-5 h-5" />, title: r.type3Title, desc: r.type3Desc },
              { icon: <Camera className="w-5 h-5" />, title: r.type4Title, desc: r.type4Desc },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency */}
        <div className="bg-emerald-700 rounded-xl p-8 text-white text-center">
          <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">{r.transparencyTitle}</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">{r.transparencyDesc}</p>
        </div>
      </div>
    </section>
  )
}
