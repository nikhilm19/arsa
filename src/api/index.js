import axios from "axios";

const HOST_URL = "https://us-central1-officearsa-eaaa6.cloudfunctions.net/backendApp";
// const HOST_URL = "http://localhost:8000";

const getProjects = async () => {
  try {
    const data = (await axios.get(`${HOST_URL}/get/projects/`))?.data ?? null;
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const getProject = async (projectName) => {
  try {
    const data =
      (await axios.get(`${HOST_URL}/get/project/${projectName}`))?.data ??
      null;
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export { getProject, getProjects };
