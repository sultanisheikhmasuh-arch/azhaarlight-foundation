"use client"

import { useLanguage } from "@/lib/language-context"
import { Heart, Building2, Smartphone, Star } from "lucide-react"

export function Don() {
  const { t } = useLanguage()
  const d = t.don

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">{d.sectionLabel}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{d.title}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">{d.subtitle}</p>
        </div>

        {/* PayPal */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">PayPal</h2>
              <p className="text-gray-500 text-sm">{d.paypalDesc}</p>
            </div>
          </div>
          <a
            href="https://www.paypal.com/donate?business=azhaarlight%40outlook.com&currency_code=EUR&item_name=AzhaarLight+Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Heart className="w-5 h-5" /> {d.donateNow}
          </a>
        </div>

        {/* Virement bancaire */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Building2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{d.bankTitle}</h2>
              <p className="text-gray-500 text-sm">{d.bankDesc}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{d.bankName}</span>
              <span className="font-medium text-gray-900">AzhaarLight Foundation</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-gray-900">azhaarlight@outlook.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">WhatsApp</span>
              <span className="font-medium text-gray-900">+32 470 90 46 20</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-3">{d.bankContact}</p>
        </div>

        {/* Western Union / MoneyGram */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <Smartphone className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Western Union / MoneyGram</h2>
              <p className="text-gray-500 text-sm">{d.wuDesc}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{d.recipient}</span>
              <span className="font-medium text-gray-900">Masumbuko Nt. HAMIM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{d.country}</span>
              <span className="font-medium text-gray-900">Burundi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{d.city}</span>
              <span className="font-medium text-gray-900">Bujumbura</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-3">{d.wuContact}</p>
        </div>

        {/* Zakat / Sadaqah */}
        <div className="bg-emerald-700 rounded-2xl p-8 text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-7 h-7 text-emerald-200" />
            <h2 className="text-xl font-bold">Zakat & Sadaqah</h2>
          </div>
          <p className="text-emerald-100 mb-4">{d.zakatDesc}</p>
          <a
            href="https://www.paypal.com/donate?business=azhaarlight%40outlook.com&currency_code=EUR&item_name=Zakat+AzhaarLight+Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            <Heart className="w-4 h-4" /> {d.donateNow}
          </a>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{d.impactTitle}</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold text-emerald-600">10€</div>
              <div className="text-gray-500 text-sm mt-1">{d.impact1}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">25€</div>
              <div className="text-gray-500 text-sm mt-1">{d.impact2}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">50€</div>
              <div className="text-gray-500 text-sm mt-1">{d.impact3}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
