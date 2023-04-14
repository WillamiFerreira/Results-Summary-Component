import data from '../data/data.json' assert {type: 'json'};

for (let i = 0; i < 4; i++){
    let icon_and_title_ct = document.querySelectorAll('.icon_and_title')[i];
    let score = document.querySelectorAll(".score")[i];

    let item_icon = document.createElement('img');
    let item_category = document.createElement('p');
    let item_score = document.createElement('p');

    item_icon.src = data[i]['icon'];
    item_category.innerHTML = data[i]['category'];
    item_score.innerText = data[i]['score'] + ' / 100';

    icon_and_title_ct.appendChild(item_icon);
    icon_and_title_ct.appendChild(item_category);
    score.appendChild(item_score);

}

