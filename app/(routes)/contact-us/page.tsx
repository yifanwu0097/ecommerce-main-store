import ContactForm from '@/components/Contact/ContactForm';

const ContactUsPage = () => {
  return (
    <div className='my-20 px-10'>
      <div className='flex sm:flex-row flex-col md:max-w-7xl gap-4 m-auto'>
        <div className='flex flex-1 flex-col gap-2'>
          <h1 className='leading-tight text-2xl font-semibold'>Contact Info</h1>
          <span className='text-[#f7941d] text-lg font-bold mb-5'>
            MEME 3D COMPANY LIMITED
          </span>

          <div className='flex gap-2 items-center '>
            <i className='fa fa-phone' aria-hidden='true'></i>
            <span className='text-sm text-gray-700'>
              Hotline: 0963033309 | 0936879867
            </span>
          </div>

          <div className='flex gap-2 items-center '>
            <i className='fa fa-phone' aria-hidden='true'></i>
            <span className='text-sm text-gray-700'>
              Email: nguyenvinh@meme3d.com
            </span>
          </div>

          <div className='flex gap-2 items-center '>
            <i className='fa fa-phone' aria-hidden='true'></i>
            <span className='text-sm text-gray-700'>
              Address: 28 Street No. 57- TML. P Thanh My Loi, City. Thu Duc,
              HCMC
            </span>
          </div>
        </div>

        <div className='flex flex-1 px-5 flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='leading-tight text-2xl font-semibold'>
              Contact Us
            </h1>
            <span className='text-sm text-gray-800'>
              Please leave your information below and we will contact you.
            </span>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
