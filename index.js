import { fetchAboutData, fetchContactData, fetchIndexData } from "./API/api.js";
import { runPromise } from "./utils/runPromise.js";


const promises = [fetchIndexData(), fetchAboutData(), fetchContactData()];

const getProgress = (percentage) => {
  console.log(`${percentage}% completed`);
}

runPromise(promises, getProgress);
