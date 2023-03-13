export const fetchUserData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed get data');
  }
  const data = await response.json();
  return data;
};

export const postUserData = async userId => {
  try {
    const userData = await fetchUserData(userId);
    return userData;
  } catch (error) {
    alert(error.message);
  }
};
