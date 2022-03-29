export function transpose() {
  return transform('transpose', ([px, py]) => [py, px]);
}

export function translate(tx = 0, ty = 0) {
  return transform('translate', ([px, py]) => [px + tx, py + ty]);
}

export function scale(sx = 1, sy = 1) {
  return transform('scale', ([px, py]) => [px * sx, py * sy]);
}

export function reflect() {
  return transform('reflect', scale(-1, -1));
}

export function reflectX() {
  return transform('reflectX', scale(-1, 1));
}

export function reflectY() {
  return transform('reflectY', scale(1, -1));
}

// 极坐标
export function polar() {
  return transform('polar', ([delta, radius]) => {
    const x = radius * Math.cos(delta);
    const y = radius * Math.sin(delta);
    return [x, y];
  });
}

function transform(
  type: string,
  transformer: {
    ([arg1, arg2]: [number, number]): [number, number];
  },
) {
  // type 函数会返回自己的变换类型
  // @ts-ignore
  transformer.type = () => type;
  return transformer;
}
