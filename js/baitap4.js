/**
 * Khối 1: 
 * input: a, b, c
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Ép kiểu
 *      + Kiểm tra
 *          Nếu: a + b > c && b + c > a && c + a > b
 *                  => Tam giác
 *                  Nếu: a == b && a == c
 *                          => Tam giác đều
 *                  Nếu: a == b || a == c || b == c
 *                          => Tam giác cân
 *                  Nếu: a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b
 *                          => Tam giác vuông
 *                  Ngược lại: 
 *                          => Tam giác thường
 *          Ngược lại 
 *                  => Sai dữ liệu
 *       + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: 
 * output: ketQua   
 */

function tamGiac() {
    var a = document.getElementById("canhA").value;
    var b = document.getElementById("canhB").value;
    var c = document.getElementById("canhC").value;

    var a = Number(a);
    var b = Number(b);
    var c = Number(c);

    var ketQua = "";

    if (a + b > c && b + c > a && c + a > b) {
        if (a == b && a == c) {
            ketQua = "Tam giác đều";
        } else if (a == b || a == c || b == c) {
            ketQua = "Tam giác cân";
        } else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            ketQua = "Tam giác vuông";
        } else {
            ketQua = "Tam giác thường";
        }
    } 
    else {
        ketQua = "Sai dữ liệu";
    }

    document.getElementById("aBC").innerHTML = "Tam giác ABC là: " + ketQua;
}