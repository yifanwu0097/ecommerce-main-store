import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className='bg-[#0137a1] text-white'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <div className=''>
              <Link href='/' className='flex items-center'>
                <img src='/white-logo.png' className='h-20 mr-1' alt='MayIn3d' />
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Products
              </h2>
              <ul className='text-gray-300 font-medium space-y-3'>
                <li>
                  <Link href='/' className='hover:underline'>
                    3d Printers
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:underline'>
                    Resin & PLA
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:underline'>
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Company
              </h2>
              <ul className='text-gray-300 font-medium space-y-3'>
                <li>
                  <Link href='/' className='hover:underline '>
                    About MayIn3d
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:underline'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:underline'>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:underline'>
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Resources
              </h2>
              <ul className='text-gray-300 font-medium space-y-3'>
                <li>
                  <Link href='#' className='hover:underline'>
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Warranty & Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Contact Us
              </h2>
              <ul className='text-gray-300 font-medium'>
                <li className='mb-3'>
                  <Link href='#' className='hover:underline'>
                    hello@mayin3d.com
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link href='#' className='hover:underline'>
                    +84 672 3238
                  </Link>
                </li>
                <li>
                  <div className='flex gap-2'>
                    <img
                      className='h-6'
                      src='/icons/facebook.svg'
                      alt='facebook'
                    />
                    <img className='h-6' src='/icons/zalo.svg' alt='zalo' />
                    <img className='h-6' src='/icons/tiktok.svg' alt='tiktok' />
                    <img className='h-6' src='/icons/shopee.svg' alt='shopee' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' /> */}
        <div className='sm:flex my-6 sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-300 sm:text-center'>
            © 2023{' '}
            <Link href='/' className='hover:underline'>
              Mayin3d
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
