const convertData = (type , data) => {
  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

export { convertData };

// const convertData = (type, data) => {
//   const convertedData = data[type].map((item) => {
//     return {
//       date: item[0],
//       [type]: item[1],
//     };
//   });
//   return convertedData;
// };

// export { convertData };
