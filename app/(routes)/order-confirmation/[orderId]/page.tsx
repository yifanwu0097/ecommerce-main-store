import getOrder from "@/actions/get-order";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { Result } from "antd";
import Link from "next/link";
interface OrderConfirmationPageProps {
  params: {
    orderId: string;
  };
}
const OrderConfirmation: React.FC<OrderConfirmationPageProps> = async ({
  params,
}) => {
  const order = await getOrder(params.orderId);

  return (
    <div className="container mx-auto mb-12">
      <div className="flex md:flex-row flex-col gap-6 justify-center items-center">
        <div className="md:w-[40%] mt-10">
          <p className="font-bold">
            Please Wait For A Moment. Customer Care Department Will Contact To
            Confirm Your Order Or You Can Contact Directly Via Phone And Zalo:
            093 687 9867 For The Best Support.
          </p>
          <div className="my-8">
            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 md:w-[450px] ">
              <h2 className="text-lg font-medium text-gray-900">
                Order Details
              </h2>
              <div className="mt-6 space-y-4">
                {order?.orderItems?.map((item) => (
                  <div key={item.id}>
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between border-t border-gray-200 pt-4"
                    >
                      <div className="text-base font-medium text-gray-900">
                        {item.product.name}
                      </div>
                      <Currency value={item.product.price} />
                    </div>
                    {item?.warranty && (
                      <div className="flex items-center justify-between">
                        <div className="text-base font-medium text-gray-900">
                          Warranty Period
                        </div>
                        <p className="text-sm">
                          {item.warranty.duration} month warranty
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-gray-200">
                  <div className="text-base font-medium text-gray-900">
                    Shipping
                  </div>
                  <p className="text-sm">Free Shipping for the machine</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-base font-medium text-gray-900">
                    Payment Method
                  </div>
                  <p className="text-sm">Bank Transfer</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">
                    Total Price
                  </div>
                  <Currency
                    value={order?.orderItems?.reduce((total, item) => {
                      return (
                        total +
                        Number(
                          +item.product.price +
                            +(item.filament?.value ?? 0) +
                            +(item.warranty?.value ?? 0)
                        )
                      );
                    }, 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="p-5">
            <Result
              status={"success"}
              title="Thankyou your order has been received"
              subTitle={"Order number: " + order.orderNumber}
              extra={
                <Link href="/">
                  <Button variant={"outline"}>Go back to Homepage</Button>
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
