import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import { getProducts } from '@/apis/productsService';
import styles from './styles.module.scss';

// slug là tên danh mục sản phẩm, nếu có slug thì gọi API getProducts với slug, nếu không thì gọi API getProducts với rỗng
function CategoryPage() {
    const { slug } = useParams();
    const [listProducts, setListProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        getProducts(slug)
            .then((res) => setListProducts(res.contents ?? []))
            .catch(() => {
                setListProducts([]);
                setError('Không tải được sản phẩm. Kiểm tra php artisan serve.');
            });
    }, [slug]);

    return (
        <>
            <MyHeader />
            <MainLayout>
                <div className={styles.page}>
                    <h1 className={styles.title}>Danh mục: {slug}</h1>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.grid}>
                        {listProducts.map((item) => (
                            <ProductItem
                                key={item.id}
                                id={item.id}
                                src={item.images?.[0]}
                                prevSrc={item.images?.[1]}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
                    {!error && listProducts.length === 0 && (
                        <p>Không có sản phẩm trong danh mục này.</p>
                    )}
                </div>
            </MainLayout>
            <MyFooter />
        </>
    );
}

export default CategoryPage;