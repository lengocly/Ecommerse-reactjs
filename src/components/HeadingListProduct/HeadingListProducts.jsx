import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

//3 ảnh sp đầu
function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;

    //do nhận targetDate
    //const targetDate = '2026-12-31T00:00:00'; //ngày tương lai
    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />

                <div className={containerItem}>
                    {/* data.map để render ra 4 phần tử phù hợp productitem*/}
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
