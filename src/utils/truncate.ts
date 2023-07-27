export function truncate(str: string, num = 230) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
