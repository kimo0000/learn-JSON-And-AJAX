let btn = document.querySelector('button');
let info = document.querySelector('.info');
let fileNum = 1;
let count = 1;

btn.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    //console.log(request);
    request.open('GET', `../js/car_${fileNum++}.json`);
    request.onload = function() {
        let datas = JSON.parse(request.responseText);
        //console.log(datas);

        addHtml(datas);
    }

    if(fileNum > 3) {
       btn.classList.add('disabled');
    }

    request.send();
})

function addHtml(datas) {
    let htmlText = "";

    for(let i = 0; i < datas.length; i++) {
        //console.log(data);
        htmlText += `<div class='text'>
            <p><span><span>-${count++})</span> ${datas[i].name} is a ${datas[i].model}</span><br>and has a two option:</p>
        `;
        for(let j = 0; j < datas[i].type.type_one.length; j++) {
            if(j == 0) {
              htmlText += `<p>- ${datas[i].type.type_one[j]}`;
            } else {
                htmlText += ` and ${datas[i].type.type_one[j]}</p>`;
            }
        }

        for(let j = 0; j < datas[i].type.type_two.length; j++) {
            if(j == 0) {
              htmlText += `<p>- ${datas[i].type.type_two[j]}`;
            } else {
                htmlText += ` and ${datas[i].type.type_two[j]}</p>`;
            }
        }

       htmlText += `<p>And Date of Fabriquation is : <br><span>- ${datas[i].years}<span></p>`;

       htmlText += `</div><hr>`;
        
    }


    info.insertAdjacentHTML('beforeend', htmlText);
}