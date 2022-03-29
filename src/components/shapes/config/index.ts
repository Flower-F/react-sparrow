export type TransformStyles = {
  translate?: [number, number];
  rotate?: number;
  scale?: [number, number];
};

export function getNormalTransformStyles(styles: TransformStyles | undefined) {
  if (!styles) {
    return '';
  }

  let rotateString = '';
  if (styles.rotate) {
    rotateString = `rotate(${styles.rotate})`;
  }

  let translateString = '';
  if (styles.translate) {
    translateString = `translate(${styles.translate[0]}, ${styles.translate[1]})`;
  }

  let scaleString = '';
  if (styles.scale) {
    scaleString = `scale(${styles.scale[0]}, ${styles.scale[1]})`;
  }

  return `${translateString} ${scaleString} ${rotateString}`;
}
