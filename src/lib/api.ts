import 'dotenv/config';

const API_MOJIOKOSHI_URL = process.env.API_MOJIOKOSHI_URL;

export const apiMojiokoshi = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(API_MOJIOKOSHI_URL, {
    method: 'POST',
    body: formData,
  });

  return await res.json();
};
