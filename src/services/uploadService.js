// import { toast } from 'react-toastify';
// import axios from 'axios';

// export const uploadImage = async event => {
//   let toastId = null;

//   const image = await getImage(event);
//   if (!image) return null;

//   const formData = new FormData();
//   formData.append('image', image, image.name);
//   const response = await axios.post('api/upload', formData, {
//     onUploadProgress: ({ progress }) => {
//       if (toastId) toast.update(toastId, { progress });
//       else toastId = toast.success('Uploading...', { progress });
//     },
//   });
//   toast.dismiss(toastId);
//   return response.data.imageUrl;
// };

// const getImage = async event => {
//   const files = event.target.files;

//   if (!files || files.length <= 0) {
//     toast.warning('Upload file is nott selected!', 'File Upload');
//     return null;
//   }

//   const file = files[0];

//   if (file.type !== 'image/jpeg') {
//     toast.error('Only JPG type is allowed', 'File Type Error');
//     return null;
//   }

//   return file;
// };


import { toast } from 'react-toastify';
import axios from 'axios';
import BACKEND_URL from './bk.js'; // Import the backend URL configuration

export const uploadImage = async (event) => {
  let toastId = null;

  const image = await getImage(event);
  if (!image) return null;

  const formData = new FormData();
  formData.append('image', image, image.name);

  try {
    const response = await axios.post(`${BACKEND_URL}/api/upload`, formData, {
      onUploadProgress: ({ progress }) => {
        if (toastId) toast.update(toastId, { progress });
        else toastId = toast.success('Uploading...', { progress });
      },
    });
    toast.dismiss(toastId);
    return response.data.imageUrl;
  } catch (error) {
    toast.error('Error uploading image', 'Upload Error');
    return null;
  }
};

const getImage = async (event) => {
  const files = event.target.files;

  if (!files || files.length <= 0) {
    toast.warning('Upload file is not selected!', 'File Upload');
    return null;
  }

  const file = files[0];

  if (file.type !== 'image/jpeg') {
    toast.error('Only JPG type is allowed', 'File Type Error');
    return null;
  }

  return file;
};

