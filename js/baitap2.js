/**
 * Khối 1: 
 * input: user, buoi
 * (Vì dùng Form select/option nên gắn trị value cụ thể cho từng option)
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *      + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: 
 * output: uesr + buoi    
 */

function chaoHoi() {
    var user = document.getElementById("nguoiDung").value;
    var buoi = document.getElementById("buoi").value;
    // console.log(user, buoi);
    document.getElementById("chao").innerHTML = user + ". " + buoi;
}


// function chaoH() {

//     var user = document.getElementById("nguoiDung").value;
//     var buoi = document.getElementById("buoi").value;

//     document.getElementById("chao").innerHTML = "Chào " + user + ". Chúc buổi " + buoi + " vui vẻ.";
// }