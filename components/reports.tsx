        {/* Annual Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.annualTitle}</h2>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileText className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.report2025Title}</h3>
                <p className="text-gray-500 text-sm">{r.report2025Desc}</p>
              </div>
              <span className="ml-auto bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full">
                {isFr ? "Disponible" : "Available"}
              </span>
            </div>

            {/* PDF Previews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* French */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <span>🇫🇷</span>
                  <span className="text-sm font-medium text-gray-700">
                    {isFr ? "Version Française" : "French Version"}
                  </span>
                </div>
                <iframe
                  src="/rapport-2025-fr.pdf#toolbar=0&navpanes=0"
                  className="w-full h-64"
                  title="Rapport annuel 2025 FR"
                />
              </div>

              {/* English */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <span>🇬🇧</span>
                  <span className="text-sm font-medium text-gray-700">
                    {isFr ? "Version Anglaise" : "English Version"}
                  </span>
                </div>
                <iframe
                  src="/rapport-2025-en.pdf#toolbar=0&navpanes=0"
                  className="w-full h-64"
                  title="Annual Report 2025 EN"
                />
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/rapport-2025-fr.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {isFr ? "Télécharger (FR)" : "Download (FR)"}
              </a>
              <a
                href="/rapport-2025-en.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {isFr ? "Télécharger (EN)" : "Download (EN)"}
              </a>
            </div>
          </div>
        </div>
