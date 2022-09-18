import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';

type Props = {
  text: string;
};

export const CopyButton: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <CopyToClipboard
      onCopy={() => {
        toast.remove();
        if (text)
          toast.success('クリップボードにコピーしました', {
            position: 'top-center',
          });
        else toast.error('テキストがありません');
      }}
      text={text}
    >
      <div>
        {text && (
          <button
            id="copy"
            className="flex p-1 text-gray-700 border border-gray-700 rounded-md"
          >
            <ClipboardIcon className="w-6 h-6" />
            <span className="mx-1">コピーする</span>
          </button>
        )}
      </div>
    </CopyToClipboard>
  );
};
