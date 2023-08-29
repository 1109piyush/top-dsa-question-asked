// try catch we use aync await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; // Re-throw the error to propagate it further if needed.
  }
}

// Usage: we donot use aync await in .then
fetchUserData(123)
  .then((userData) => {
    // Handle the user data
    console.log('User Data:', userData);
  })
  .catch((error) => {
    // Handle any errors from the fetchUserData function
    console.error('Error in fetchUserData:', error);
  });
