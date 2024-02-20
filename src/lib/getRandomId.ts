export function getRandomId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const len = 10;

  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * chars.length);
    result += chars.charAt(index);
  }

  return result;
}