import sharp from 'sharp';

const imageMod = async (
  imageUrl: string,
  width: number,
  height: number
): Promise<Buffer> => {
  const buffer = await sharp(imageUrl).resize(width, height).toBuffer();
  await sharp(buffer).toFile('./images/Modified/encenadaport_new.jpg');
  return buffer;
};
export default imageMod;