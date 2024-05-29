import React from "react";

const BlogForm = ({
  handleSubmit,
  title,
  setTitle,
  author,
  setAuthor,
  category,
  setCategory,
  reading_time,
  setReading_time,
  content,
  setContent,
  contentTwo,
  setContentTwo,
  setPicture,
  setImage,
  editMode,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-4"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editMode ? "Edit Post" : "Create New Post"}
      </h2>

      <div className="mb-2 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="flex-1 p-2 border rounded"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="flex-1 p-2 border rounded"
          required
        />
      </div>

      <div className="mb-2 flex flex-col md:flex-row gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="POPULAR">Popular</option>
          <option value="STARTUPS">Startups</option>
          <option value="SECURITY">Security</option>
          <option value="AI">AI</option>
          <option value="APPS">Apps</option>
          <option value="TECH">Tech</option>
          <option value="TRENDING">Trending</option>
          <option value="FOOD">Food</option>
        </select>
        <input
          type="number"
          value={reading_time}
          onChange={(e) => setReading_time(e.target.value)}
          placeholder="Reading Time (minutes)"
          className="flex-1 p-2 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <textarea
          value={contentTwo}
          onChange={(e) => setContentTwo(e.target.value)}
          placeholder="Additional Content"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2 flex flex-col md:flex-row gap-4">
        <input
          type="file"
          onChange={(e) => setPicture(e.target.files[0])}
          className="flex-1 p-2 border rounded"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="flex-1 p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editMode ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default BlogForm;
