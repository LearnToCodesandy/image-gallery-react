import { createClient } from 'pexels';
const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

const getARandomPhoto = async () => {
  const response = await client.photos.random();
  return response;
};

export { getARandomPhoto };
