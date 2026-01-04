import { BookOpenText, CheckCircle2 } from "lucide-react"

export default function PrivateClassCard() {
  const features = [
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
  ]

  return (
    <div className="flex justify-center items-center bg-gray-50">
      {/* Container Card */}
      <div className="w-full max-w-100 border-3 border-indigo-50 rounded-3xl p-7.5  flex flex-col">

        {/* Header Section */}
        <div>
          <BookOpenText className="h-7.5 w-7.5 text-primary" />
          <h2 className="text-xl font-bold text-primary my-2">Paket Bundling</h2>

          <p className="text-secondary text-base leading-tight">
            Full Bundling Record Cohort Class dan Try Out Intensive Blok Kardio
          </p>
        </div>

        {/* Divider */}
        <div className="h-0.75 bg-indigo-50 w-full my-7.5"></div>

        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-x-2">
              <CheckCircle2 className=" fill-primary text-white w-5 h-5 shrink-0" />
              <p className="text-secondary text-base font-medium leading-tight">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>)
}
