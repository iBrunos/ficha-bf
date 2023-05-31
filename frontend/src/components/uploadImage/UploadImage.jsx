import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function UploadImage() {
  const [imageSrc, setImageSrc] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const API_URL = 'https://api-bladefall.vercel.app/user';

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(`${API_URL}/${userId}`, config);

      if (response.data.length > 0) {
        const sheetData = response.data[0];
        // Do something with sheetData if needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    fetchItems();
  }, []);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);

    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const updatedData = {};

      if (imageSrc) {
        const imageFile = dataURItoBlob(imageSrc);
        updatedData.avatar = imageFile;
      }

      await axios.put(`${API_URL}/${userId}`, updatedData, config);
      toast.success('Avatar atualizado com sucesso!');
      setIsEditing(false);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
              <EditIcon className="text-black hover:text-white mt-2" />
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden mt-2 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg text-gray-900 sm:text-sm"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
