export default function parseCookie(cookie) {
  return cookie.split("; ").reduce((previous, current, index) => {
    const [key, value] = [
      current.replace(/(.*?)=.*/, "$1"),
      current.replace(/.*?=(.*)/, "$1"),
    ];
    if (index === 1) {
      const [prevKey, prevValue] = [
        previous.replace(/(.*?)=.*/, "$1"),
        previous.replace(/.*?=(.*)/, "$1"),
      ];
      return { [prevKey]: prevValue, [key]: value };
    }
    return Object.assign(previous, { [key]: value });
  });
}
