function generateMatrix (a) {
    dimensi = parseInt(a);
    cetakTable(dimensi);
}

function cetakTable (x) {
    let tr1 = '';
    let td1 = '';
    let tr2 = '';
    let td2 = '';
    
    // matrix1
    for (let a = 0; a < x; a++) {
        td1 += `<td id="td${a}"><input type="text" id="input${a}"></td>`;
    }

    for (let b = 0; b < x; b++) {
        tr1 += `<tr id="tr${b}">${td1}</tr>`;
    }

    // matrix2
    for (let c = 0; c < x; c++) {
        td2 += `<td id="td${c}"><input type="text" id="input${c}"></td>`;
    }

    for (let d = 0; d < x; d++) {
        tr2 += `<tr id="tr${d}">${td2}</tr>`;
    }

    document.getElementById('m1').innerHTML = tr1;
    document.getElementById('m2').innerHTML = tr2;

    document.getElementById('m3').hidden = true;
}

function tambah (value) {
    let getMatrix1 = [];
    let getMatrix2 = [];
    let resultMatrix = [];

    for (let i = 0; i < value; i++) {
        for (let n = 0; n < value; n++) {
            getMatrix1.push(parseInt(document.querySelector(`#m1 #tr${i} #td${n} #input${n}`).value));
        }
    }

    for (let i = 0; i < value; i++) {
        for (let n = 0; n < value; n++) {
            getMatrix2.push(parseInt(document.querySelector(`#m2 #tr${i} #td${n} #input${n}`).value));
        }
    }

    for (let i = 0; i < (value*value); i++) {
        resultMatrix.push(getMatrix1[i] + getMatrix2[i]);
    }

    cetakHasil(resultMatrix,value);
}

function cetakHasil (rm,v) {
    document.getElementById('m3').hidden = false;

    let tdH = '';
    let trH = '';
    let count = 0;
    
    for (let a = 0; a < v; a++) {    
        for (let i = 0; i < v; i++) {
            tdH += `<td><input type="text" value="${rm[count]}"></td>`;
            ++count;
        }
        trH += `<tr>${tdH}</tr>`;
        tdH = '';
    }

    document.getElementById('m3').innerHTML = trH;
}