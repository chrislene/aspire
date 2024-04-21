export function getRandomNumber(digit: number) {
  return Math.random().toFixed(digit).split('.')[1];
}

export function generateExpiryDate() {
  const month = Math.floor(Math.random() * 12) + 1;
  const currentYear = new Date().getFullYear();
  const year = currentYear + Math.floor(Math.random() * 10);
  const updatedMonth = month < 10 ? '0' + month : month.toString();
  const updatedYear = year.toString().slice(-2);
  return updatedMonth + '/' + updatedYear;
}
