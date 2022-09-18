import { CopyButton } from '~/components/CopyButton';

type Props = {
  text: string;
};

export const HomeFormTextzone: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <>
      <div>
        <div className="h-full overflow-scroll bg-white rounded-lg shadow-lg">
          <div className="px-4 py-5 sm:p-6  min-h-[16rem]  max-h-[80vh] ">
            <div className="sm:absolute sm:right-6 sm:top-4">
              <CopyButton text={text} />
            </div>
            {!!text ? text : <p>{text}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
