import Image from 'next/image';

export const Header = (props) => {
  return (
    <div className="flex items-center justify-start py-2 space-x-5 border-b-2 border-gray-300">
      <div className="ml-5">
        <Image src="/images/logo.png" width={42} height={42} alt="logo" />
      </div>
      <h1 className="text-xl font-bold">文字起こしばりぐっどくん</h1>
    </div>
  );
};
