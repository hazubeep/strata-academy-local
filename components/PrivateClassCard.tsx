import { BookOpenText, CheckCircle2 } from "lucide-react"

export default function PrivateClassCard() {
  const features = [
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
    "Pembahasan konsep klinis inti",
  ]

  return (
    <div className="w-full mx-auto max-w-125 border border-gray-200 rounded-3xl p-7.5  flex flex-col group hover:border-primary transition-colors" >
      {/* Header Section */}
      <div>
        <BookOpenText className="h-7.5 w-7.5 text-primary" />
        <h2 className="text-xl font-bold text-primary my-2">Paket Bundling</h2>

        <p className="text-secondary text-base leading-tight">
          Full Bundling Record Cohort Class dan Try Out Intensive Blok Kardio
        </p>
      </div >

      {/* Divider */}
      < div className="h-px bg-gray-200 w-full my-7.5 group-hover:bg-primary transition-colors" ></div >

      {/* Features List */}
      < div className="space-y-4" >
        {
          features.map((feature, index) => (
            <div key={index} className="flex items-start gap-x-2">
              <CheckCircle2 className=" fill-primary text-white w-5 h-5 shrink-0" />
              <p className="text-secondary text-base font-medium leading-tight">
                {feature}
              </p>
            </div>
          ))
        }
      </div >
    </div >
  )
}
