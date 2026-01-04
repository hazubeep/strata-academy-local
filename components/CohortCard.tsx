import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

// Definisikan tipe data untuk konten card
export type CohortCardProps = {
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean; // Flag opsional untuk varian populer
  buttonText?: string;
};

export default function CohortCard({
  title,
  description,
  price,
  features,
  isPopular = false,
  buttonText = "Pilih Paket",
}: CohortCardProps) {

  // Format harga ke Rupiah
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  // Wrapper utama untuk varian populer (aksen warna teal)
  const PopularWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center bg-primary rounded-3xl p-1.25 pt-3.5 w-full h-full">
      <h3 className="pb-2.5 font-bold text-[#f5f5f5] text-sm uppercase tracking-wider">
        Populer
      </h3>
      <div className="relative flex justify-center items-center bg-white rounded-3xl h-full w-full">
        {children}
      </div>
    </div>
  );

  // Base Card Content
  const CardContent = () => (
    // PENTING: Tetapkan lebar pasti (misal w-[350px]) agar slider konsisten.
    // Hapus max-w-100 lama, gunakan lebar fixed. flex-1 h-full memastikan tinggi sama.
    <div className="w-full  md:w-[350px] md:max-w-none border-2 border-gray-100 rounded-3xl p-7.5 flex flex-col h-full flex-1 bg-white">
      {/* Header Section */}
      <div className="grow">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">{title}</h2>
          <p className="text-secondary text-base leading-tight h-16 overflow-hidden line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-[#1ca394]">
            {formattedPrice}
          </span>
        </div>

        {/* Button */}
        <Button variant={isPopular ? "primary" : "secondary"} className="w-full">
          {buttonText}
        </Button>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full my-7.5"></div>

        {/* Features List */}
        <div className="space-y-4 mb-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#1ca394] shrink-0 mt-0.5" />
              <p className="text-secondary text-base font-medium leading-tight">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render berdasarkan status popular
  if (isPopular) {
    return (
      <PopularWrapper>
        <CardContent />
      </PopularWrapper>
    );
  }

  return <CardContent />;
}
