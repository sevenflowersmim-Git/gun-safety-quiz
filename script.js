const allQuestions = [
    {
        id: 1,
        category: "安全管理",
        text: "銃口は、装填していないことが確認できていれば人に向けてもよい。",
        answer: false,
        explanation: "装填の有無に関係なく、銃口は常に安全な方向へ向けるのが基本。"
    },
    {
        id: 2,
        category: "安全管理",
        text: "猟銃を人に手渡す際は、機関部を開放して安全を確認する。",
        answer: true,
    },
    {
        id: 3,
        category: "安全管理",
        text: "狩猟中であれば、車両に乗る際も装填したままでよい。",
        answer: false,
        explanation: "車両への乗降時は装填を解除し、安全を確保する必要がある。"
    },
    {
        id: 4,
        category: "保管・運搬",
        text: "猟銃の保管には、施錠設備を備えた保管庫を使用する。",
        answer: true,
    },
    {
        id: 5,
        category: "安全管理",
        text: "引き金に指をかけるのは、射撃する意思があり標的を確認した後である。",
        answer: true,
    },
    {
        id: 6,
        category: "安全管理",
        text: "標的の確認ができれば、その周囲や背景は確認しなくてよい。",
        answer: false,
        explanation: "標的だけでなく、その周辺や弾の到達範囲も確認する必要がある。"
    },
    {
        id: 7,
        category: "法令",
        text: "猟銃や空気銃の所持には、都道府県公安委員会の許可が必要である。",
        answer: true,
    },
    {
        id: 8,
        category: "安全管理",
        text: "酒気を帯びた状態でも、射撃をしなければ猟銃に触れてよい。",
        answer: false,
        explanation: "飲酒時は猟銃の取扱いを避け、安全確保を最優先にする。"
    },
    {
        id: 9,
        category: "保管・運搬",
        text: "猟銃を保管する場所は、第三者が容易に立ち入れないよう配慮する。",
        answer: true,
    },
    {
        id: 10,
        category: "安全管理",
        text: "猟銃は常に『装填されているかもしれない』と考えて取り扱う。",
        answer: true,
    },
    {
        id: 11,
        category: "法令",
        text: "猟銃・空気銃の所持者は、一定の厳格な要件を満たした者であり、許可された銃は社会全体の利益に資する形で活用されることが期待されている。",
        answer: true,
    },
    {
        id: 12,
        category: "安全管理",
        text: "猟銃等の所持者は、その危険性を十分に認識し、事故を起こしてはならないという基本理念を強く持つ必要がある。",        answer: true,
    },
    {
        id: 13,
        category: "安全管理",
       text: "猟銃等による事件や事故を防止するため、関係法令を遵守し、無事故であれば社会的責任に配慮する必要はない。",
        answer: false,
        explanation: "猟銃・空気銃の所持者には、関係法令の習得に心掛け、常に社会的責任を負うことが必須である。"
    },
    {
        id: 14,
        category: "安全管理",
        text: "我が国では、猟銃・空気銃の所持および使用に対して厳格な規制が設けられており、それが良好な治安維持の大きな要因の一つとされている。",
        answer: true,
    },
    {
        id: 15,
        category: "安全管理",
        text: "『狩猟』や『有害鳥獣の駆除』に使用する銃は、公安委員会により一定の厳しい条件を満たした一部の者に許可されるが、『標的射撃』（スポーツ）に用いる銃については厳しい条件が設けられていない。",
        explanation: "許可の条件は「狩猟」、「有害鳥獣の駆除」、「標的射撃」はすべて同等である。"
    },
    {
        id: 16,
        category: "安全管理",
        text: "銃器は本来、遠方にいる動物の捕獲や人の殺傷を目的として開発された道具であり、非常に危険なものである。",
        answer: true,
    },
    {
        id: 17,
        category: "安全管理",
        text: "猟銃や空気銃を所持することは個人の権利であり、あくまでも自分自身のためだけに使用しなければならない。",
        answer: false,
        explanation: "猟銃・空気銃を所持する人は、社会全般にとって、有益に使用あるいは活用されることが期待され、また、その責任を全うする義務があることを自覚しなくてはならない。"
    },
    {
        id: 18,
        category: "法令",
        text: "都道府県公安委員会による所持許可は、一定の場合に限り猟銃の所持を特別に認めるものであるが、空気銃はその許可の対象ではない。",
        answer: false,
        explanation: "空気銃も許可の対象である。"
    },
    {
        id: 19,
        category: "法令",
        text: "許可を受けた猟銃については、修理のためであれば購入した販売店へ家族が持ち込んでも差し支えない。",
        answer: false,
        explanation: "修理のために家族に銃砲店にもっていかせると、持って行った家族が不法所持となる。よって所持者と家族は違反として処罰される。"
    }, 
    {
        id: 20,
        category: "保管・運搬",
        text: "旅行などで長期間不在にする場合には、知人が所有するガンロッカーに最新の盗難防止設備が備わっていれば、猟銃・空気銃を預けた方がよい。",
        answer: false,
        explanation: "「所持」とは物に対する実質的な支配を意味し、保管・携帯・運搬は自ら行う必要がある。"
    }, 
    {
        id: 21,
        category: "安全管理",
        text: "許可を受けた猟銃や空気銃の所持者が、修理のために家族へそれらを持って行かせた場合、本人だけでなく家族も法律違反となる。",
        answer: true,
    },
    {
        id: 22,
        category: "法令",
        text: "技能検定の受検者は、検定を受ける目的で射撃場の猟銃を所持することができる。",
        answer: true,
    },
    {
        id: 23,
        category: "法令",
       text: "一人で複数の銃を所持しようとする場合は、それぞれの銃ごとに所持許可を取得しなければならない。",
        answer: true,
    },
    {
        id: 24,
        category: "法令",
        text: "猟銃や空気銃の所持許可申請が受理されたため、銃を譲り受けた。",
        answer: false,
        explanation: "猟銃・空気銃は、所持許可申請を受理されただけでは所持できない。"
    }, 
    {
        id: 25,
        category: "法令",
        text: "猟銃や空気銃の所持許可を受ける前に銃を譲り受けた場合、不法所持の罪により処罰される。",
        answer: true,
    },
    {
        id: 26,
        category: "法令",
        text: "所持許可を取得する前の銃は使用できないが、基準を満たしたガンロッカーがあれば自宅で保管することは可能である。",
        answer: false,
        explanation: "所持許可を受ける前は銃を所持できない。所持した場合は違法所持となる。"
    }, 
    {
        id: 27,
        category: "法令",
        text: "銃砲の所持目的として認められているのは、標的射撃、狩猟、有害鳥獣駆除およびコレクションである。",
        answer: false,
        explanation: "コレクションや遺品として所持することはできない。"
    }, 
    {
        id: 28,
        category: "法令",
        text: "猟銃をコレクションや遺品を理由として所持許可を受けることはできない。",
        answer: true,
    },
    {
        id: 29,
        category: "法令",
        text: "猟銃や空気銃の所持許可を受けられるのは、標的射撃を目的とする者であり、狩猟や有害鳥獣駆除を目的とする場合には許可を受けることができない。",
        answer: false,
        explanation: "狩猟、有害鳥獣駆除、標的射撃は所持目的として認められている。"
    }, 
    {
        id: 30,
        category: "法令",
        text: "猟銃や空気銃の用途である『有害鳥獣駆除』とは、『鳥獣の保護及び管理並びに狩猟の適正化に関する法律』に基づき、鳥獣の管理を目的として捕獲等を行う場合や、同法に基づかない有害水産動物の駆除・駆逐を行う場合を指す。",
        answer: true,
    },
    {
        id: 31,
        category: "法令",
        text: "構造または機能上の危険性を有する猟銃・空気銃は、所持許可の対象とはならない。",
        answer: true,
    },
    {
        id: 32,
        category: "法令",
        text: "猟銃・空気銃の所持許可申請があった場合でも、公安委員会がすべてを許可するわけではない。",
        answer: true,
    },
    {
        id: 33,
        category: "法令",
       text: "原則として、20歳以下の者は猟銃の所持許可を受けることができない。",
        answer: false,
        explanation: "猟銃の所持許可を受けられないのは20歳未満の者。20歳は受けることができる。"
    }, 
    {
        id: 34,
        category: "法令",
        text: "原則として、18歳未満の者は空気銃の所持許可を受けることができない。",
        answer: true,
    },
    {
        id: 35,
        category: "法令",
       text: "精神障害または発作による意識障害を引き起こし、その他銃砲や刀剣類の適正な取扱いに支障を及ぼすおそれがある病気として政令で定められたものに罹患している者であっても、銃の操作に問題がなければ所持許可を受けることができる。",
        answer: false,
        explanation: "銃の操作に問題がなくても、精神障害または発作による意識障害を引き起こし、その他銃砲や刀剣類の適正な取扱いに支障を及ぼすおそれがある病気として政令で定められたものに罹患している場合は「絶対的欠格事項」に当てはまる。"
    }, 
    {
        id: 36,
        category: "法令",
        text: "認知症の者は猟銃や空気銃の所持許可を受けることができないが、家族が常時介護できる状態であれば所持許可を受けることができる。",
        answer: false,
        explanation: "認知症にかかっているものは「絶対的欠格事項」に当てはまる。所持許可を受けることはできない。"
    }, 
    {
        id: 37,
        category: "法令",
        text: "政令で定める病気（統合失調症、そううつ病、てんかん等）に罹患している者は、猟銃や空気銃の所持許可を受けることができない。",
        answer: true,
    }, 
    {
        id: 38,
        category: "法令",
        text: "住居が定まっていない、いわゆる住居不定者は、猟銃や空気銃の所持許可を受けることができない。",
        answer: true,
    }, 
    {
        id: 39,
        category: "法令",
        text: "所持許可の取消処分を受けてから3年を経過していない者は、所持許可を受けることができない。",
        answer: false,
        explanation: "所持許可の取消処分を受けてから5年を経過していないと所持許可を受けることはできない。"
    }, 
    {
        id: 40,
        category: "法令",
        text: "自らの行為の善悪を判断できない者や、してはならないと理解していても行ってしまう者は、猟銃や空気銃の所持許可を受けることができない。",
        answer: true,
    }, 
    {
    id: 41,
    category: "法令",
    text: "銃砲刀剣類所持等取締法または火薬類取締法に違反し、罰金以上の刑罰を受けた者は、一定期間にわたり猟銃や空気銃の所持許可を受けることができない。",
    answer: true,
    },
    {
    id: 42,
    category: "法令",
    text: "配偶者からの暴力の防止及び被害者の保護に関する法律に基づく禁止命令等を受けた者は、その後3年間は猟銃や空気銃の所持許可を受けることができない。",
    answer: true,
    },
    { 
    id: 43,
    category: "法令",
    text: "暴力団員である実弟が許可申請の約1か月前から同居していても、住民登録をしていなければ所持許可を受けることができる。",
    answer: false,
    explanation: "暴力団と同居している場合は、住民登録の有無に関係なく所持許可を受けることはできない。"
    },
    {
    id: 44,
    category: "法令",
    text: "他人の生命、身体もしくは財産、または公共の安全に危害を及ぼすおそれがあると認めるに足る相当な理由がある者は、猟銃や空気銃を所持することができない。",
    answer: true,
    },
    {
    id: 45,
    category: "法令",
    text: "人の生命または身体を害する罪で政令に定めるものに該当する違法行為を行い、その日から10年を経過していない者は、猟銃の所持許可を受けることができない。",
    answer: true,
    },
    {
    id: 46,
    category: "法令",
    text: "政令で定められた凶悪犯罪に該当する違法行為を行った者は、その行為の日から5年間は猟銃の所持許可を受けることができない。",
    answer: false,
    explanation: "その行為をした日から起算して10年間は猟銃の所持許可を受けることができない。"
    },
    {
    id: 47,
    category: "法令",
    text: "連続自動撃発式の自動連発銃については、ライフル銃以外の猟銃では薬室1発と弾倉2発、ライフル銃では薬室1発と弾倉5発まで許可される。",
    answer: false,
    explanation: "連続自動撃発式の銃は所持許可の対象とならない。"
    },
    {
    id: 48,
    category: "法令",
    text: "パターン調整または反動軽減を目的とする装置が構造の一部として備えられている銃は、所持許可の対象となる。",
    answer: true,
    },
    {
    id: 49,
    category: "法令",
    text: "消音装置が取り付けられている銃は、有害鳥獣駆除を目的とする場合に限り所持許可の対象となる。",
    answer: false,
    explanation: "構造の一部として消音装置が備えられている銃は、用途に関係なく所持許可の対象とならない。"
    },
    {
    id: 50,
    category: "法令",
    text: "引き金を引き続けることで弾丸が連続して発射される構造を持つ連続自動撃発式自動銃、いわゆる機関銃は、所持許可の対象とはならない。",
    answer: true,
    },
    {
    id: 51,
    category: "法令",
    text: "ライフル銃以外の猟銃は弾倉に2発まで、ライフル銃および空気銃は弾倉に5発までしか装填できない構造であることが、所持許可の対象となる条件である。",
    answer: true,
    },
    {
    id: 52,
    category: "法令",
    text: "銃の口径については、ライフル銃では10.5ミリメートル、散弾銃では12番を超えるものは許可されない。",
    answer: true,
    },
    {
    id: 53,
    category: "法令",
    text: "銃身の長さが48.8センチメートル未満であれば、その銃は所持許可の対象となる。",
    answer: false,
    explanation: "48.8センチメートル以下の銃は所持許可を受けることができない。"
    },
    {
    id: 54,
    category: "法令",
    text: "猟銃や空気銃の所持許可を受けようとする者が、許可申請書提出時点で75歳である場合でも、公安委員会が実施する認知機能検査を受検する必要はない。",
    answer: false,
    explanation: "許可申請書を提出した日において75歳以上である者は、公安委員会が行う認知機能検査を受検する必要がある。"
    },
    {
    id: 55,
    category: "法令",
    text: "公安委員会は、認知機能検査の結果が一定の基準に該当した者に対し、公安委員会が指定する医師の診断を受けるよう命じることができる。",
    answer: true,
    },
    {
    id: 56,
    category: "法令",
    text: "国民体育大会のクレー射撃競技に出場する選手候補として日本体育協会加盟の地方団体から推薦を受けた者は、散弾銃等に関する技能講習を受ける必要がない。",
    answer: true,
    },
    {
    id: 57,
    category: "法令",
    text: "標的射撃を目的としてライフル銃を所持するには、猟銃を10年以上継続して所持している必要がある。",
    answer: false,
    explanation: "標的射撃目的でのライフル銃の所持許可は、日本体育協会またはその加盟団体が主催するライフル射撃大会に参加する選手（候補者）として適当であると推薦を受けた者が対象となる。"
    },
    {
    id: 58,
    category: "法令",
    text: "ライフル銃による獣類捕獲を職業としている者は、狩猟または有害鳥獣駆除を目的とする場合にライフル銃の所持許可を受けることができる。",
    answer: true,
    },
    {
    id: 59,
    category: "法令",
    text: "事業被害を防止するためにライフル銃で獣類を捕獲する者は、日本体育協会の推薦がなければライフル銃を所持することができない。",
    answer: false,
    explanation: "事業に対する被害防止のためライフル銃による獣類の捕獲を必要とする者は、推薦がなくてもライフル銃の所持許可の対象となる。"
    },
    {
    id: 60,
    category: "法令",
    text: "標的射撃を目的としてライフル銃の所持許可を受けるには、日本体育協会から推薦を受ける必要がある。",
    answer: true,
    },
    {
    id: 61,
    category: "法令",
    text: "射撃練習とは、練習射撃場において練習用備付け銃を使用して行う射撃をいう。",
    answer: true,
    },
    {
    id: 62,
    category: "法令",
    text: "射撃練習を行うことができるのは、猟銃の所持許可を受けている者または射撃教習修了書の交付を受けた者に限られる。",
    answer: false,
    explanation: "猟銃や空気銃の所持許可を受けている者のほか、都道府県公安委員会から練習資格認定証の交付を受けた者も射撃練習を行うことができる。"
    },
    {
    id: 63,
    category: "法令",
    text: "練習射撃場は、猟銃の操作および射撃技能の向上並びに所持しようとする猟銃の選定に役立てるために指定される。",
    answer: true,
    },
    {
    id: 64,
    category: "法令",
    text: "猟銃の射撃練習を行う資格の認定を受けるには、1年以内に教習修了証明書または技能検定合格証明書の交付を受けている必要がある。",
    answer: true,
    },
    {
    id: 65,
    category: "法令",
    text: "猟銃や空気銃の所持許可を受けようとする者は、講習修了証明書を提示することで公安委員会が指定する射撃場において射撃練習を行うことができる。",
    answer: false,
    explanation: "猟銃や空気銃の所持許可を受けようとする者は、銃の選定を目的として射撃練習資格の認定を受けることで射撃練習を行うことができる。"
    },
];

