const addCommentBtn = document.querySelector(".add-comment-btn");
const newCommentForm = document.querySelector(".comment-text");

// For enabling being able to see all comments
const viewAddComment = () => {
  newCommentForm.classList.remove("new-comment-unactive");
  newCommentForm.classList.add("new-comment-active");

  addCommentBtn.style.display = "none";
};

// For creating a new comment
const handleNewComment = async (event) => {
  event.preventDefault();

  // Gets all of the important data
  const blogId = event.target.getAttribute("data-types");
  const comment = document.querySelector("#newComment").value.trim();

  if (blogId && comment) {
    //Sends post request to make a new comment
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ comment, blogId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText, "Error with making comment");
    }
  }else{
    console.log("Error with getting values")
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", handleNewComment);
document
  .querySelector("#comment-btn")
  .addEventListener("click", viewAddComment);
