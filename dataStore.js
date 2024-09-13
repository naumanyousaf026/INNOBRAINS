// dataStore.js
let datas = [];

module.exports = {
  getDatas: () => datas,
  addData: (data) => datas.push(data),
};
