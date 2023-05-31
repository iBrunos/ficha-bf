import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function UploadImage() {
  const [imageSrc, setImageSrc] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // Adicionado o estado para guardar o item sendo editado
  const [items, setItems] = useState([]);
  const [avatar, setAvatar] = useState();
  const API_URL = 'https://ficha-bf-nine.vercel.app/user'; // Corrigido o nome da variável

  const fetchItems = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.get(`${API_URL}/${userId}`, config);
      // Converte o buffer da imagem em um array de bytes
      const imageBuffer = response.data.avatar.data; // obtém o buffer de imagem do response
      const blob = new Blob([new Uint8Array(imageBuffer)], {
        type: "image/png",
      }); // cria um objeto Blob a partir do buffer
      const imageUrl = URL.createObjectURL(blob); // cria um URL para o objeto Blob
      setImageSrc(imageUrl); // define a URL como a fonte da imagem
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const editItem = async (id) => {
    const token = localStorage.getItem('token');
    setIsEditing(true);
    setEditingItem(id);

    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const item = response.data;
      setImageSrc(item.avatar); // Alterado para usar a propriedade avatar do item
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = async (e) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem("userId");
      console.log("userId: ", userId)
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("userId", userId);

      await axios.put(`${API_URL}/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Atualização realizada com sucesso!');
      fetchItems();
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error('Erro ao realizar a atualização.');
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setImageSrc('');
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-900 h-[15.5rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="ml-2 mt-2 rounded-xl max-w-sm flex-col">
              <img
                name="avatar"
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
                    onClick={() => editItem(editingItem)} // Alterado para usar o ID do item sendo editado
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
                  onChange={(e) => setAvatar(e.target.files[0])}
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