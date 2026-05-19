/**
 * =============================================================================
 * NHIỆM VỤ FILE NÀY (axiosClient)
 * =============================================================================
 * - Tạo một “client” Axios đã cấu hình sẵn: baseURL, timeout, header JSON.
 * - Mọi file gọi API (vd: productsService.js) chỉ việc axiosClient.get/post...
 *   đường dẫn tương đối sẽ nối vào baseURL (vd: get('/product') → .../api/v1/product).
 *
 * baseURL:
 * - Ưu tiên biến môi trường VITE_API_BASE_URL (khai báo trong file .env của Vite).
 * - Mặc định trỏ Laravel local khi học: http://127.0.0.1:8000/api/v1
 * - Có thể đổi sang API khác khi deploy.
 *
 * Lưu ý: sau khi sửa .env phải tắt mở lại `npm run dev`.
 * =============================================================================
 */
import axios from 'axios';

const axiosClient = axios.create({
    baseURL:
        import.meta.env.VITE_API_BASE_URL ||
        'http://127.0.0.1:8000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
