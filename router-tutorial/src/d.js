function increase(number) {
  const promise = new promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50 보다 높으면 에러발생
        const e = new Error("numberTooBig");
        return reject(e);
      }
      resolve(result); //number값에 + 10후 성공처리
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
  } catch (e) {
    console.log(e);
  }
}
