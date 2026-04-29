import axiosClient from './axiosClient';

//nhiều product dễ quản lí
const getProducts = async () => {
    const res = await axiosClient.get('/product');

    return res.data;
};

export { getProducts };
