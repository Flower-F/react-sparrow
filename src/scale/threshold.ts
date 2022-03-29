// Threshold 比例尺，把值分为几个组

export default function createThreshold({
  domain,
  range,
}: {
  domain: number[];
  range: string[];
}) {
  const n = Math.min(domain.length, range.length - 1);
  return (x: number) => {
    const index = domain.findIndex((v) => x < v);
    return range[index === -1 ? n : index];
  };
}
