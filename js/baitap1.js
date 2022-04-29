/**
 * Khối 1: 
 * input: a, b, c
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Ép kiêu
 *      + Kiểm tra
 *          Nếu: a < b && b < c
 *                  => a < b < c
 *          Nếu: c < b && b < a
 *                  => c < b < a
 *          Nếu: b < a && a < c
 *                  => b < a < c
 *          Nếu: c < a && a < b
 *                  => c < a < b
 *          Nếu: b < c && c < a
 *                  => b < c < a
 *          Nếu: a < c && c < b
 *                  => a < c < b
 *          Ngược lại 
 *                  => Không hợp lệ
 *       + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: 
 * output: soSanh    
 */

function minMax() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;

    var soSanh = a + "<" + b + "<" + c;

    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (a < b && b < c) {
        soSanh = a + "<" + b + "<" + c;
    } else if (c < b && b < a) {
        soSanh = c + "<" + b + "<" + a;
    } else if (b < a && a < c) {
        soSanh = b + "<" + a + "<" + c;
    } else if (c < a && a < b) {
        soSanh = c + "<" + a + "<" + b;
    } else if (b < c && c < a) {
        soSanh = b + "<" + c + "<" + a;
    } else if (a < c && c < b) {
        soSanh = a + "<" + c + "<" + b;
    } else {
        soSanh = "Không hợp lệ";
    }

    document.getElementById("sSanh").innerHTML = "Thứ tự từ bé đến lớn: " + soSanh;
}
