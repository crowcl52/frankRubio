import { useLanguage } from '../contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t.familyBasicTitle,
      price: '$210',
      features: [t.familyBasic1, t.familyBasic2, t.familyBasic3, t.familyBasic4],
      cta: t.bookSession,
    },
    {
      name: t.familyClassicTitle,
      price: '$330',
      features: [t.familyClassic1, t.familyClassic2, t.familyClassic3, t.familyClassic4],
      cta: t.bookSession,
    },
    {
      name: t.familySpecialTitle,
      price: '$450',
      features: [t.familySpecial1, t.familySpecial2, t.familySpecial3, t.familySpecial4],
      cta: t.bookSession,
    },
  ]

  const basicPlans = [
    {
      name: t.basicPlanTitle,
      price: '$170',
      features: [t.basicPlan1, t.basicPlan2, t.basicPlan3, t.basicPlan4],
      cta: t.bookSession,
    },
    {
      name: t.classicPlanTitle,
      price: '$280',
      features: [t.classicPlan1, t.classicPlan2, t.classicPlan3, t.classicPlan4],
      cta: t.bookSession,
    },
    {
      name: t.specialPlanTitle,
      price: '$390',
      features: [t.specialPlan1, t.specialPlan2, t.specialPlan3, t.specialPlan4],
      cta: t.bookSession,
    },
  ]


  return (
    <>
      <section className="section-py container-px">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 italic">{t.familyPackages}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6 shadow-subtle bg-white">
              <h3 className="text-xl font-semibold italic">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contacto" className="inline-block rounded-2xl bg-black text-white px-4 py-2 hover:opacity-90">{p.cta}</a>
              </div>
            </div>
          ))}
   
        </div>
      </section>
      <section className="section-py container-px">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 italic">{t.soloPackages}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {basicPlans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6 shadow-subtle bg-white">
              <h3 className="text-xl font-semibold italic">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contacto" className="inline-block rounded-2xl bg-black text-white px-4 py-2 hover:opacity-90">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
