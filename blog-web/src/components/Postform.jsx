import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogpost from "./Blogpost";
import BlogForm from "./BlogForm";

const Postform = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [reading_time, setReading_time] = useState("");
  const [content, setContent] = useState("");
  const [contentTwo, setContentTwo] = useState("");
  const [search, setSearch] = useState("");
  const [currentpage, setCurrentPage] = useState(1);
  const [selectedcategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState(null);
  const [picture, setPicture] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [postId, setPostId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const pageSize = import.meta.env.VITE_PAGE_SIZE; // Use environment variable

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (query = "") => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/blogposts/?search=${query}&_=${Date.now()}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("reading_time", reading_time);
      formData.append("content", content);
      formData.append("contentTwo", contentTwo);
      if (picture) formData.append("picture", picture);
      if (image) formData.append("image", image);

      if (editMode) {
        await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/blogposts/${postId}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditMode(false);
        setPostId(null);
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/blogposts/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      fetchPosts();
      resetForm();
      setIsFormVisible(false);
    } catch (error) {
      console.error(
        "Error creating or updating post:",
        error.response ? error.response.data : error.message
      ); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(search);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/blogposts/${id}/`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setAuthor(post.author);
    setCategory(post.category);
    setReading_time(post.reading_time);
    setContent(post.content);
    setContentTwo(post.contentTwo);
    setImage(post.image);
    setPicture(post.picture);
    setEditMode(true);
    setPostId(post.id);
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    setReading_time("");
    setContent("");
    setContentTwo("");
    setImage(null);
    setPicture(null);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 mb-10">
      <div className="flex flex-col md:flex-row">
        <h1 className="text-2xl font-bold mb-4">Trending Blog Posts</h1>

        <button
          onClick={toggleFormVisibility}
          className="bg-green-500 hover:text-orange-500 text-white p-2 rounded capitalize md:mb-4  md:ml-36"
        >
          {isFormVisible ? "Close Form" : "Post blog Here"}
        </button>
      </div>

      {isFormVisible && (
        <BlogForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          category={category}
          setCategory={setCategory}
          reading_time={reading_time}
          setReading_time={setReading_time}
          content={content}
          setContent={setContent}
          contentTwo={contentTwo}
          setContentTwo={setContentTwo}
          setPicture={setPicture}
          setImage={setImage}
          editMode={editMode}
        />
      )}
      
      <Blogpost
        blogs={posts}
        currentpage={currentpage}
        selectedcategory={selectedcategory}
        pageSize={pageSize}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Postform;
