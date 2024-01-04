import FaqsBox from '@/components/Faqs/FaqsBox';

const FaqsPage = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-3xl text-center tracking-tight font-bold text-[#FE6601]">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />

          <FaqsBox
            question={'What do you mean by "Figma assets"?'}
            answer={
              'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
