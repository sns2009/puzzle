import R from 'ramda';
import gameConfig from './gameConfig';
export default function imagePath(id) {
  const imgArr = R.map(imageNumber => `images/${imageNumber}.jpg`,R.range(1,Math.pow(gameConfig.biggestField,2)/2+1))
  return imgArr[id];
}
