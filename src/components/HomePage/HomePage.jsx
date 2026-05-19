/**
 * =============================================================================
 * NHIỆM VỤ FILE NÀY (HomePage)
 * =============================================================================
 * - Đây là TRANG CHỦ: ghép header, banner, danh sách sản phẩm, footer.
 *
 * state listProducts:
 * - useState([]): ban đầu chưa có dữ liệu; sau khi API trả về sẽ cập nhật mảng sản phẩm.
 *
 * useEffect(..., []):
 * - Chạy MỘT LẦN sau khi component mount (lần đầu hiển thị trang).
 * - Bên trong gọi getProducts(): lấy dữ liệu từ backend, rồi setListProducts(res.contents).
 *
 * slice(0, 2) và slice(2):
 * - Chia mảng: 2 sản phẩm đầu cho khối Countdown + grid nhỏ; còn lại cho PopularProduct.
 *
 * Luồng dữ liệu: MySQL → Laravel API → getProducts → listProducts → ProductItem.
 * =============================================================================
 */
import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            {/* Các thanh công cụ đầu trang */}
            <MyHeader />
            <Banner />

            <Info />
            <AdvanceHeadling />

            {/* tại vì phần này có 2 ảnh thoi */}
            <HeadingListProduct data={listProducts.slice(0, 2)} />

            {/* từ 2 đến hết */}
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />

            <SaleHomepage />
            <MyFooter />
        </>
    );
}

export default HomePage;