// ====================
// 状態管理
// ====================

let questions = [];

let current = 0;
let score = 0;

// ====================
// クイズ開始
// ====================

function startQuiz() {

    const mode =
        document.getElementById("modeSelect").value;

    const category =
        document.getElementById("categorySelect").value;

    const count =
        Number(
            document.getElementById("countSelect").value
        );

    // --------------------
    // 全問題モード
    // --------------------

    if (mode === "all") {

        questions = [...allQuestions];

    }

    // --------------------
    // 苦手問題モード
    // --------------------

    if (mode === "weak") {

        const weakIds =
            JSON.parse(
                localStorage.getItem("weakQuestions")
            ) || [];

        questions =
            allQuestions.filter(
                q => weakIds.includes(q.id)
            );

        if (questions.length === 0) {

            alert("苦手問題がありません");

            return;
        }
    }

    // --------------------
    // カテゴリ絞り込み
    // --------------------

    if (category !== "all") {

        questions =
            questions.filter(
                q => q.category === category
            );
    }

    // --------------------
    // 問題数
    // --------------------

    shuffle(questions);

    if (count !== 9999) {

        questions =
            questions.slice(
                0,
                Math.min(count, questions.length)
            );
    }

    if (questions.length === 0) {

        alert("該当する問題がありません");

        return;
    }

    current = 0;
    score = 0;

    document.getElementById("startScreen")
        .style.display = "none";

    document.getElementById("resultScreen")
        .style.display = "none";

    document.getElementById("quizScreen")
        .style.display = "block";

    showQuestion();
}

