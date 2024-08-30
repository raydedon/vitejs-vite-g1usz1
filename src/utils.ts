export const messageData = (
  data: Array<Array<string | number | Array<string>>>
) => {
  const map: Record<string, Record<string, any>> = {};
  data.forEach((arr) => {
    const refer = Array.isArray(arr[1]);
    const value = Array.isArray(arr[1]) ? arr[1][1] : arr[1];
    map[arr[0] as string] = {
      refer,
      value,
    };
  });
  return map;
};

export const lookUpValue = (
  key: string,
  refer: boolean,
  data: Record<string, Record<string, any>>
) => {
  if (!refer) return key;
  let prev = key;
  let curr = data[key];
  while (true) {
    if (!curr) return prev;
    if (!curr.refer) return curr.value;
    curr = data[curr.value];
  }
};
