import { HomeFormImage } from './Image';
import { HomeFormTextzone } from './Textzone';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const HomeForm: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className="grid p-4 mx-auto space-y-4 sm:space-y-0 sm:space-x-5 sm:grid-cols-2 max-w-7xl sm:px-6 lg:px-8">
      <HomeFormImage setText={setText} />
      <HomeFormTextzone text={text} />
      <Toaster position="top-right" />
    </div>
  );
};
