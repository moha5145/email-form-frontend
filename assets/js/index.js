const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  // $.querySelector("#login").addEventListener("click", () => {
  //   $.querySelector(".modal").classList.remove("hidden");
  //   $.querySelector("body").classList.add("disable");
  // });

  // $.querySelector("#icon-times").addEventListener("click", () => {
  //   $.querySelector(".modal").classList.add("hidden");
  //   $.querySelector("body").classList.remove("disable");
  // });

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#description").value,
    };

    const response = await axios.post("https://email-form-tripadvisor.herokuapp.com/form", data);
    alert(response.data.message);
    console.log(response.data, data);
  });
});
