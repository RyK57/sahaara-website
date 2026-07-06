/** Stable hash so scatter order is identical on server and client. */
function hashSources(items: { src: string }[]): number {
  return items.reduce((hash, { src }) => {
    for (let i = 0; i < src.length; i++) {
      hash = (Math.imul(31, hash) + src.charCodeAt(i)) | 0;
    }
    return hash;
  }, 0);
}

/** Scramble image order — not alphabetical / directory order, hydration-safe. */
export function scatterImages<T extends { src: string }>(items: T[]): T[] {
  if (items.length < 2) return items;

  const copy = [...items];
  let seed = Math.abs(hashSources(copy)) || 1;

  function rand() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0x100000000;
  }

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}
