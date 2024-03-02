const newBlogBtn = document.querySelector(".new-blog");
const allBlogs = document.querySelector(".blog-container");
const makeBlogContainer = document.querySelector(".make-blog-container");

const makeNewBlog = () => {
  newBlogBtn.style.display = "none";
  allBlogs.style.display = "none";

  makeBlogContainer.classList.remove("make-blog-unactive");
  makeBlogContainer.classList.add("make-blog-active");
};

const handleNewBlog = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText, "Error with making blog");
    }
  } else {
    alert(response.statusText, "Error getting values");
  }
};

document
  .querySelector("#new-blog-form")
  .addEventListener("submit", handleNewBlog);

document.querySelector("#new-blog").addEventListener("click", makeNewBlog);
