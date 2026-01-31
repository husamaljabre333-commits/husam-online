import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "السيرة الذاتية | محمد لؤي خليل الجابري",
  description: "السيرة الذاتية — محمد لؤي خليل الجابري",
  robots: { index: false, follow: false },
};

export default function MohammadCVPage() {
  return (
    <main className="min-h-screen bg-white text-black" dir="rtl">
      <style>{`
        /* خط طباعة عادي + غامق 100% */
        html, body {
          font-family: Arial, "Segoe UI", Tahoma, sans-serif !important;
          color: #000 !important;
          background: #fff !important;
          font-weight: 700 !important; /* غامق 100% */
        }

        @media print {
          @page { size: A4; margin: 12mm; }
          html { font-size: 16px; }   /* خط أوضح بالطباعة */
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          a { color: #000 !important; text-decoration: none !important; }
        }
      `}</style>

      {/* إطار A4 */}
      <div className="mx-auto px-4 py-10 print:px-0 print:py-0 print:max-w-none print:w-[210mm]">
        <section className="bg-white border border-black/15 rounded-none shadow-none print:border-black/25">
          <div className="p-8 md:p-10">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              {/* الصورة */}
              <div className="shrink-0">
                <div className="h-32 w-32 rounded border border-black/20 overflow-hidden">
                  <img
                    src="/cv/mohammad.jpeg"
                    alt="محمد لؤي خليل الجابري"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* معلومات */}
              <div className="flex-1">
                <h1 className="text-5xl leading-tight">محمد لؤي خليل الجابري</h1>
                <p className="mt-2 text-xl">
                  موظف خدمة عملاء • خبرة في مراكز الاتصال والإشراف التشغيلي
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
                  <div>العنوان: البلقاء – عين الباشا</div>
                  <div>الهاتف: 0787505252</div>
                  <div className="sm:col-span-2">
                    البريد:{" "}
                    <a href="mailto:Aljabremohammad92@gmail.com">
                      Aljabremohammad92@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* فاصل */}
            <div className="my-8 border-t border-black/20" />

            {/* محتوى */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* العمود الجانبي */}
              <aside className="lg:col-span-1 space-y-8">
                <section>
                  <h2 className="text-3xl mb-3">الملخص</h2>
                  <p className="text-lg leading-relaxed">
                    موظف خدمة عملاء بخبرة عملية ضمن شركة اتصالات أمنية (2019–2024)،
                    متمرس في استقبال المكالمات ومعالجة استفسارات وشكاوى العملاء وتقديم
                    حلول سريعة ودقيقة. يمتلك مهارات تواصل قوية، وقدرة على العمل تحت
                    الضغط، والالتزام بالإجراءات والمعايير التشغيلية. لديه خبرة إشرافية
                    سابقة في التدبير المنزلي وإدارة المهام اليومية.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl mb-3">المهارات</h2>
                  <ul className="text-lg list-disc pr-6 space-y-2">
                    <li>خدمة العملاء ومراكز الاتصال</li>
                    <li>التعامل مع الشكاوى وحل المشكلات</li>
                    <li>مهارات تواصل وإقناع قوية</li>
                    <li>إدارة الوقت والعمل تحت الضغط</li>
                    <li>الالتزام بالإجراءات والسياسات</li>
                    <li>إعداد التقارير والمتابعة</li>
                    <li>العمل ضمن فريق وتنسيق المهام</li>
                    <li>Microsoft Office + Excel (مستوى جيد)</li>
                    <li>أساسيات المحاسبة ومسك البيانات</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl mb-3">التعليم</h2>
                  <div className="border border-black/20 p-4">
                    <p className="text-lg">بكالوريوس محاسبة - جامعة عمّان العربية</p>
                    <p className="text-lg mt-1">التقدير: جيد</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl mb-3">الدورات</h2>
                  <ul className="text-lg list-disc pr-6 space-y-2">
                    <li>مهارات خدمة العملاء (Customer Service)</li>
                    <li>مهارات التواصل وإدارة الحوار</li>
                    <li>Microsoft Excel (مبتدئ–متوسط)</li>
                    <li>إدارة الوقت والعمل تحت الضغط</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl mb-3">اللغات</h2>
                  <p className="text-lg">العربية: اللغة الأم</p>
                  <p className="text-lg mt-1">الإنجليزية: متوسط</p>
                </section>
              </aside>

              {/* العمود الرئيسي */}
              <section className="lg:col-span-2">
                <h2 className="text-3xl mb-4">الخبرات العملية</h2>

                <div className="space-y-6">
                  <div className="border border-black/20 p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <h3 className="text-3xl">موظف خدمة عملاء - شركة اتصالات أمنية</h3>
                      <p className="text-lg">2019 — 2024</p>
                    </div>
                    <ul className="text-lg list-disc pr-6 mt-3 space-y-2">
                      <li>استقبال مكالمات العملاء وتقديم الدعم والمعلومات بشكل احترافي.</li>
                      <li>معالجة الاستفسارات والشكاوى وتقديم حلول سريعة ضمن السياسات.</li>
                      <li>توثيق البيانات على النظام والمتابعة مع الجهات المختصة عند الحاجة.</li>
                      <li>الحفاظ على رضا العملاء عبر أسلوب تواصل فعّال وإدارة حوار هادئة.</li>
                      <li>الالتزام بمعايير الخصوصية والجودة وإجراءات العمل اليومية.</li>
                    </ul>
                  </div>

                  <div className="border border-black/20 p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <h3 className="text-3xl">مشرف تدبير منزلي</h3>
                      <p className="text-lg">2016 — 2017</p>
                    </div>
                    <ul className="text-lg list-disc pr-6 mt-3 space-y-2">
                      <li>الإشراف على سير العمل اليومي وتوزيع المهام ومتابعة الإنجاز.</li>
                      <li>ضمان الالتزام بمعايير النظافة والسلامة وجودة الخدمة.</li>
                      <li>تنظيم جدول العمل وحل الملاحظات التشغيلية بالتعاون مع الفريق.</li>
                    </ul>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
