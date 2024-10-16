export function runPromise(promiseArray, progressCallback) {
  let resolvedCount = 0;

  promiseArray.forEach((promise) => {
    promise.then(() => {
      resolvedCount++;
      const percentage = (resolvedCount / promiseArray.length) * 100;
      progressCallback(percentage);
    });
  });
}
