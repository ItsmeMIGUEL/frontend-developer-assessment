// a fetch API call using async/await.
const mockUser = {
  id: 1,
  name: "Jane Doe",
  email: "jane@example.com",
};

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 1000);
  });
}

async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

getUserData();
