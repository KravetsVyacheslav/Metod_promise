// 1

const delayedPromise = (value, delay) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  };
  
  const promises = [
    delayedPromise('Проміс 1', 1000),
    delayedPromise('Проміс 2', 2000),
    delayedPromise('Проміс 3', 1500),
    delayedPromise('Проміс 4', 2500),
    delayedPromise('Проміс 5', 500),
  ];
  
  Promise.all(promises)
    .then(results => {
      console.log('Усі проміси вирішені:', results);
    })
    .catch(error => {
      console.error('Помилка у вирішенні промісів:', error);
    });
  
  // 2
  
  const randomDelay = value => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  };
  
  const racePromises = [
    randomDelay('Проміс 1'),
    randomDelay('Проміс 2'),
    randomDelay('Проміс 3'),
    randomDelay('Проміс 4'),
    randomDelay('Проміс 5'),
  ];
  
  Promise.race(racePromises)
    .then(result => {
      console.log('Найшвидший проміс вирішено:', result);
    })
    .catch(error => {
      console.error('Помилка у вирішенні промісів:', error);
    });
  