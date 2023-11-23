export const deepClone = (data: any) => {
  if (Object.prototype.toString.call(data) !== "[object Object]") {
    return data;
  }
  let result = Array.isArray(data) ? [] : {};
  Object.keys(data).forEach((key: string) => {
    result[key] = deepClone(data[key]);
  });
  return result;
};
