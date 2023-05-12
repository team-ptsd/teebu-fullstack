import TestBtn from '@/components/client/buttons/TestBtn';

const Page = () => {
  return (
    <div>
      <section className='h-80 bg-gray-200' />
      <section className='max-w-5xl mx-auto p-2 md:p-4'>
        <h2 className='font-bold text-2xl mb-4'>인기 상품들</h2>

        <TestBtn />
      </section>
    </div>
  );
};

export default Page;
