import axios from "axios";

async function getUsers(page) {
  const API_URL = `https://api.github.com/search/users?q=followers:%3E=1000&per_page=20&page=${page}`;

  try {
    const res = await axios.get(`${API_URL}`);
    return res.data.items;
  } catch (error) {
    console.log(error);
    throw new Error("errrrror");
  }
}

const USER_API = `https://api.github.com/users`;

// new token
// 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

async function getUser(title) {
  try {
    const response = await axios.get(`${USER_API}/${title}`, {
      headers: {
        "Content-Type": "application.json",
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("userrrrrr");
  }
}

async function getOrgs(title) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${title}/orgs`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getRepos(title) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${title}/repos`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUsers, getUser, getOrgs, getRepos };
