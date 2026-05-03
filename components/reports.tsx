"use client"

import { useLanguage } from "@/lib/language-context"
import { FileText, Download, Calendar, BarChart3, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Reports() {
  const { t } = useLanguage()

  const annualReports = [
    {
      year: "2025",
      title: t.reports.report2025Title,
      desc: t.reports.report2025Desc,
      status: t.reports.statusComing,
      available: false,
    },
  ]

  const impactStats = [
    { icon: Users, value: "50+", label: t.reports.stat1 },
    { icon: Heart, value: "6", label: t.reports.stat2 },
    { icon: BarChart3, value: "2025", label: t.reports.stat3 },
  ]

  const reportTypes = [
    { emoji: "📊", title: t.reports.type1Title, desc: t.reports.type1Desc },
    { emoji: "💰", title: t.reports.type2Title, desc: t.reports.type2Desc },
    { emoji: "🌍", title: t.reports.type3Title, desc: t.reports.type3Desc },
    { emoji: "📸", title: t.reports.type4Title, desc: t.reports.type4Desc },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.reports.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.reports.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.reports.subtitle}
          </p>
        </div>

        {/* Impact Stats */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-3 gap-6">
            {impactStats.map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-serif text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Reports */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            {t.reports.annualTitle}
          </h3>
          <div className="space-y-4">
            {annualReports.map((report, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{report.year}</span>
                    </div>
                    <h4 className="font-serif font-bold text-foreground">{report.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{report.desc}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  {report.available ? (
                    <Button size="sm" className="bg-primary text-primary-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      {t.reports.download}
                    </Button>
                  ) : (
                    <span className="bg-secondary/20 text-secondary text-sm px-4 py-2 rounded-full font-medium">
                      {report.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Types */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            {t.reports.typesTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {reportTypes.map((type, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{type.emoji}</span>
                  <h4 className="font-serif font-bold text-foreground">{type.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Note */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-2xl mb-3">🔍</p>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t.reports.transparencyTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.reports.transparencyDesc}</p>
            <p className="text-sm text-muted-foreground">
              📧 <span className="font-medium text-foreground">azhaarlight@outlook.com</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