// ====================
// 問題表示
// ====================

function showQuestion() {

    const question =
        questions[current];

    document.getElementById("progress").textContent =
        `${current + 1} / ${questions.length} 問`;

    document.getElementById("scoreDisplay").textContent =
        `正解数：${score}`;

    document.getElementById("question").textContent =
        question.text;

    document.getElementById("result").textContent =
        "";

    document.getElementById("explanation").textContent =
        "";

    document.getElementById("nextButton").style.display =
        "none";

    const maru =
        document.getElementById("maru");

    const batsu =
        document.getElementById("batsu");

    maru.disabled = true;
    batsu.disabled = true;

    setTimeout(() => {

        maru.disabled = false;
        batsu.disabled = false;

    }, 1000);
    const progress =
    (current / questions.length) * 100;

document.getElementById("progressBar")
    .style.width =
    `${progress}%`;
}

// ====================
// 回答処理
// ====================

function checkAnswer(userAnswer) {

    const question =
        questions[current];

    document.getElementById("maru")
        .disabled = true;

    document.getElementById("batsu")
        .disabled = true;

    if (userAnswer === question.answer) {

        score++;

        document.getElementById("result").textContent =
            "正解！";

        removeWeakQuestion(question.id);

    } else {

        document.getElementById("result").textContent =
            "不正解";

        addWeakQuestion(question.id);
    }

    document.getElementById("scoreDisplay").textContent =
        `正解数：${score}`;

    if (question.explanation) {

        document.getElementById("explanation")
            .textContent =
            question.explanation;
    }

    document.getElementById("nextButton")
        .style.display = "block";
}

