import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProducts';

// chứa tất cả trang web
function HomePage() {
    const { container } = styles;
    return (
        <div>
            {/* 1 khối liên quan đến nhau */}
            <div className={container}>
                {/* Các thanh công cụ đầu trang */}
                <MyHeader />
                <Banner />

                <Info />
                <AdvanceHeadling />

                <HeadingListProduct />
            </div>
        </div>
    );
}

export default HomePage;
