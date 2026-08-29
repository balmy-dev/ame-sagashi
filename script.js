const titleScreen = document.getElementById("title-screen");

const startButton = document.getElementById("start-button");

const gameScreen = document.getElementById("game-screen");

const gameArea = document.getElementById("game-area");

const candies = document.querySelectorAll(".candy");

const wrongItems = document.querySelectorAll(".wrong");

const count = document.getElementById("count");

const reaction = document.getElementById("reaction");

const clearScreen = document.getElementById("clear-screen");

const novelButton = document.getElementById("novel-button");

const again = document.getElementById("again");

const bgm = document.getElementById("bgm");


// ======================================
// 影片みかのセリフ
// ======================================

const correctMessages = [

    "あっ、見つけたん？",

    "さすがやなぁ、あ、褒めてるわけとちゃうよ！○○ちゃんは敵やもんっ",

    "わかってるやん！",

    "んふふ、正解や♪"

];


const wrongMessages = [

    "ちゃうちゃう",

    "んあ～、そこやないで～",

    "残念やなぁ～"

];


// ======================================
// 今回見つけた飴の数
// ======================================

let foundCandy = 0;


// ======================================
// ゲーム開始
// ======================================

startButton.addEventListener("click", function() {


    // タイトル画面を隠す

    titleScreen.classList.add("hidden");


    // ゲーム画面を表示

    gameScreen.classList.remove("hidden");


    // BGMを再生

    bgm.play().catch(function(error) {

        console.log("BGMを再生できませんでした：", error);

    });

});


// ======================================
// 飴をクリック
// ======================================

candies.forEach(function(candy) {


    candy.addEventListener("click", function() {


        // すでに見つけた飴なら何もしない

        if (candy.classList.contains("found")) {

            return;

        }


        // 飴を見つけた

        candy.classList.add("found");


        // カウント

        foundCandy++;


        count.textContent =
            "見つけたあめちゃん：" + foundCandy + " / 3";


        // ランダムな正解セリフ

        reaction.textContent =
            correctMessages[
                Math.floor(
                    Math.random() *
                    correctMessages.length
                )
            ];


        // ==================================
        // 3個全部見つけた
        // ==================================

        if (foundCandy === 3) {


            // 少し待ってからCLEAR画面

            setTimeout(function() {


                gameScreen.classList.add("hidden");

                clearScreen.classList.remove("hidden");

                reaction.textContent = "";


            }, 500);

        }

    });

});


// ======================================
// 間違ったモチーフをクリック
// ======================================

wrongItems.forEach(function(item) {


    item.addEventListener("click", function() {


        reaction.textContent =
            wrongMessages[
                Math.floor(
                    Math.random() *
                    wrongMessages.length
                )
            ];

    });

});


// ======================================
// 小説①を読む
// ======================================

novelButton.addEventListener("click", function() {


    window.location.href = "novel1.html";


});


// ======================================
// もう一度遊ぶ
// ======================================

again.addEventListener("click", function() {


    location.reload();


});