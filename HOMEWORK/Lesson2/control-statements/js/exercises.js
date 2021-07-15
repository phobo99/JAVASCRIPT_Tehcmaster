// Bài 1

// Viết chương trình kiểm tra và in ra số lớn nhất trong 3 số
// a, b, c là 3 số nhập vào
function maxOfThree(a, b, c) {
    let max = a;
    if (max < b) {
        max = b;
    } if (max < c) {
        max = c;
    }
    return max;
}

// Bài 2

// Viết chương trình nhập một tháng trong năm, trả về mùa tương ứng: Spring, Summer, Autumn, Winter
// month là tháng nhập vào
function getSeason(month) {
    let season;
    switch (month) {
        case 1: case 2: case 3:
            season = "spring";
            break;
        case 4: case 5: case 6:
            season = "summer";
            break;
        case 7: case 8: case 9:
            season = "autumn";
            break;
        case 10: case 11: case 12:
            season = "winter";
            break;
        default:
            season = NaN;
    }
    return season
}

// Bài 3

// Viết chương trình kiểm tra một năm có phải năm nhuận hay không
// year là năm nhập vào
function isLeapYear(year) {
    let leap;
    if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        leap = true;
    } else {
        leap = false;
    }
    return leap;
}

// Bài 4

// Viết chương trình quy đổi điểm thang 10 sang điểm chữ ABCDF
// 0 - 3.99 -> F
// 4.0 - 5.49 -> D
// 5.5 - 6.99 -> C
// 7.0 - 8.49 -> B
// 8.5 - 10 -> A
// point là điểm nhập vào
function calcGrade(point) {
    let result;
    if (point >= 0 && point <= 3.99) {
        result = 'F';
    } else if (point >= 4.0 && point <= 5.49) {
        result = 'D';
    } else if (point >= 5.5 && point <= 6.99) {
        result = 'C';
    } else if (point >= 7.0 && point <= 8.49) {
        result = 'B';
    } else if (point >= 8.5 && point <= 10) {
        result = 'A';
    } else {
        result = NaN;
    }
    return result;
}

// Bài 5
// Viết chương trình giải phương trình bậc 1 ax + b = 0
// Lưu ý các điều kiện phương trình
// Trường hợp vô nghiệm thì trả về null
// Trường hợp vô số nghiệm thì trả về NaN
// a, b là hệ số nhập vào
function linear(a, b) {
    // return number
}

// Bài 6

// Viết chương trình giải phương trình bậc 2 ax2 + bx + c = 0
// Lưu ý các điều kiện phương trình
// Căn bậc 2 sử dụng Math.sqrt()
// a, b, c là hệ số nhập vào
// Trường hợp vô nghiệm thì trả về null
// Trường hợp vô số nghiệm thì trả về NaN
// Nghiệm đặt trong một object VD: {x1: value, x2: value} (cả trường hợp nghiệm kép)
// Trường hợp a = 0 thì giải phương trình bậc nhất, trả về 1 nghiệm x
function quadratic(a, b, c) {
    // return object || number
}

// Bài 7

// Viết chương trình tính tổng bội chung của 3 và 5 trong khoảng từ 1 -> n
// n là số nhập vào
function sumMultiple(n) {
    // return number
}

// Bài 8

// Viết chương trình kiểm tra một số có phải số nguyên tố hay không
// n là số nhập vào
function isPrime(n) {
    // return boolean
}

// Bài 9

// Viết chương trình tính tổng các số nguyên tố trong khoảng a -> b
// a, b là số nhập vào
function sumPrime(a, b) {
    // return number
}

// Bài 10

// Viết chương trình tính số Fibonacci thứ n
// 2 giá trị đầu tiên trong dãy là 0, 1
// n là số nhập vào
// Nếu n nhỏ hơn 0 thì kết quả là null
function getFibonacci(n) {
    // return number
}

// Bài 11

// Viết chương trình tính giai thừa của một số n
// n là giá trị nhập vào
// Nếu n < 0 thì return NaN
function factorial(n) {
    // return number
}

// Bài 12

// Viết chương trình kiểm tra một số có phải số Strong hay không
// Số Strong là số có tổng giai thừa của các chữ số bằng chính nó
// VD: 145 = 1! + 4! + 5! -> 145 là số Strong
// n là số nhập vào
function isStrong(n) {
    // return boolean
}

// Một số bài ôn tập thêm với vòng lặp

// Viết chương trình in ra theo các mẫu sau
// n là số hàng cần in

// * i = 1, j = 1
// * * i = 2, j = 1, 2
// * * * i = 3, j = 1, 2, 3
// * * * *
// * * * * *

function p1(n) {
    for (let i = 1; i <= n; i++) {

        let s = "";

        for (let j = 1; j <= i; j++) {
            s += "* ";
        }

        console.log(s);
    }
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function p2(n) { }

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function p3(n) { }

// * * * * *
// * * * *
// * * *
// * *
// *

function p4(n) { }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function p5(n) { }

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

function p6(n) { }
[];

// *
// * *
// * * *
// * *
// *

// n luôn lẻ

function p7(n) { }

//     *
//   * *
// * * *
//   * *
//     *

// n luôn lẻ

function p8(n) { }

//   *
//  * *
// * * *
//  * *
//   *

// n luôn lẻ

function p9(n) { }

// * * *
// * *
// *
// * *
// * * *

// n luôn lẻ

function p10(n) { }
