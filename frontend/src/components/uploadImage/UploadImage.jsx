import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function UploadImage() {
  const [imageSrc, setImageSrc] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [items, setItems] = useState([]);
  const API_URL_USER = 'https://api-bladefall.vercel.app/user';

  const fetchItems = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.get(API_URL_USER, config);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      setIsEditing(false);
      const updates = new FormData();

      if (selectedFile) {
        updates.append('avatar', selectedFile);
        updates.append('_id', userId);
      }

      try {
        await axios.put(`${API_URL_USER}/${userId}`, updates, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Atualização realizada com sucesso!');
        fetchItems();
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setImageSrc('');
    setSelectedFile(null);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-900 h-[15.5rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="ml-2 mt-2 rounded-xl max-w-sm flex-col">
              <img
                alt="Developer"
                src={
                  imageSrc ||
                  'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                }
                className="h-52 w-52 rounded-full object-cover px-30"
              />

              <label
                className="ml-[5.5rem] cursor-pointer w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg text-white sm:text-sm hover:border-blue-500 hover:shadow-md"
                htmlFor="upload-image"
              >
                {!isEditing ? (
                  <EditIcon
                    className="text-black hover:text-white mt-2"
                    onClick={handleEditClick}
                  />
                ) : (
                  <>
                    <CloseIcon
                      className="text-black hover:text-white mt-2 mr-2"
                      onClick={handleCancelClick}
                    />
                    <DoneIcon
                      className="text-black hover:text-white mt-2"
                      onClick={handleSaveClick}
                    />
                  </>
                )}
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadImage;