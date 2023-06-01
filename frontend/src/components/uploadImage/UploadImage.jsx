import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { toast, ToastContainer } from 'react-toastify';

export default function FormUsers() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [avatar, setAvatar] = useState();
  const [imageSrc, setImageSrc] = useState("");
  const API_URL = "https://api-bladefall.vercel.app/user";

  const fetchItems = async () => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    // definir o cabeçalho `Authorization` com o token JWT
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    // fazer uma solicitação HTTP GET para a rota protegida com o token JWT
    try {
      const response = await axios.get(`${API_URL}/${id}`, config);
      // Converte o buffer da imagem em um array de bytes
      const imageBuffer = response.data.avatar.data; // obtém o buffer de imagem do response
      const blob = new Blob([new Uint8Array(imageBuffer)], {
        type: "image/png",
      }); // cria um objeto Blob a partir do buffer
      const avatar = URL.createObjectURL(blob); // cria um URL para o objeto Blob
      setAvatar(avatar); // define a URL como a fonte da imagem
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();


    // Create a new FormData object
    const formData = new FormData();
    formData.append("avatar", avatar); // Add the image file to the form data


    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });
      setItems([...items, response.data]);
      setAvatar(""); // Reset the selected image file
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const editItem = async (id) => {
    const token = localStorage.getItem("token");

    setEditingItem(id);
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const item = response.data;

  };

  const updateItem = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    console.log("userid", id)
    const updatedItem = {
      _id: id,
      avatar,
    };
    const formData = new FormData();
    formData.append("_id", updatedItem._id);
    formData.append("avatar", updatedItem.avatar); // Add the image file to the form data
    const token = localStorage.getItem("token");

    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
      },
    });
    setItems(
      items.map((item) => (item._id === editingItem ? response.data : item))
    );
    setAvatar("");
    setEditingItem(null);
    fetchItems();
  }

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-900 h-[15.5rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="ml-2 mt-2 rounded-xl max-w-sm flex-col">
              {/* Adicione o elemento <img> adicional para exibir a imagem selecionada */}
              {avatar && (
                 <img
                 src={avatar}
                 alt="Avatar do Usúario"
                 className="w-56 h-56 rounded-full border lg:border-2"
               />
              )}
              <form
                onSubmit={updateItem}
                className="flex lg:flex-row flex-col mb-0 mt-1  pl-8 pt-1 pb-2 ml-0"
              >
                <label
                  htmlFor="meuArquivo"
                  className="text-gray-400 hover:text-white px-4 py-2 rounded cursor-pointer lg:mt-0 mt-2 "
                >
                 <EditIcon/>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="meuArquivo"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="my-0 border-gray-300 rounded-sm outline-none appearance-none placeholder-pink-500 text-gray-500 focus:border-pink-500 hidden"
                />
                <button
                  type="submit"
                  className="text-gray-400 hover:text-white px-4 py-2 rounded cursor-pointer lg:mt-0 mt-2 "
                >
                  {editingItem !== null ? <EditIcon/> : <DoneIcon/>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}