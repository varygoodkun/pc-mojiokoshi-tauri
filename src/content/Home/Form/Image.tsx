import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { Accept, FileWithPath, useDropzone } from 'react-dropzone';
import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';

import { Button } from '~/components/Button';
import { SelectTextType } from '~/components/SelectTextType';

import { mojiokoshiType } from '~/lib/types';
import { apiMojiokoshi } from '~/lib/api';

type Props = {
  setText: Dispatch<SetStateAction<string>>;
};

const mojiokoshiTypes: mojiokoshiType[] = [
  { name: 'デジタル文字', docType: 'text' },
  { name: '手書き文字', docType: 'document' },
];

export const HomeFormImage: React.FC<Props> = (props) => {
  const { setText } = props;
  const [path, setPath] = useState('');
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mojiokoshiType, setMojiokoshiType] = useState(mojiokoshiTypes[0]);

  const accept: Accept = {
    'image/*': ['.png', '.jpeg', '.jpg'],
  };

  const fileName = path.split('/').reverse()[0];

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    const file = acceptedFiles[0];
    const filePath = file.path;
    setPath(filePath);
    file.arrayBuffer().then((buf) => setArrayBuffer(buf));
  }, []);

  const openDialog = async () => {
    const filePath = await open();
    if (typeof filePath === 'string') {
      readBinaryFile(filePath).then((buf) => setArrayBuffer(buf));
      setPath(filePath);
    }
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ accept, onDrop, noClick: true });

  const handleSubmit = async () => {
    if (!path || !arrayBuffer) return;
    setIsLoading(true);

    apiMojiokoshi(mojiokoshiType.docType, arrayBuffer)
      .then((text) => {
        if (text) setText(text);
        else {
          alert('テキストがありません。');
        }
      })
      .catch(() => {
        acceptedFiles.length = 0;
        alert('送信に失敗しました。もう一度やり直してください');
      });

    setPath('');
    setIsLoading(false);
  };

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <div
          className={`h-16 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer ss:h-64 
          ${isDragActive && 'border-sky-500 border-4'}`}
          onClick={() => openDialog()}
        >
          <input {...getInputProps()} />
          <div className="px-4 py-5 ss:p-6">
            {!path ? (
              <div>
                <div className="hidden w-full text-center ss:block">
                  <Image
                    src="/images/upload.png"
                    width={200}
                    height={200}
                    alt="upload"
                  />
                </div>
                <p className="text-center ss:-mt-12">画像ファイルを追加</p>
              </div>
            ) : (
              fileName
            )}
          </div>
        </div>
      </div>

      <SelectTextType
        mojiokoshiTypes={mojiokoshiTypes}
        mojiokoshiType={mojiokoshiType}
        setMojiokoshiType={setMojiokoshiType}
      />

      <div className="w-full text-center">
        <Button
          text={isLoading ? '送信中' : '送信する'}
          isFileExists={path ? true : false}
          isLoading={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
