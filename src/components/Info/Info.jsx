import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

//Khối đen thông tin đầu trang
function Info() {
    const { container } = styles;
    return (
        // bọc tất cả card bên trong
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default Info;
