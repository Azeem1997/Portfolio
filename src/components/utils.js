import { toast } from 'react-toastify';

const download = (e) => {
  toast.error('Resume Build In-progress, please come back later');
};

const contactMe = (e,setIsModalOpen) => {
  setIsModalOpen(true)
}

export const utils = {
  download,
  contactMe
}