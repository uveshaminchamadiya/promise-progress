export const runPromise = async (promiseArray, progressCallback) => {
  let resolvedCount = 0;
  const result = [];

  await Promise.all(
    promiseArray.map(async (promise) => {
      const data = await promise;
      result.push(data);
      resolvedCount++;
      const percentage = ((resolvedCount / promiseArray.length) * 100).toFixed(2);
      progressCallback(percentage);
    })
  );

  return result
}
