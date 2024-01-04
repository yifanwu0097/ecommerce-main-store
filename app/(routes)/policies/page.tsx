import PoliciesData from "@/components/Policies/PoliciesData";
import { Collapse, CollapseProps } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <h1 className="leading-tight text-lg font-semibold text-[#0037A1]">
        Chính sách bảo hành
      </h1>
    ),
    children: (
      <>
        <PoliciesData
          heading={"❖ Quy Định Bảo Hành"}
          para={[
            {
              point: false,
              content:
                "Trong thời gian bảo hành, sản phẩm hỏng hóc do lỗi nhà sản xuất sẽ được bảo hành miễn phí",
            },
          ]}
        />

        <PoliciesData
          heading={"❖ Các Trường Hợp Không Được Bảo Hành"}
          para={[
            {
              point: true,
              content: "Sản phẩm đã quá thời gian bảo hành.",
            },
            {
              point: true,
              content:
                "Sản phẩm hư hỏng do lắp đặt và sử dụng không đúng cách.",
            },
            {
              point: true,
              content:
                "Sản phẩm hư hỏng do làm rơi, vỡ, va đập, trầy xước và móp méo.",
            },
            {
              point: true,
              content:
                "Sản phẩm khách hàng tự ý tháo lắp và sửa chữa trước khi bảo hành.",
            },
          ]}
        />

        <PoliciesData
          heading={"❖ Quy Trình Bảo Hành"}
          para={[
            {
              point: true,
              content: "Sản phẩm đã quá thời gian bảo hành.",
            },
            {
              point: true,
              content:
                "Sản phẩm hư hỏng do lắp đặt và sử dụng không đúng cách.",
            },
            {
              point: true,
              content:
                "Sản phẩm hư hỏng do làm rơi, vỡ, va đập, trầy xước và móp méo.",
            },
            {
              point: true,
              content:
                "Sản phẩm khách hàng tự ý tháo lắp và sửa chữa trước khi bảo hành.",
            },
          ]}
        />

        <PoliciesData
          heading={"❖ Liên Hệ Bảo Hành"}
          para={[
            {
              point: false,
              content: "Số điện thoại:",
            },
            {
              point: false,
              content: "Email: muamayin3d@gmail.com",
            },
            {
              point: false,
              content: "Địa chỉ: 41 ngõ 76 An Dương, Tây Hồ, Hà Nội",
            },
          ]}
        />
      </>
    ),
  },
  {
    key: "2",
    label: (
      <h1 className="leading-tight text-lg font-semibold text-[#0037A1]">
        Chính sách đổi trả
      </h1>
    ),
    children: (
      <>
        {" "}
        <PoliciesData
          heading={"❖ Điều Kiện Đổi Trả"}
          para={[
            {
              point: false,
              content: "Các Trường Hợp Được Đổi Trả:",
            },
            {
              point: true,
              content: "Sản phẩm bị hỏng hóc hoặc lỗi kỹ thuật do nhà sản xuất",
            },
            {
              point: true,
              content: "Sản phẩm bị hư hỏng do quá trình vận chuyển",
            },
            {
              point: true,
              content: "Sản phẩm bị thiếu linh kiện, phụ kiện đi kèm ",
            },
            {
              point: true,
              content: "Không đúng sản phẩm mà khách đã đặt",
            },
            {
              point: true,
              content:
                "Nếu phát hiện các trường hợp trên, quý khách vui lòng liên hệ tới số điện thoại và thông báo tình trạng sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng để được hỗ trợ đổi mới",
            },
            {
              point: false,
              content: "Điều Kiện Sản Phẩm Được Đổi Trả:",
            },
            {
              point: true,
              content: "Sản phẩm chưa qua sử dụng đi kèm với hóa đơn mua hàng",
            },
            {
              point: true,
              content: "Sản phẩm còn trong thời gian đổi trả",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Thời Gian Đổi Trả"}
          para={[
            {
              point: true,
              content: "Áp dụng 1 lần/1 đơn hàng",
            },
            {
              point: true,
              content: "Trong vòng 14 ngày kể từ ngày mua",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Liên Hệ Đổi Trả"}
          para={[
            {
              point: false,
              content: "Số điện thoại:",
            },
            {
              point: false,
              content: "Email: muamayin3d@gmail.com",
            },
            {
              point: false,
              content: "Địa chỉ: 41 ngõ 76 An Dương, Tây Hồ, Hà Nội",
            },
          ]}
        />
      </>
    ),
  },
  {
    key: "3",
    label: (
      <h1 className="leading-tight text-lg font-semibold text-[#0037A1]">
        Chính sách thanh toán
      </h1>
    ),
    children: (
      <>
        {" "}
        <PoliciesData
          heading={"❖ Thanh Toán Trước Khi Nhận Hàng"}
          para={[
            {
              point: false,
              content:
                "Sau khi khách hàng đặt hàng thành công, chúng tôi sẽ liên hệ tới số điện thoại cá nhân để xác nhận đơn hàng. Khách hàng vui lòng chuyển khoản 100% giá trị đơn hàng và chúng tôi sẽ tiến hành giao hàng và hỗ trợ lắp đặt (nếu cần) ",
            },
          ]}
        />
      </>
    ),
  },
  {
    key: "4",
    label: (
      <h1 className="leading-tight text-lg font-semibold text-[#0037A1]">
        Chính sách lắp đặt
      </h1>
    ),
    children: (
      <>
        <PoliciesData
          heading={"❖ Phạm Vi Áp Dụng"}
          para={[
            {
              point: true,
              content:
                "Khu Vực 1: Dưới 10 km từ số 41 ngõ 76 An Dương, Tây Hồ, Hà Nội",
            },
            {
              point: true,
              content: "Khu vực 2: Từ 10-40 km",
            },
            {
              point: true,
              content: "Khu vực 3: Từ 40-60 km",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Chi Phí Lắp Đặt"}
          para={[
            {
              point: true,
              content: "Khu vực 1: 200.000 VNĐ",
            },
            {
              point: true,
              content: "Khu vực 2: 500.000 VNĐ",
            },
            {
              point: true,
              content: "Khu vực 3: 1.000.000 VNĐ",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Nội Dung Lắp Đặt"}
          para={[
            {
              point: true,
              content:
                "Nhân viên kỹ thuật sẽ vận chuyển máy đến địa chỉ khách hàng yêu cầu.",
            },
            {
              point: true,
              content:
                "Nhân viên kỹ thuật sẽ hỗ trợ lắp đặt và hướng dẫn sử dụng máy cho khách hàng.",
            },
          ]}
        />
      </>
    ),
  },
  {
    key: "5",
    label: (
      <h1 className="leading-tight text-lg font-semibold text-[#0037A1]">
        Chính sách bảo mật
      </h1>
    ),
    children: (
      <>
        <p className="text-center">
          muamayin3d.com.vn hiểu rõ và tôn trọng quyền bảo mật thông tin cá nhân
          của khách hàng.
        </p>
        <PoliciesData
          heading={"❖ Mục Đích Thu Thập Thông Tin"}
          para={[
            {
              point: true,
              content:
                "muamayin3d.com.vn thu thập thông tin khách hàng để phục vụ mục đích hỗ trợ và duy trì mối quan hệ với khách hàng.",
            },
            {
              point: true,
              content:
                "Duy trì liên lạc với khách hàng, hỗ trợ giải đáp thắc mắc trong quá trình sử dụng sản phẩm.",
            },
            {
              point: true,
              content: "Gửi thư ngỏ, thư cảm ơn.",
            },
            {
              point: true,
              content:
                "Phục vụ cho mục đích tiếp thị, thông báo đến khách hàng các chương trình khuyến mại.",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Phạm Vi Thu Thập Thông Tin"}
          para={[
            {
              point: true,
              content:
                "Thông tin cá nhân khách hàng mà muamayin3d.com.vn thu thập bao gồm",
            },
            {
              point: true,
              content: "Họ tên",
            },
            {
              point: true,
              content: "Số điện thoại",
            },
            {
              point: true,
              content: "Email",
            },
            {
              point: true,
              content: "Địa chỉ",
            },
            {
              point: true,
              content:
                "Khách hàng có thể tùy chọn hoặc từ chối cung cấp thông tin cho muamayin3d.com.vn",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Thời Gian Lưu Trữ Thông Tin"}
          para={[
            {
              point: true,
              content:
                "Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ khách hàng.",
            },
            {
              point: true,
              content: "Địa chỉ đơn vị thu thập và quản lý thông tin cá nhân",
            },
            {
              point: false,
              content: "muamayin3d.com.vn",
            },
            {
              point: false,
              content: "Số điện thoại",
            },
            {
              point: false,
              content: "Email",
            },
            {
              point: false,
              content: "Địa chỉ: 41 ngõ 76 An Dương, Tây Hồ, Hà Nội",
            },
            {
              point: false,
              content:
                "Nếu khách hàng có khiếu nại về thông tin cá nhân, vui lòng liên hệ qua số điện thoại hoặc email để được hỗ trợ nhanh chóng.",
            },
          ]}
        />
        <PoliciesData
          heading={"❖ Cam Kết Bảo Mật Thông Tin Khách Hàng"}
          para={[
            {
              point: true,
              content:
                "Thông tin cá nhân của khách hàng được cam kết bảo mật tuyệt đối.",
            },
            {
              point: true,
              content:
                "Chúng tôi cam kết không sử dụng hay tiết lộ thông tin cá nhân cho bên thứ 3 khi không có sự đồng ý của khách hàng",
            },
          ]}
        />
      </>
    ),
  },
];

const PoliciesPage = () => {
  return (
    <div className="flex flex-col px-20 my-10 gap-4">
      <h1 className=" bg-[#0037A1] opacity-[0.9] border rounded-md shadow-md px-4 py-3 w-fit font-semibold text-lg text-white self-center">
        Chính sách
      </h1>

      <Collapse items={items} defaultActiveKey={["1"]} className="shadow-md"/>
    </div>
  );
};

export default PoliciesPage;
