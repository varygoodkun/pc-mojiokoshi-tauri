import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { mojiokoshiType } from '~/lib/types';
import { CheckIcon } from './CheckIcon';

type Props = {
  mojiokoshiTypes: mojiokoshiType[];
  mojiokoshiType: mojiokoshiType;
  setMojiokoshiType: Dispatch<SetStateAction<mojiokoshiType>>;
};

export const SelectTextType = (props: Props) => {
  const { mojiokoshiTypes, mojiokoshiType, setMojiokoshiType } = props;
  return (
    <div className="w-full py-3 mx-auto">
      <RadioGroup value={mojiokoshiType} onChange={setMojiokoshiType}>
        <div className="grid grid-cols-2 gap-x-3">
          {mojiokoshiTypes.map((type) => (
            <RadioGroup.Option
              key={type.docType}
              value={type}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : ''
                }
                  ${
                    checked
                      ? 'bg-gray-600 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {type.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        ></RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="text-white shrink-0">
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
