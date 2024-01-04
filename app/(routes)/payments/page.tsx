const PaymentsPage = () => {
  return (
    <div className="flex flex-col gap-5 px-10 my-10">
        <h1 className="leading-tight text-2xl font-semibold text-center text-[#FE6601]">PAYMENTS METHODS</h1>

        <div className=" max-w-7xl m-auto flex flex-col gap-8">
        <div className="flex flex-col mt-5  gap-2">
        <h1 className="leading-tight text-xl font-semibold  text-[#FE6601]">PAYMENT IN ADVANCE</h1>
        <span className="text-sm text-gray-600 font-normal">After Meme 300 has received your order and confirmed the shipping information via a call via the phone number provided by the customer, the customer will have to transfer 100% of the order value (including shipping costs). shipping fee if the order is worth less than 5 million dong) and is confirmed by Mere 36 as a successful completion, then delivery or installation support will be carried out (if that is the case, payment will be made to support land filling)</span>
        </div>

        <div className="flex flex-col gap-2">
        <h1 className="leading-tight text-xl font-semibold  text-[#FE6601]">PAYMENT ON DELIVERY (COD)</h1>
        <span className="text-sm text-gray-600 font-normal">Payment on receipt only applies to items with a value of less than 2 million VND. Customers pay directly to the delivery staff</span>
        </div>
        </div>
    </div>
  )
}

export default PaymentsPage