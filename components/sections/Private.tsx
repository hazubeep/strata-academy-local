import PrivateClassCard from "../PrivateClassCard";

export default function Private() {
  return (<section
    id="privat"
    className="p-4 md:p-17.5  bg-default scroll-mt-28"
  >
    <div className="mb-10 text-center">
      <h2 className="text-primary text-2xl font-bold mb-3 md:text-3xl">Kelas Private</h2>
      <p className="text-secondary max-w-prose mx-auto">
        Bimbingan intensif satu lawan satu untuk hasil yang maksimal.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-10 mx-auto">
      {[1, 2, 3].map((item) => (
        <PrivateClassCard key={item} />
      ))}
    </div>
  </section>
  )
}
