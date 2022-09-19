import { Body, fetch, Response } from '@tauri-apps/api/http';

type ApiResData = { text: string };

const API_MOJIOKOSHI_URL =
  'https://asia-northeast1-varygoodkun-line-bot.cloudfunctions.net/apiPcMojiokoshi';

export const apiMojiokoshi = async (
  docType: string,
  ab: ArrayBuffer
): Promise<string | null> => {
  const bufJson = Buffer.from(ab).toJSON();

  const body = Body.json({
    type: docType,
    file: bufJson,
  });

  const res: Response<ApiResData> = await fetch(API_MOJIOKOSHI_URL, {
    method: 'POST',
    body: body,
  });

  const data = res.data;
  return data.text;
};
