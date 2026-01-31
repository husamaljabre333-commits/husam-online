import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "السيرة الذاتية | محمد لؤي خليل الجابري",
  description: "السيرة الذاتية — محمد لؤي خليل الجابري",
  robots: { index: false, follow: false }, // عشان ما تنفهرس (اختياري)
};

export default function MohammadCVPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* مساحة مريحة للطباعة */}
      <div className="mx-auto max-w-4xl px-4 py-10 print:px-0 print:py-0">
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm print:shadow-none print:border-transparent">
          <div className="p-8 md:p-10 print:p-0">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              {/* الصورة */}
              <div className="shrink-0">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-2xl overflow-hidden border border-slate-200">
                  <img
                    src="/cv/mohammad.jpeg"
                    alt="محمد لؤي خليل الجابري"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* معلومات أساسية */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  محمد لؤي خليل الجابري
                </h1>
                <p className="mt-2 text-lg text-slate-700">
                  موظف خدمة عملاء • خبرة في مراكز الاتصال والإشراف التشغيلي
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  <div>
                    <span className="text-slate-500">العنوان:</span>{" "}
                    البلقاء – عين الباشا
                  </div>
                  <div>
                    <span className="text-slate-500">الهاتف:</span>{" "}
                    0787505252
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">البريد:</span>{" "}
                    <a
                      className="underline underline-offset-2"
                      href="mailto:Aljabremohammad92@gmail.com"
                    >
                      Aljabremohammad92@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* خط فاصل */}
            <div className="my-8 border-t border-slate-200" />

            {/* BODY */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* العمود اليمين/اليسار حسب الشاشة */}
              <aside className="lg:col-span-1 space-y-8">
                {/* ملخص */}
                <section>
                  <h2 className="text-base font-semibold tracking-wide text-slate-900">
                    الملخص
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-700 text-sm">
                    موظف خدمة عملاء بخبرة عملية ضمن شركة اتصالات أمنية (2019–2024)،
                    متمرس في استقبال المكالمات ومعالجة استفسارات وشكاوى العملاء وتقديم
                    حلول سريعة ودقيقة. يمتلك مهارات تواصل قوية، وقدرة على العمل تحت
                    الضغط، والالتزام بالإجراءات والمعايير التشغيلية. لديه خبرة إشرافية
                    سابقة في التدبير المنزلي وإدارة المهام اليومية.
                  </p>
                </section>

                {/* المهارات */}
                <section>
                  <h2 className="text-base font-semibold tracking-wide text-slate-900">
                    المهارات
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "خدمة العملاء ومراكز الاتصال",
                      "التعامل مع الشكاوى وحل المشكلات",
                      "مهارات تواصل وإقناع",
                      "العمل تحت الضغط وإدارة الوقت",
                      "الالتزام بالإجراءات والسياسات",
                      "إعداد تقارير ومتابعة",
                      "العمل ضمن فريق",
                      "إشراف تشغيلي وتوزيع مهام",
                      "Microsoft Office",
                      "Excel (مستوى جيد)",
                      "أساسيات المحاسبة",
                    ].map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </section>

                {/* التعليم */}
                <section>
                  <h2 className="text-base font-semibold tracking-wide text-slate-900">
                    التعليم
                  </h2>
                  <div className="mt-4 rounded-xl border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900 text-sm">
                      بكالوريوس محاسبة — جامعة عمّان العربية
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      التقدير: جيد
                    </p>
                  </div>
                </section>

                {/* الدورات */}
                <section>
                  <h2 className="text-base font-semibold tracking-wide text-slate-900">
                    الدورات
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li className="rounded-xl border border-slate-200 p-3">
                      مهارات خدمة العملاء (Customer Service)
                    </li>
                    <li className="rounded-xl border border-slate-200 p-3">
                      مهارات التواصل وإدارة الحوار
                    </li>
                    <li className="rounded-xl border border-slate-200 p-3">
                      Microsoft Excel (مبتدئ–متوسط)
                    </li>
                    <li className="rounded-xl border border-slate-200 p-3">
                      إدارة الوقت والعمل تحت الضغط
                    </li>
                  </ul>
                </section>

                {/* اللغات */}
                <section>
                  <h2 className="text-base font-semibold tracking-wide text-slate-900">
                    اللغات
                  </h2>
                  <div className="mt-4 rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
                    <p>العربية: اللغة الأم</p>
                    <p className="mt-1">الإنجليزية: متوسط</p>
                  </div>
                </section>
              </aside>

              {/* الخبرات */}
              <section className="lg:col-span-2">
                <h2 className="text-base font-semibold tracking-wide text-slate-900">
                  الخبرات العملية
                </h2>

                <div className="mt-4 space-y-6">
                  <div className="rounded-2xl border border-slate-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          موظف خدمة عملاء — شركة اتصالات أمنية
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          مركز اتصال • دعم عملاء • متابعة بلاغات
                        </p>
                      </div>
                      <p className="text-sm text-slate-500">2019 — 2024</p>
                    </div>

                    <ul className="mt-4 list-disc pr-5 space-y-2 text-sm text-slate-700">
                      <li>
                        استقبال مكالمات العملاء وتقديم معلومات ودعم باحترافية وجودة عالية.
                      </li>
                      <li>
                        معالجة الاستفسارات والشكاوى وتقديم حلول سريعة ضمن السياسات المعتمدة.
                      </li>
                      <li>
                        توثيق البيانات بدقة على النظام والمتابعة مع الجهات المختصة عند الحاجة.
                      </li>
                      <li>
                        الحفاظ على رضا العملاء عبر أسلوب تواصل فعّال وإدارة الحوار بهدوء.
                      </li>
                      <li>
                        الالتزام بمعايير الخصوصية والجودة وإجراءات العمل اليومية.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          مشرف تدبير منزلي
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          إشراف وتشغيل • تنظيم مهام • جودة وسلامة
                        </p>
                      </div>
                      <p className="text-sm text-slate-500">2016 — 2017</p>
                    </div>

                    <ul className="mt-4 list-disc pr-5 space-y-2 text-sm text-slate-700">
                      <li>الإشراف على سير العمل اليومي وتوزيع المهام ومتابعة الإنجاز.</li>
                      <li>ضمان الالتزام بمعايير النظافة والسلامة وجودة الخدمة.</li>
                      <li>تنظيم جدول العمل وحل الملاحظات التشغيلية بالتعاون مع الفريق.</li>
                    </ul>
                  </div>
                </div>

                {/* ملاحظة نهاية */}
                <div className="mt-8 text-xs text-slate-500">
                  هذه السيرة الذاتية تم إعدادها بصيغة مناسبة للطباعة على ورقة A4.
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
