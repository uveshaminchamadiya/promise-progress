export const fetchIndexData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("Index API resolved");
      resolve({ msg: "Index API resolved" });
    }, 1000);
  });
};

export const fetchAboutData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("About API resolved");
      resolve({ msg: "About API resolved" });
    }, 2000);
  });
};

export const fetchContactData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("Contact API resolved");
      resolve({ msg: "Contact API resolved" });
    }, 500);
  });
};
