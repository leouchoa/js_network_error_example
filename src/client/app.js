const PORT = 3000;

async function postRequestSentiment(inputText) {
  const url = "http://localhost:3000/request_sentiment";
  const data = { input_text: inputText };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Response data:", result);
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

document.querySelector(".form__news_text").addEventListener("submit", (_) => {
  // event.preventDefault();
  const inputText = document.getElementById("analyze_text").value;
  postRequestSentiment(inputText);
  console.log("worked");
});
