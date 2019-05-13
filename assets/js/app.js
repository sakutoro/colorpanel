// // 作成の流れ
 
// 1. 追加ボタンにclickのイベントを登録する
let btn = document.getElementById("addBtn");

// 2. 追加ボタンがクリックされた時の処理を書く
btn.addEventListener("click",function() {
    
    // 1. 画面の入力欄、
    let task = document.getElementById("inputColor");
    
    // 入力値を取得する
    let tasktext = task.value;
    
    // 2. 新しくdivを作成する
    let div = document.createElement("div");
    
    // 3. divの背景色に画面の「2.1」で取得した入力値を設定する
    div.style.backgroundColor = tasktext;
    
    // 4. 新しく作成したdivにCSSのクラス「panel」を追加する
    div.classList.add("panel");

    // ボックスがクリックされた時入力値の色に変わる
    div.addEventListener("click", function () {
        let task = document.getElementById("inputColor");
        let tasktext = task.value;
        div.style.backgroundColor = tasktext;
    });


    // 5. div[id=box]を取得する
    let box = document.getElementById("box");
    
    // 6. 作成したdivを追加する
    box.insertBefore(div, box.firstChild);

    // 入力欄の文字リセット
    task.value = "";

    // // ?1 ボックスがクリックされた時入力値の色に変わる
    // div.addEventListener("click", function () {
    //    let task = document.getElementById("inputColor");
    //    let tasktext = task.value;
    //    div.style.backgroundColor = tasktext;
    // });

     
});

//   // ?2 ボックスがクリックされた時入力値の色に変わる
//   div.addEventListener("click", function () {
//     div.style.backgroundColor = tasktext;
//     console.log(div.style.backgroundColor);
// })

// divクリックされた時の関数の作成
function divclick() {
    let task = document.getElementById("inputColor");
    let tasktext = task.value;
    div.style.backgroundColor = tasktext;
}