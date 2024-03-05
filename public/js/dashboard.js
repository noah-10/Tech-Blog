const newBlogBtn = document.querySelector(".new-blog");
const allBlogs = document.querySelector(".all-blog-container");
const makeBlogContainer = document.querySelector(".make-blog-container");

const makeNewBlog = () => {
  newBlogBtn.style.display = "none";
  allBlogs.style.display = "none";

  makeBlogContainer.classList.remove("make-blog-unactive");
  makeBlogContainer.classList.add("make-blog-active");
};

const showBlog = async (event) => {
  const blogId = event.target.getAttribute("data-types");

  try {
    const response = await fetch(`/api/blogs/${blogId}`);
    const blogData = await response.json();

    if (response.ok) {

      const updateContainer = document.querySelector(".update-blog-container");

      updateContainer.classList.remove("update-blog-unactive");
      updateContainer.classList.add("update-blog-active");

      newBlogBtn.style.display = "none";
      allBlogs.style.display = "none";
      // const blogs = document.querySelectorAll(".blog-container")

      const title = blogData.title;
      const content = blogData.content;

      const oldTitle = document.querySelector("#new-blog-title");
      const oldContent = document.querySelector("#new-blog-content");
      const blogForm = document.querySelector("#update-blog-form");

      blogForm.setAttribute("data-type", blogId);
      oldTitle.value = title;
      oldContent.value = content;
    } else {
      console.error("Failed to fetch blog data");
    }
  } catch (err) {
    console.log(err);
  }
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
      console.log(response.statusText, "Error with making blog");
    }
  } else {
    console.log(response.statusText, "Error getting values");
  }
};

const updateBlog = async (event) => {
  event.preventDefault();

  const blogId = document
    .querySelector("#update-blog-form")
    .getAttribute("data-type");
  const title = document.querySelector("#new-blog-title").value.trim();
  const content = document.querySelector("#new-blog-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      console.log("Error with updating blog");
    }
  } else {
    console.log("Error with getting values");
  }
};

document
  .querySelector("#update-blog-form")
  .addEventListener("submit", updateBlog);

const blogContainer = document.querySelectorAll(".blog-container");
blogContainer.forEach((blog) => {
  blog.addEventListener("click", showBlog);
});

document
  .querySelector("#new-blog-form")
  .addEventListener("submit", handleNewBlog);

document.querySelector("#new-blog").addEventListener("click", makeNewBlog);
