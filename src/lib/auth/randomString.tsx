export default function randomString(
  length: number,
  chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let randStr: string = "";
  for (var i = 0; i < length; i++) {
    randStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randStr;
}
