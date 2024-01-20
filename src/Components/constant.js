const classWise = (wineData, alcohol) => {
  // Getting data classwise
  const classOne = wineData.filter((wine) => wine.Alcohol === alcohol);
  return classOne;
};

const gammaList = (dataClassWise) => {
  // Calculating Gamma
  return dataClassWise?.map((item) => (item.Ash * item.Hue) / item.Magnesium);
};

const compareNumbers = (a, b) => {
  // Sorting the data numbers wise
  return a - b;
};

const mode = (wineData, alcohol, table) => {
  // mode = highest frequency
  const dataClassWise = classWise(wineData, alcohol);
  const list = table === "Gamma" ? gammaList(dataClassWise) : dataClassWise;
  const sortedData =
    table === "Gamma"
      ? list?.sort(compareNumbers)
      : list?.map((item) => item.Flavanoids).sort(compareNumbers);

  let maxCount = 0;
  let maxValue = [];

  for (let i = 0; i < sortedData.length; i++) {
    let count = 0;
    for (let j = i; j < sortedData.length; j++) {
      if (sortedData[i] === sortedData[j]) {
        count++;
      }
    }
    if (count >= maxCount) {
      maxCount = count;
      // Storing the maxCount and the value of the element in an array of objects
      maxValue.push({ count: maxCount, value: sortedData[i] });
    }
  }

  // Getting the max frequency. If there are multiple elements with the same frequency, then we will get an array of objects.
  // The last element of the array will have the highest frequency.
  const maxFrequency = maxValue[maxValue.length - 1].count;

  // Separating the elements with the highest frequency and storing in a string
  const value = maxValue?.filter((item) => item.count === maxFrequency);
  const string = value?.map((item) => item.value.toFixed(3)).join(", ");

  // If all the elements have appeared only once, then there is no mode.
  return maxCount === 1 ? "There is no mode" : string;
};

//   const modeFlavanoid = mode(wineData, 3);
//   console.log("modeFlavanoid", modeFlavanoid);

const median = (wineData, alcohol, table) => {
  const dataClassWise = classWise(wineData, alcohol);
  const list = table === "Gamma" ? gammaList(dataClassWise) : dataClassWise;

  const sortedData =
    table === "Gamma"
      ? list?.sort(compareNumbers)
      : list?.map((item) => item.Flavanoids).sort(compareNumbers);

  if (sortedData.length % 2 === 0) {
    //  Median = [(n/2 + 1)th term + (n/2)th term]/2 ; if n is even
    // As in the list the index starts from 0, we need to subtract 1 from the length of the list to get the median.
    return (
      (sortedData[sortedData.length / 2] +
        sortedData[sortedData.length / 2 - 1]) /
      2
    ).toFixed(3);
  } else {
    // Median = [(n + 1)/2]th term ; if n is odd
    // As in the list the index starts from 0, we need to subtract 1 from the length of the list to get the median.

    return sortedData[(sortedData.length - 1) / 2].toFixed(3);
  }
};

//   const medianFlavanoid = median(wineData, 3);
//   console.log("medianFlavanoid", medianFlavanoid);

const mean = (wineData, alcohol, table) => {
  // To calculate the mean, you first add all the numbers together (3 + 11 + 4 + 6 + 8 + 9 + 6 = 47).
  // Then you divide the total sum by the number of scores used (47 / 7 = 6.7)

  const dataClassWise = classWise(wineData, alcohol);
  const list = table === "Gamma" ? gammaList(dataClassWise) : dataClassWise;
  const total = list?.reduce(
    (sum, item) => parseInt(sum) + (table === "Gamma" ? item : item.Flavanoids),
    0
  );

  return (total / list?.length).toFixed(3);
};

//   const meanFlavanoid = mean(wineData, 1);
//   console.log("meanFlavanoid", meanFlavanoid);

export { classWise, compareNumbers, mode, median, mean };
