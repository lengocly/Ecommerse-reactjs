import { useEffect, useRef, useState } from 'react';

//hook xử lý hiệu ứng trượt sang 2 bên cho ảnh khi cuộn xuống dưới
const useTranslateX = () => {
    //sự kiện khi lướt chuột xuống lên của ảnh
    const [scrollDriction, setScrollDrection] = useState(null);

    //biến để lưu vị trí cuộn trước đó
    const previousScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPoisition] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0); //lưu vị trí cuộn hiện tại

    //biến lấy ra vị trí cuộn hiện tại
    const scrollTracing = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }

        //cập nhật vị trí cuộn trước đó, tránh trường hợp cuộn lên trên cùng sẽ có giá trị âm
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    //tạo hàm để xử lý khi cuộn xuống dưới trượt sang 2 bên
    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 3500) {
            setTranslateXPoisition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDriction === 'up') {
            //khi cuộn lên trên cố định
            setTranslateXPoisition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracing); //đăng ký sự kiện cuộn

        return () => {
            window.removeEventListener('scroll', scrollTracing); //hủy đăng ký sự kiện cuộn khi component unmount
        };
    }, []);

    //gọi hàm xử lý khi cuộn xuống dưới trượt sang 2 bên
    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition, handleTranslateX, scrollPosition };
};
export default useTranslateX;
