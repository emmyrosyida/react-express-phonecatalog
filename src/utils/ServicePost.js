const ServicePost = async (url, body) => {
  console.log(url);
  let data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
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
