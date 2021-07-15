// Bài 1

// Viết chương trình kiểm tra một giá trị có phải một string hay không
// value là giá trị nhận vào
function isString(value) {
    if (typeof value === 'string' || value instanceof String) {
        return true;
    } else {
        return false;
    }
}

// Bài 2

// Viết chương trình chuyển đổi một chuỗi thành dạng title
// VD: hello World! -> Hello world!
// str là chuỗi nhận vào
function title(str) {
    if(str.length =-0) return ""
    return str[0].toUpperCase() + str.slice(1).toLowerCase();

}

// Bài 3

// Viết chương trình chuyển đổi một chuỗi thành dạng parameterize (url)
// Ví dụ: Chương trình Hello World -> chuong-trinh-hello-world
// str là chuỗi nhận vào
function parameterize(str) {
    // Loại bỏ các ký tự đặc biệt
    str = str.toLowerCase();

    // Loại bỏ ký tự có dấu
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");

    // Xóa các ký tự đặc biệt
    str = str.replace(/[^a-zA-Z0-9 ]/g, " ");
    // Loại bỏ nhiều dấu cách ở giữa (nếu có)
    str = str.replace(/\s{2,}/g, " ");

    // return value
}

// Ví dụ cho đoạn văn sau
let para =
    "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

// Bài 4

// Viết chương trình tìm highlight (in hoa) tất các từ khóa xuất hiện trong đoạn văn
// VD: 'bạn' -> "Xin chào các BẠN! ..."
// key là từ khóa
// key không chứa ký tự đặc biệt
// Từ khóa phải là một từ riêng biệt (phía sau có dấu cách hoặc dấu câu)
// KHÔNG phân biệt chữ hoa chữ thường
// Code sẵn là gợi ý
function highlight(para, key) {
    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ ký tự đặc biệt
    modifiedPara = modifiedPara.replaceAll(".", " ");
    modifiedPara = modifiedPara.replaceAll(",", " ");
    modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";

    // return para
    let index = modifiedPara.indexOf(modifiedKey);

    if (index === -1) return para;

    let p = para.slice(0, index) + para.slice(index, index + key.length).toUpperCase() + para.slice(index + key.length)
    return p;
}

// Bài 5

// Viết chương trình lấy ra câu đầu tiên xuất hiện từ khóa, đồng thời highlight (in hoa) từ khóa
// Code sẵn là gợi ý
function firstSentence(para, key) {
    // Chuyển đổi tất cả dấu kết thúc câu khác như !; thành .
    let onlyDot = para.replaceAll("!", ".");

    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ dấu kết thúc câu
    modifiedPara = modifiedPara.replaceAll(".", " ");
    modifiedPara = modifiedPara.replaceAll(",", " ");
    modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";

    // Nếu không có từ khóa, return null
    let index = modifiedPara.indexOf(modifiedKey);

    if (index === -1) return null;

    let start = onlyDot.lastIndexOf(".", index);
    let end = onlyDot.indexOf(".", index);

    para = para.slice(start + 1, end + 1).trim();

    console.log(highlight(para, key));
    return highlight(para, key);
    // Nếu có, return câu đó kèm highlight từ khóa
}

// Bài 6

// Viết chương trình tính số ngày còn lại đến tết dương lịch năm sau
function dayLeft() {
    // return number
    let date = new Date();

    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

    let nextYear = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0);

    let left = nextYear.getTime() - today.getTime();
    console.log(left / 1000 / 60 / 60 / 24);
    return left / 1000 / 60 / 60 / 24;
}

// Bài 7

// Viết chương trình tính số tuổi theo ngày tháng năm sinh
// Tính chính xác theo ngày
// birthday là chuỗi ngày tháng năm sinh theo format "YYYY-MM-DD"
// Kiểm tra ngày tháng truyền vào có hợp lệ hay không
// Ví dụ birthday truyền vào và ngày thực tế tạo ra không khớp, hoặc birthday từ tương lai
// Nếu không hợp lệ thì trả về NaN
function calcAge(birthday) {
    // Nếu birthday không khớp format "YYYY-MM-DD"
    if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(birthday)) return NaN;

    // return number
}

// Bài 8

// Viết chương trình tạo mã màu HEX ngẫu nhiên
function randHex() {
    // return hex
    let hex = "";

    for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 256);
        let colorString = color.toString(16);
        colorString = colorString.padStart(2, "0");
        hex += colorString;
    }

    return hex;
}
