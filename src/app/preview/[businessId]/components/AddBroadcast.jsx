import { useState } from 'react';

function AddBroadcast({id}) {
  const [formData, setFormData] = useState({
    id:id,
    title: '',
    description: '',
    file: '',
  });
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    const currentDate = new Date();
  
    // Format date as "Sep 27, 2024 09:42 AM IST"
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }) + ' ' + 
    currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
  
    const broadcastData = {
      title: formData.title,
      date: formattedDate, // Use the formatted date here
      content: formData.description,
      image: formData.imageUrl,
    };
  
    try {
      const response = await fetch(`http://localhost:5000/api/entries/${id}/broadcasts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(broadcastData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  console.log("tettt")
      const data = await response.json();
      console.log('Broadcast added:', data);
      // Optional: Reset form fields after successful submission
      setFormData({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding broadcast:', error);
    }
  }
  
  

  return (
    <div className="shadow-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Broadcasts</h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-base font-medium text-[#B6B6B6]">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Title"
        />

        <label className="block text-base font-medium text-[#B6B6B6] mt-4">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Description"
          rows="3"
        />

        <label className="block text-base font-medium text-[#B6B6B6] mt-4">Image</label>
        <div
          className={`mt-1 block w-full h-[150px] border-2 ${
            isDragging ? 'border-blue-500' : 'border-gray-300'
          } border-dashed rounded-md flex items-center justify-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="text-gray-500 cursor-pointer"
          >
            {file ? file.name : 'Drag and drop an image here or click to upload'}
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-[53px] bg-[#13A8DA] text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create Broadcast
        </button>
      </form>
    </div>
  );
}

export default AddBroadcast;
