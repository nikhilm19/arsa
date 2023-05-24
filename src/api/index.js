import axios from "axios";

const getProjects = async() =>{

    try {
        const data = (await axios.get("https://us-central1-officearsa-eaaa6.cloudfunctions.net/backendApp/projects/"))?.data?? null;
        return data;

    } catch (error) {
        
        console.log(error);
        return undefined;
    }

}

const getProject = async(projectName) =>{

    try {
        const data = (await axios.get(`https://us-central1-officearsa-eaaa6.cloudfunctions.net/backendApp/project/${projectName}`))?.data?? null;
        return data;

    } catch (error) {
        
        console.log(error);
        return undefined;
    }

}

export {

    getProject,
    getProjects

}
