export const fetchIndexData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Index API resolved");
      resolve();
    }, 1000);
  });
};

export const fetchAboutData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("About API resolved");
      resolve();
    }, 2000);
  });
};

export const fetchContactData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Contact API resolved");
      resolve();
    }, 500);
  });
};
