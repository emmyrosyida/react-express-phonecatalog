const ServicePost = async (url) => {
  // Add Task
  let data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((req) => {
      return req;
    })
    .catch((err) => {
      return err;
    });

  return data;
};

export default ServicePost;
