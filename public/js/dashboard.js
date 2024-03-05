const newBlogBtn = document.querySelector(".new-blog");
const allBlogs = document.querySelector(".all-blog-container");
const makeBlogContainer = document.querySelector(".make-blog-container");

//Removes unessesary elements and makes a new form display block
const makeNewBlog = () => {
  newBlogBtn.style.display = "none";
  allBlogs.style.display = "none";

  makeBlogContainer.classList.remove("make-blog-unactive");
  makeBlogContainer.classList.add("make-blog-active");
};

//For showing blog that is clicked
const showBlog = async (event) => {
  const blogId = event.target.getAttribute("data-types");

  // Fetches all of blogs info
  try {
    const response = await fetch(`/api/blogs/${blogId}`);
    const blogData = await response.json();

    if (response.ok) {

      const updateContainer = document.querySelector(".update-blog-container");

      // Adds the container containing a form to update blog
      updateContainer.classList.remove("update-blog-unactive");
      updateContainer.classList.add("update-blog-active");

      //Removes unessesary elements and makes a new form display block
      newBlogBtn.style.display = "none";
      allBlogs.style.display = "none";

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

// For creating a new blog
const handleNewBlog = async (event) => {
  event.preventDefault();

  // Gets all of the users inputs to create a blog
  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();

  if (title && content) {
    // Sends to route to create blog
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

// For updating blog
const updateBlog = async (event) => {
  event.preventDefault();

  // Get all values for updating a blog
  const blogId = document
    .querySelector("#update-blog-form")
    .getAttribute("data-type");
  const title = document.querySelector("#new-blog-title").value.trim();
  const content = document.querySelector("#new-blog-content").value.trim();

  if (title && content) {
    // Sends to route to make a put request
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
