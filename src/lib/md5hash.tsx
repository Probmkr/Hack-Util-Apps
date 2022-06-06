import md5 from "crypto-js/md5";

export default function md5hash(str: string) {
  return md5(str).toString();
}
