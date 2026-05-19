import axiosClient from './axiosClient';

const getCategories = async () => {
    const res = await axiosClient.get('/categories');
    return res.data;
};

export { getCategories };