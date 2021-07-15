function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write("FizBuzz");
        } else if (i % 3 == 0) {
            document.write("Fizz");
        } else if (i % 5 == 0) {
            document.write("Buzz");
        }
    }
}

function chanLe() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            document.write("le")
        } else {
            document.write("chan")
        }
    }

}

function soDauTien() {
    let temp, n, max;
    do {
        n = prompt("Nhập vào số nguyên n lớn hơn 0: ");
        if (n <= 0) {
            document.write("Số n phải lớn hơn 0, vui lòng nhập lại !");
        }
    } while (n <= 0);
    temp = n;
    do {
        max = temp % 10;
    } while (temp /= 10);
    document.write("Chữ số đầu tiên của n là ", n, max);
}

function snt() {
    let n = prompt('Nhập số kiểm tra');
    let snt = true;
    if (n < 2) {
        snt = false;
    }
    else {

        for (let i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                snt = false;
                break;
            }
        }
    }

    if (snt == true) {
        document.write(n + " là số nguyên tố <br/>");
    }
    else {
        document.write(n + " không phải là số nguyên tố <br/>");
    }
}