// ====================
// 次の問題
// ====================

function nextQuestion() {

    current++;

    if (current < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}

// ====================
// 終了処理
// ====================

function finishQuiz() {

    document.getElementById("quizScreen")
        .style.display = "none";

    document.getElementById("resultScreen")
        .style.display = "block";

    const rate =
        Math.round(
            score / questions.length * 100
        );

    document.getElementById("finalScore")
        .textContent =
        `${questions.length}問中 ${score}問正解`;

    document.getElementById("finalRate")
        .textContent =
        `正答率 ${rate}%`;
    document.getElementById("progressBar")
    .style.width = "100%";     
    const achievement =
    document.getElementById("achievement");
    if (rate === 100) {

    achievement.textContent =
        "🏅 全問正解！完璧です！";

} else if (rate >= 95) {

    achievement.textContent =
        "🏆 素晴らしい！合格圏内です！";

} else if (rate >= 80) {

    achievement.textContent =
        "✨ もう一歩です！";

} else {

    achievement.textContent =
        "📚 復習して再挑戦！";
}
}

// ====================
// メニューへ戻る
// ====================

function returnToMenu() {

    document.getElementById("resultScreen")
        .style.display = "none";

    document.getElementById("quizScreen")
        .style.display = "none";

    document.getElementById("startScreen")
        .style.display = "block";
}

// ====================
// 苦手問題復習
// ====================

function reviewWrongQuestions() {

    document.getElementById("modeSelect").value =
        "weak";

    startQuiz();
}

// ====================
// 苦手問題登録
// ====================

function addWeakQuestion(id) {

    let weakIds =
        JSON.parse(
            localStorage.getItem("weakQuestions")
        ) || [];

    if (!weakIds.includes(id)) {

        weakIds.push(id);

        localStorage.setItem(
            "weakQuestions",
            JSON.stringify(weakIds)
        );
    }
}

// ====================
// 苦手問題解除
// ====================

function removeWeakQuestion(id) {

    let weakIds =
        JSON.parse(
            localStorage.getItem("weakQuestions")
        ) || [];

    weakIds =
        weakIds.filter(
            weakId => weakId !== id
        );

    localStorage.setItem(
        "weakQuestions",
        JSON.stringify(weakIds)
    );
}

// ====================
// シャッフル
// ====================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [array[i], array[j]] =
            [array[j], array[i]];
    }
}