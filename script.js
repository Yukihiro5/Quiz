var objects = [
{
    sentence:'ももクロの玉井詩織のニックネームと言えば？',
    answer:'しおりん'
},
{
    sentence:'ドラえもんの誕生日と言えば9月3日。ではのび太の誕生日は？',
    answer:'8月7日'
},
{
    sentence:'HTMLで記述したホームページの文書構造を装飾する言語と言えば？',
    answer:'CSS'
},
{
    sentence:'栃木県の県庁所在地と言えば？',
    answer:'宇都宮市'
},
{
    sentence:'ルーレットの数字を全部掛け算すると値はいくつになる？',
    answer: '0'
}
];
function checkAnswer(input) {
    var isCorrect =  false;
    if(input  == this.answer) {
        isCorrect = true;
    }
    return objects
}

function getObjects() {
    for(var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.check = checkAnswer;
    }
    return objects;
}