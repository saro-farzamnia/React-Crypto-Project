const converData = (type, data) => {
  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

export { converData };

// const converData = (type, data) => {
//   const convertedData = data[type].map((item) => {
//     return {
//       date: item[0],
//       [type]: item[1],
//     };
//   });
//   return convertedData;
// };

// export { converData };
