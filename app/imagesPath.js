import R from 'ramda';
export default function imagePath(id) {
  const imgArr = R.map(imageNumber => `images/${imageNumber}.jpg`,R.range(1,51))
  return imgArr[id];
}
