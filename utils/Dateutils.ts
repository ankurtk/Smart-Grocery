export const getExpiryStatus = (expiry: string): 'green' | 'yellow' | 'red' => {
  const today = new Date();
  const exp = new Date(expiry);
  const diffInTime = exp.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

  if (diffInDays > 5) return 'green';
  if (diffInDays > 0) return 'yellow';
  return 'red';
};
