function myFunction1() {
    var hk1 = parseFloat(document.getElementById('s1').value);
    var hk2 = parseFloat(document.getElementById('s2').value);
    var year = parseInt(document.getElementById('year').value);
    var sum;
    var result = "";
    
    // Tính tổng điểm
    switch(year) { 
        case 1: {
        sum = (hk1 + (hk2*2))/3;
        break;
    }
        case 2: {
        sum = ((hk1*2) + (hk2*3))/5;
        break;
    }
        case 3: {
        sum = ((hk1*3) + (hk2*4))/7;
        break;
    }
        default:
            sum = 0;
            break;
    }
    // Xếp loại học sinh
    if (sum >= 9) {
        result = "Học sinh xuất sắc";
    } else if (sum >= 8) {
        result = "Học sinh giỏi";
    } else if (sum >= 6.5) {
        result = "Học sinh khá";
    } else if (sum >= 5) {
        result = "Học sinh trung bình";
    } else {
        result = "Học sinh yếu";
    }
    
    
    document.getElementById('kq').value = sum;
    document.getElementById('xeploai').innerHTML = result;
    document.getElementById('xeploai').style.color = "red";
}

function myFunction2() {
    alert("Cancel button clicked");
}
