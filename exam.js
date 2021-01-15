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
    if (value == "1") {
        // matrix1
        const m1b1k1 = parseInt(document.querySelector('#m1 #tr0 #td0 #input0').value);

        // matrix2
        const m2b1k1 = parseInt(document.querySelector('#m2 #tr0 #td0 #input0').value);

        // hasil
        const m3b1k1 = m1b1k1 + m2b1k1;
        cetakHasil1(m3b1k1);
    }else if (value == "2") {
        // matrix1
        const m1b1k1 = parseInt(document.querySelector('#m1 #tr0 #td0 #input0').value);
        const m1b1k2 = parseInt(document.querySelector('#m1 #tr0 #td1 #input1').value);
        const m1b2k1 = parseInt(document.querySelector('#m1 #tr1 #td0 #input0').value);
        const m1b2k2 = parseInt(document.querySelector('#m1 #tr1 #td1 #input1').value);

        // matrix2
        const m2b1k1 = parseInt(document.querySelector('#m2 #tr0 #td0 #input0').value);
        const m2b1k2 = parseInt(document.querySelector('#m2 #tr0 #td1 #input1').value);
        const m2b2k1 = parseInt(document.querySelector('#m2 #tr1 #td0 #input0').value);
        const m2b2k2 = parseInt(document.querySelector('#m2 #tr1 #td1 #input1').value);

        // jumlah
        const m3b1k1 = m1b1k1 + m2b1k1;
        const m3b1k2 = m1b1k2 + m2b1k2;
        const m3b2k1 = m1b2k1 + m2b2k1;
        const m3b2k2 = m1b2k2 + m2b2k2;

        // cetak
        cetakHasil2(m3b1k1,m3b1k2,m3b2k1,m3b2k2);
    }else if (value == "3") {
        // matrix1
        const m1b1k1 = parseInt(document.querySelector('#m1 #tr0 #td0 #input0').value);
        const m1b1k2 = parseInt(document.querySelector('#m1 #tr0 #td1 #input1').value);
        const m1b1k3 = parseInt(document.querySelector('#m1 #tr0 #td2 #input2').value);
        const m1b2k1 = parseInt(document.querySelector('#m1 #tr1 #td0 #input0').value);
        const m1b2k2 = parseInt(document.querySelector('#m1 #tr1 #td1 #input1').value);
        const m1b2k3 = parseInt(document.querySelector('#m1 #tr1 #td2 #input2').value);
        const m1b3k1 = parseInt(document.querySelector('#m1 #tr2 #td0 #input0').value);
        const m1b3k2 = parseInt(document.querySelector('#m1 #tr2 #td1 #input1').value);
        const m1b3k3 = parseInt(document.querySelector('#m1 #tr2 #td2 #input2').value);

        // matrix2
        const m2b1k1 = parseInt(document.querySelector('#m2 #tr0 #td0 #input0').value);
        const m2b1k2 = parseInt(document.querySelector('#m2 #tr0 #td1 #input1').value);
        const m2b1k3 = parseInt(document.querySelector('#m2 #tr0 #td2 #input2').value);
        const m2b2k1 = parseInt(document.querySelector('#m2 #tr1 #td0 #input0').value);
        const m2b2k2 = parseInt(document.querySelector('#m2 #tr1 #td1 #input1').value);
        const m2b2k3 = parseInt(document.querySelector('#m2 #tr1 #td2 #input2').value);
        const m2b3k1 = parseInt(document.querySelector('#m2 #tr2 #td0 #input0').value);
        const m2b3k2 = parseInt(document.querySelector('#m2 #tr2 #td1 #input1').value);
        const m2b3k3 = parseInt(document.querySelector('#m2 #tr2 #td2 #input2').value);

        // jumlah
        const m3b1k1 = m1b1k1 + m2b1k1;
        const m3b1k2 = m1b1k2 + m2b1k2;
        const m3b1k3 = m1b1k3 + m2b1k3;
        const m3b2k1 = m1b2k1 + m2b2k1;
        const m3b2k2 = m1b2k2 + m2b2k2;
        const m3b2k3 = m1b2k3 + m2b2k3;
        const m3b3k1 = m1b3k1 + m2b3k1;
        const m3b3k2 = m1b3k2 + m2b3k2;
        const m3b3k3 = m1b3k3 + m2b3k3;

        // cetak
        cetakHasil3(m3b1k1,m3b1k2,m3b1k3,m3b2k1,m3b2k2,m3b2k3,m3b3k1,m3b3k2,m3b3k3);
    }
}

function cetakHasil1 (m3b1k1) {
    document.getElementById('m3').hidden = false;

    hasil = `<tr>
        <td><input type="text" value="${m3b1k1}"></td>
    </tr>`

    document.getElementById('m3').innerHTML = hasil;
}

function cetakHasil2 (m3b1k1,m3b1k2,m3b2k1,m3b2k2) {
    document.getElementById('m3').hidden = false;

    hasil = `<tr>
        <td><input type="text" value="${m3b1k1}"></td>
        <td><input type="text" value="${m3b1k2}"></td>
    </tr>
    <tr>
        <td><input type="text" value="${m3b2k1}"></td>
        <td><input type="text" value="${m3b2k2}"></td>
    </tr>`

    document.getElementById('m3').innerHTML = hasil;
}

function cetakHasil3(m3b1k1,m3b1k2,m3b1k3,m3b2k1,m3b2k2,m3b2k3,m3b3k1,m3b3k2,m3b3k3) {
    document.getElementById('m3').hidden = false;

    hasil = `<tr>
        <td><input type="text" value="${m3b1k1}"></td>
        <td><input type="text" value="${m3b1k2}"></td>
        <td><input type="text" value="${m3b1k3}"></td>
    </tr>
    <tr>
        <td><input type="text" value="${m3b2k1}"></td>
        <td><input type="text" value="${m3b2k2}"></td>
        <td><input type="text" value="${m3b2k3}"></td>
    </tr>
    <tr>
        <td><input type="text" value="${m3b3k1}"></td>
        <td><input type="text" value="${m3b3k2}"></td>
        <td><input type="text" value="${m3b3k3}"></td>
    </tr>`

    document.getElementById('m3').innerHTML = hasil;
}