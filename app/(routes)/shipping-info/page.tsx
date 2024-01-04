"use client";
import { BankDetailsModal } from "@/collections/BankDetailsModal/BankDetailsModal";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Form, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ShippingInfo = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [formData, setFormData] = useState({
    address: "",
    phoneNumber: "",
    name: "",
    email: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onCheckoutClick = () => {
    if (
      formData.name !== "" &&
      formData.phoneNumber !== "" &&
      formData.address !== "" &&
      formData.email !== ""
    ) {
      setOpen(true);
    } else {
      toast.error("Enter all details first");
    }
  };

  const onCheckout = async () => {
    setLoading(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        // productIds: items.map((item) => item.product.id),
        items: items.map((item) => {
          return {
            productId: item.product.id,
            filamentId: item?.filament?.id ?? null,
            warrantyId: item?.warranty?.id ?? null,
          };
        }),
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phoneNumber,
      }
    );
    setFormData({
      address: "",
      phoneNumber: "",
      name: "",
      email: "",
    });
    setLoading(false);
    setOpen(false);
    toast.success("Order Sent");
    removeAll();
    console.log(response);
    if (response.data?.order?.id)
      router.push("/order-confirmation/" + response.data.order?.id);
  };
  type FieldType = {
    name?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    orderNotes?: string;
  };
  const totalPrice = items.reduce((total, item) => {
    return (
      total +
      Number(
        +item.product.price +
          +(item.filament?.value ?? 0) +
          +(item.warranty?.value ?? 0)
      )
    );
  }, 0);
  return (
    <Container>
      <BankDetailsModal
        loading={loading}
        isOpen={open}
        onClose={() => setOpen(false)}
        onCheckout={onCheckout}
      />
      <div className="flex md:flex-row flex-col justify-between md:gap-20">
        <div className="flex flex-col w-full">
          <h2 className="text-xl font-bold my-8">Billing Information</h2>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 40 }}
            wrapperCol={{ span: 50 }}
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="md:my-20">
          <div className="md:mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 md:w-[450px] w-full">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              {items?.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-row items-center justify-between border-t border-gray-200 pt-4"
                >
                  <div className="text-base font-medium text-gray-900">
                    {item.product.name}
                  </div>
                  <Currency value={item.product.price} />
                </div>
              ))}
              <div className="flex md:items-center justify-between">
                <div className="text-base font-medium text-gray-900">
                  Delievery
                </div>
                <p>Free</p>
              </div>
              <div className=" flex-row flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="text-base font-medium text-gray-900">
                  Total Price
                </div>
                <Currency value={totalPrice} />
              </div>
              <p className="text-sm">
                Make payment to our bank account instantly. The order would be
                shipped after the money has been transferred
              </p>
            </div>
            <Button
              type="submit"
              onClick={onCheckout}
              disabled={loading}
              className="w-full mt-6"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShippingInfo;
