import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            {/* 1 khối liên quan đến nhau */}
            <div className={container}>
                {/* Các thanh công cụ đầu trang */}
                <MyHeader />
                <Banner />
            </div>
        </div>
    );
}

export default HomePage;
