export async function make_request(api_key, input_text) {
  const formdata = new FormData();
  formdata.append("key", api_key);
  formdata.append("txt", input_text);
  formdata.append("lang", "auto");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions,
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
  return response;
}
