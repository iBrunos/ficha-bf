import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

function UploadImage() {
    const [imageSrc, setImageSrc] = useState('');

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setImageSrc(e.target.result);
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className="bg-gray-900 h-[15.5rem] w-[14rem] rounded-xl object-cover px-30 ml-2 mr-2 mt-2">
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className="ml-2 mt-2 rounded-xl max-w-sm flex-col ">
                    <img
                        alt="Developer"
                        src={
                            imageSrc ||
                            'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                        }
                        className="h-52 w-52 rounded-full object-cover px-30"
                    />
                    <label className='ml-[5.5rem] cursor-pointer w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg dark:text-white sm:text-sm hover:border-blue-500 hover:shadow-md' htmlFor='upload-image'>
                        <EditIcon />
                    </label>
                    <input
                        type="file"
                        id="upload-image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden mt-2 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg dark:text-white sm:text-sm"
                    />
                </div>
            </div>
        </div>
        </div>
    );
}

export default UploadImage;

