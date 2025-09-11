export function selectNRandom(items, n) {
  const len = items.length;
  if (len === 0) return [];
  const k = Math.min(n, len);

  const arr = items.slice();

  for (let i = 0; i < k; i++) {
    const j = i + Math.floor(Math.random() * (len - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, k);
}
