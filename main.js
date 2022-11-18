var arr = [9, 15, 10, -12, -15, 22, -4, -2, 3, 7, 67, -65, 24, 31];

// BÀI TẬP 1
function ex1() {
  var result = "";
  var Tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      Tong += arr[i];
    }
  }
  result = "1. Tổng các số dương là: " + Tong;
  // console.log("Tổng các số dương là: " + Tong);
  document.getElementById("bt1").innerHTML = result;
}
ex1();

// BÀI TẬP 2
function ex2() {
  var result = "";
  var Dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      Dem++;
    }
  }
  result = "2. Số dương ở trong mảng là: " + Dem;
  // console.log("Số dương ở trong mảng là: " + Dem);
  document.getElementById("bt2").innerHTML = result;
}
ex2();

// BÀI TẬP 3
function ex3() {
  var result = "";
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      //   console.log(arr[i]);
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  result = "3. Số nhỏ nhất trong mảng là: " + min;
  // console.log("Số nhỏ nhất trong mảng là: " + min);
  document.getElementById("bt3").innerHTML = result;
}
ex3();

// BÀI TẬP 4
function ex4() {
  var result = "";
  var number = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] < number) {
        number = arr[i];
      }
    }
  }
  result = "4. Số dương nhỏ nhất trong mảng là: " + number;
  // console.log("Số dương nhỏ nhất trong mảng là: " + number);
  document.getElementById("bt4").innerHTML = result;
}
ex4();

// BÀI TẬP 5
function ex5() {
  var result = "";
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      // console.log(arr[i]);
      break;
    }
  }
  result = "5. Số chẵn cuối cùng trong mảng là: " + arr[i];
  // console.log("Số chẵn cuối cùng trong mảng là: " + arr[i]);
  document.getElementById("bt5").innerHTML = result;
}
ex5();

// BÀI TẬP 6
function ex6() {
  var result = "";
  var arrChange = [];
  var empty;
  for (var i = 0; i < arr.length; i++) {
    empty = arr[2];
    arr[2] = arr[6];
    arr[6] = empty;
    arrChange.push(arr[i]);
  }
  result = "6. Sắp xếp sau khi hoán đổi vị trí: " + arrChange;
  // console.log("Sắp xếp sau khi hoán đổi vị trí: " + arrChange);
  document.getElementById("bt6").innerHTML = result;
}
ex6();

// BÀI TẬP 7
function ex7() {
  var result = "";
  var arrUp = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    arrUp.push(arr[i]);
  }
  result = "7. Thứ tự từ bé đến lớn : " + arrUp;
  // console.log("Thứ tự từ bé đến lớn : " + arrUp);
  document.getElementById("bt7").innerHTML = result;
}
ex7();

// BÀI TẬP 8
function ex8(n) {
  var result = "";
  var flag = 1;
  if (n < 2) return (flag = 0);
  var i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}
for (var i = 0; i < arr.length; i++) {
  if (ex8(arr[i]) == 1) {
    // console.log(arr[i]);
    break;
  }
}
result = "8. Số nguyên tố đầu tiên là: " + arr[i];
// console.log("Số nguyên tố đầu tiên là: " + arr[i]);
document.getElementById("bt8").innerHTML = result;

// BÀI TẬP 9
function ex9() {
  var result = "";
  var Dem = 0;
  for (var i = 0; i < arr.length; i++) {
    Dem++;
  }
  result = " 9. Có " + Dem + " số nguyên trong mảng";
  // console.log("Có " + Dem + " số nguyên trong mảng");
  document.getElementById("bt9").innerHTML = result;
}
ex9();

// BÀI TẬP 10
function ex10() {
  var result = "";
  var soAm = 0;
  var soDuong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong++;
    }
    if (arr[i] < 0) {
      soAm++;
    }
  }
  if (soAm > soDuong) {
    result = "10. Số âm > Số dương";
    // console.log("Số âm > Số dương");
  } else if (soAm < soDuong) {
    result = "10. Số âm < Số dương";
    // console.log("Số âm < Số dương");
  } else {
    result = "10. Số âm < Số dương";
    // console.log("Số âm = Số dương");
  }
  document.getElementById("bt10").innerHTML = result;
}
ex10();
