/**
 * Khối 1: 
 * input: num1, num2, num3
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          Nếu: num1 % 2 == 0
 *                  => soChan = ++ soChan
 *          Ngược lại: 
 *                  => soLe = ++ soLe
 *          Nếu: num2 % 2 == 0
 *                  => soChan = ++ soChan
 *          Ngược lại: 
 *                  => soLe = ++ soLe
 *          Nếu: num3 % 2 == 0
 *                  => soChan = ++ soChan
 *          Ngược lại: 
 *                  => soLe = ++ soLe
 *       + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: 
 * output: soChan, soLe    
 */

function chanLe() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    var soChan = 0;
    var soLe = 0;

    if (num1 % 2 == 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    if (num2 % 2 == 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    if (num3 % 2 == 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    document.getElementById("soChanLe").innerHTML = "Số chẵn: " + soChan + "<br> Số Lẽ: " + soLe;
}