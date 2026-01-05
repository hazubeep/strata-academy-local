import OrderForm from "../OrderForm";

export default function Order() {
  return (
    <section
      id="order"
      className="p-4 md:p-17.5 scroll-mt-28"
    >
      <div className="bg-default p-3.5 lg:p-6 rounded-2xl ">
        <h1 className="font-bold text-center text-2xl lg:text-3xl text-primary pb-3 md:pb-7.5">Form Order Kelas Private</h1>
        <OrderForm />
      </div>
    </section>
  )
}
