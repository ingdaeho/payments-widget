export function shuffle(array: (string | number)[]) {
  return array.sort(() => Math.random() - 0.5);
}
