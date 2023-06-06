import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { toast, ToastContainer } from "react-toastify";

export default function FormUsers() {
  const [avatar, setAvatar] = useState("");
  const API_URL = "https://api-bladefall.vercel.app/user";

  const fetchItems = async () => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.get(`${API_URL}/${id}`, config);
      const avatarUrl = response.data.avatar;
      setAvatar(avatarUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const updateItem = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const updatedItem = {
      _id: id,
      avatar,
    };
    const formData = new FormData();
    formData.append("avatar", updatedItem.avatar[0]);
    const token = localStorage.getItem("token");

    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Avatar atualizado com sucesso!");
    fetchItems();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-900 h-[15.5rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="ml-2 mt-2 rounded-xl max-w-sm flex-col">
              {avatar && (
                <img
                  src={avatar}
                  alt="Avatar do Usuário"
                  className="w-56 h-56 rounded-full border lg:border-2"
                />
              )}

              <form
                onSubmit={updateItem}
                className="flex lg:flex-row flex-col mb-0 mt-1  pl-8 pt-1 pb-2 ml-0"
              >
                <label
                  htmlFor="meuArquivo"
                  className="text-gray-400 hover:text-white px-4 py-2 rounded cursor-pointer lg:mt-0 mt-2"
                >
                  <EditIcon />
                </label>
                <input
                  id="meuArquivo"
                  type="file"
                  onChange={handleFileSelect}
                  className="my-0 border-gray-300 rounded-sm outline-none appearance-none placeholder-pink-500 text-gray-500 focus:border-pink-500"
                />

                <button
                  type="submit"
                  className="text-gray-400 hover:text-white px-4 py-2 rounded cursor-pointer lg:mt-0 mt-2"
                >
                  <DoneIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}