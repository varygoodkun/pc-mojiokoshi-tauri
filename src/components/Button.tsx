import { LoadingCircle } from './LoadingCircle';

type Props = {
  text: string;
  isFileExists: boolean;
  isLoading: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { text, isFileExists, isLoading, onClick } = props;

  return (
    <button
      type="button"
      className={` px-4 py-4 w-full text-sm font-medium text-gray-700 bg-white rounded-md shadow-lg 
      ${
        isFileExists
          ? 'hover:bg-gray-200 focus:outline-none'
          : 'text-gray-200 cursor-not-allowed'
      }`}
      onClick={onClick}
    >
      <span className={`flex mx-auto ${isLoading ? 'w-20' : 'w-14'}`}>
        {isLoading && <LoadingCircle />}
        {text}
      </span>
    </button>
  );
};
