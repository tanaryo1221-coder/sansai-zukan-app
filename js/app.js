const plants = [
  {
    id: "koshiabura",
    name: "コシアブラ",
    reading: "春の山で出会う、香り高い若芽",
    image: "assets/koshiabura.png",
    girlImage: "assets/koshiabura-girl.png",
    chibiImage: "assets/koshiabura-chibi.png",
    details: {
      "特徴": "ウコギ科の落葉高木。春に伸びる若芽を山菜として楽しみます。すっとした香りと、ほどよい苦みが持ち味です。",
      "生息地": "雑木林や明るい山地の斜面、林縁に見られます。地域によっては里山でも出会えます。",
      "時期": "主に4月から5月。標高が高い場所では少し遅れて旬を迎えます。",
      "食べ方": "天ぷら、混ぜご飯、おひたし、炒め物に向きます。香りを生かすなら天ぷらが定番です。",
      "人気の地方": "東北、信越、北関東など、春の山菜文化が根づく地域で親しまれています。",
      "注意すべき毒草": "ハリギリ、タラノキなど似た若芽と見比べられます。食用可否に迷うものは採らず、葉の付き方や枝の特徴まで確認してください。"
    },
    girl: {
      title: "芽吹きの姫 コシアブラ",
      catchcopy: "わらわは山菜の女王よ！頭が高いわ！",
      description: [
        "自身が山菜の女王として認識されていることを誇らしく思っている姫君。クセが強くて美味しいと、ポストタラの芽的なポジションに内心満足している。",
        "本人はお高くとまってはいるが、まだ幼い姫君ゆえ、威厳としては足りない。そのうえ割と優柔不断な性格でもあり、威張って上から見下ろしていたかと思えば、うまく丸め込まれると、急に聞き分けが良くなるお嬢。",
        "つまり、性格も良く曲がると。料理はほとんど出来ないが、てんぷらの揚げ具合にはウルサイ。"
      ]
    }
  },
  {
    id: "nirinsou",
    name: "ニリンソウ",
    reading: "沢沿いに白い花を揺らす、春のやわらかな山菜",
    image: "assets/nirinsou.png",
    girlImage: "assets/nirinsou-girl.png",
    chibiImage: "assets/nirinsou-chibi.png",
    details: {
      "特徴": "キンポウゲ科の多年草。白い小花をふたつ並べるように咲かせることが多く、若い葉や茎を山菜として扱います。花がある時期は見分けの大きな助けになります。",
      "生息地": "山地の湿り気のある林床、沢沿い、明るい落葉樹林の下などに群生します。やわらかな日差しが入る場所でよく見られます。",
      "時期": "主に4月から5月。雪解けが遅い地域や標高の高い場所では、初夏にかけて姿を見せることもあります。",
      "食べ方": "おひたし、和え物、汁物、天ぷらなど。食用にする場合も、必ず確実に同定し、アク抜きや加熱を前提に扱います。",
      "人気の地方": "北海道、東北、信越など、春の山菜採りが盛んな地域で親しまれています。",
      "注意すべき毒草": "最重要はトリカブト類です。芽生えの時期はニリンソウとよく似ており、誤食による重い中毒例があります。花のない株や迷う株は採らず、経験者と確認してください。"
    },
    girl: {
      title: "双花の妖精 ニリンソウ",
      catchcopy: "ふたりで咲けば、森もぱっと明るくなるよ！",
      description: [
        "小さな白い花をふたつ並べるように咲かせる、仲良し双子の山菜少女。沢の音が聞こえる明るい林床が好きで、春の森にやさしい光を散らすように現れる。",
        "ふたりとも人なつっこく、見つけてもらえると手を取り合って喜ぶ。片方が慎重で、もう片方が少しだけ冒険好き。けれど危ないものには敏感で、トリカブトの気配にはすぐ真顔になる。",
        "料理ではおひたしや和え物のような、やわらかな味つけが好み。派手さはないけれど、春の食卓にそっと花を置くような存在。"
      ]
    }
  },
  {
    id: "katakuri",
    name: "カタクリ",
    reading: "春の林床にうつむいて咲く、薄紫の山菜",
    image: "assets/katakuri.png",
    girlImage: "assets/katakuri-girl.png",
    chibiImage: "assets/katakuri-chibi.png",
    details: {
      "特徴": "ユリ科の多年草。春先に薄紫色の花をうつむくように咲かせ、斑模様のある葉を広げます。若葉や花を山菜として扱うことがあります。",
      "生息地": "落葉広葉樹林の明るい林床や斜面に群生します。春だけ姿を見せ、木々の葉が茂るころには地上部が消えていく早春植物です。",
      "時期": "主に3月から5月。雪解けの早い地域では春先、標高の高い場所では少し遅れて見られます。",
      "食べ方": "おひたし、和え物、天ぷら、酢の物など。花は彩りとして使われますが、群生地を傷めないよう採りすぎには注意が必要です。",
      "人気の地方": "北海道、本州の山地、東北、信越、北関東など、落葉樹林の春を楽しむ地域で知られています。",
      "注意すべき毒草": "強い毒草との代表的な混同例は多くありませんが、地域によっては保護対象や採取禁止の場所があります。葉や花が確実に確認できない株、保護地、私有地では採らないでください。"
    },
    girl: {
      title: "薄紫の眠り姫 カタクリ",
      catchcopy: "春が来たら、少しだけ目を覚ますの……。",
      description: [
        "春の短い時間だけ林床に姿を見せる、物静かな山菜少女。薄紫の髪と伏せたまなざしは、まだ冬の夢を半分抱えたままのようで、にぎやかな場所より木漏れ日の静けさを好む。",
        "本人は目立つつもりがないのに、花が咲くと周囲の空気まで淡く染めてしまう。褒められると小さくうつむき、けれど内心では少しだけ誇らしい。",
        "料理はおひたしや酢の物のような、淡い味つけが好き。採りすぎられるのは苦手で、群生地を大切にしてくれる人には、春の秘密をそっと教えてくれる。"
      ]
    }
  },
  {
    id: "urui",
    name: "ウルイ",
    reading: "みずみずしい葉柄が魅力の、沢沿いの春山菜",
    image: "assets/urui.png",
    girlImage: "assets/urui-girl.png",
    chibiImage: "assets/urui-chibi.png",
    details: {
      "特徴": "オオバギボウシの若芽を山菜名でウルイと呼びます。すらりと伸びる葉柄と大きな葉が特徴で、ぬめりと軽い歯ざわりが楽しめます。",
      "生息地": "山地の沢沿い、湿り気のある斜面、林縁などに群生します。水気のある明るい場所で見つかることが多い山菜です。",
      "時期": "主に4月から6月。若芽から葉が開きはじめるころまでが食べやすい時期です。",
      "食べ方": "おひたし、酢味噌和え、浅漬け、炒め物、汁物など。クセが少なく、しゃきっとした食感とぬめりを生かす料理に向きます。",
      "人気の地方": "東北、信越、北海道などでよく親しまれ、雪国の春を告げる山菜として扱われます。",
      "注意すべき毒草": "特にバイケイソウ類との誤食に注意が必要です。若芽の時期は姿が似ることがあるため、葉脈、葉の質感、生え方を確認し、迷う株は採らないでください。"
    },
    girl: {
      title: "沢風の姫 ウルイ",
      catchcopy: "さらさら、しゃきしゃき。春の水音を連れてきたよ。",
      description: [
        "沢沿いの光を受けて、白と若草色の衣をふわりとなびかせる山菜少女。涼しげで上品な雰囲気だが、実はかなり面倒見がよく、迷った人を水音のする方へ案内してくれる。",
        "クセが少なく誰とでも合わせられる性格で、場を荒らさずするりと溶け込むのが得意。けれど自分のしゃきっとした食感には密かな自信があり、酢味噌和えの話になると少しだけ得意げになる。",
        "毒草との見間違いには厳しく、バイケイソウを見かけると普段の柔らかい声が急に引き締まる。優しいけれど、山の約束にはまっすぐな少女。"
      ]
    }
  },
  {
    id: "kogomi",
    name: "コゴミ",
    reading: "くるりと丸まる若芽がかわいい、春のシダ山菜",
    image: "assets/kogomi.png",
    girlImage: "assets/kogomi-girl.png",
    chibiImage: "assets/kogomi-chibi.png",
    details: {
      "特徴": "クサソテツの若芽をコゴミと呼びます。先端がくるりと巻いた姿が特徴で、アクが少なく食べやすい山菜として親しまれています。",
      "生息地": "山地の沢沿い、湿り気のある林縁、川辺や斜面などにまとまって生えます。水気のある明るい場所で見つかりやすい山菜です。",
      "時期": "主に4月から5月。若芽が巻いた状態のころが食べごろで、伸びすぎると硬くなりやすくなります。",
      "食べ方": "おひたし、胡麻和え、天ぷら、炒め物、味噌汁など。アクが少ないため下処理しやすく、シャキッとした食感を楽しめます。",
      "人気の地方": "東北、信越、北陸、北海道など、雪解け後の山菜として広く親しまれています。",
      "注意すべき毒草": "似たシダの若芽と見間違うことがあります。綿毛が多いもの、強い苦みや違和感があるもの、種類が確信できないものは採らないでください。"
    },
    girl: {
      title: "渦芽の元気っ子 コゴミ",
      catchcopy: "くるくる起きたよ！今日も山で遊ぼっ！",
      description: [
        "くるりと巻いた若芽みたいな髪を弾ませて、沢沿いを駆け回る元気いっぱいの山菜少女。朝が来ると両手を上げて伸びをして、山じゅうに春が来たことを知らせたがる。",
        "人なつっこくて、見つけてもらうとすぐに笑顔になる。難しいことは考えすぎず、まず動いてみるタイプだが、群生地の仲間たちを踏まれないように見張る責任感もちゃんとある。",
        "料理は胡麻和えと天ぷらが好き。アクが少ないことをひそかに誇っていて、『わたし、すぐ食卓に行けるよ！』と胸を張る。"
      ]
    }
  },
  {
    id: "udo",
    name: "ウド",
    reading: "香りとほろ苦さが春を告げる、山の若芽",
    image: "assets/udo.png",
    girlImage: "assets/udo-girl.png",
    chibiImage: "assets/udo-chibi.png",
    details: {
      "特徴": "ウコギ科の多年草。太く伸びる若芽や茎を山菜として楽しみます。独特の香りとほろ苦さ、しゃきっとした食感が魅力です。",
      "生息地": "山地の沢沿い、林縁、斜面、やや湿った明るい場所などに生えます。春先に芽吹く若い株が食用として扱われます。",
      "時期": "主に4月から6月。地域や標高によって前後し、芽が伸びすぎる前のやわらかい時期が食べごろです。",
      "食べ方": "酢味噌和え、きんぴら、天ぷら、炒め物、味噌汁など。皮や硬い部分も調理できることがあり、アク抜きをして香りを生かします。",
      "人気の地方": "東北、信越、北関東など、春の山菜料理が盛んな地域で親しまれています。栽培ものの白ウドも広く流通しています。",
      "注意すべき毒草": "若芽の時期は別種の芽と見間違うことがあります。ウド特有の香り、茎の質感、葉の出方を確認し、確信できないものは採らないでください。"
    },
    girl: {
      title: "山香の籠姫 ウド",
      catchcopy: "ふふ、春の香りを籠いっぱいに摘んできました。",
      description: [
        "雪解けの沢沿いに静かに立つ、落ち着いた雰囲気の山菜少女。白と若草色の衣を少し泥で汚しながら、籠いっぱいに春の芽を集めて歩く。",
        "おっとりして見えるが、香りにはとても敏感。山の空気の変化や芽吹きの気配を誰より早く察して、まだ眠たげな森に春を知らせてくれる。",
        "料理では酢味噌和えときんぴらが好き。自分のほろ苦さを大人の魅力だと思っていて、褒められると照れつつも、少しだけ誇らしげに微笑む。"
      ]
    }
  },
  {
    id: "nemagaritake",
    name: "ネマガリタケ",
    reading: "笹やぶから顔を出す、北国の細いたけのこ",
    image: "assets/nemagaritake.png",
    girlImage: "assets/nemagaritake-girl.png",
    chibiImage: "assets/nemagaritake-chibi.png",
    details: {
      "特徴": "チシマザサなどの若いタケノコをネマガリタケと呼びます。細くしなやかで、根元が曲がるように伸びることから名づけられました。",
      "生息地": "北海道や東北、信越などの山地に多く、笹やぶや斜面、湿り気のある林内に出ます。密なやぶの中で見つかることが多い山菜です。",
      "時期": "主に5月から6月。雪解け後、若いたけのこが地表に顔を出す短い時期が採りごろです。",
      "食べ方": "焼きたけのこ、味噌汁、煮物、天ぷら、炊き込みご飯など。皮をむいて下ゆでし、甘みと歯ざわりを楽しみます。",
      "人気の地方": "北海道、青森、秋田、山形、長野、新潟などで特に親しまれています。地域によっては姫竹、根曲がり竹とも呼ばれます。",
      "注意すべき毒草": "毒草よりも、採取地のルール、道迷い、急斜面、クマとの遭遇に注意が必要です。笹やぶでは視界が悪くなるため、単独行動や採りすぎは避けてください。"
    },
    girl: {
      title: "笹やぶの小熊姫 ネマガリタケ",
      catchcopy: "がおーっ！笹やぶの宝物、見つけに行こ！",
      description: [
        "熊の毛皮をすっぽりかぶって、笹やぶの中を元気に駆け回る山菜少女。小さな体に似合わず行動力があり、誰より早く地面から顔を出した若いたけのこを見つける。",
        "明るく人なつっこいが、山の怖さもよく知っている。夢中で採りすぎる人には袖を引っぱり、『帰り道、ちゃんと覚えてる？』と真顔で確認してくる。",
        "焼きたけのこと味噌汁が大好き。皮をむく音を聞くと目を輝かせ、甘くてしゃきっとした一口に、笹やぶ全部を自慢したくなる。"
      ]
    }
  },
  {
    id: "momijigasa",
    name: "モミジガサ",
    reading: "もみじ葉を広げる、香り豊かな山の青菜",
    image: "assets/momijigasa.png",
    girlImage: "assets/momijigasa-girl.png",
    chibiImage: "assets/momijigasa-chibi.png",
    details: {
      "特徴": "キク科の多年草。モミジのように切れ込んだ葉を持つことから名づけられました。若い茎葉を山菜として食べ、独特の香りとほろ苦さがあります。",
      "生息地": "山地の湿り気のある林内、沢沿い、日陰気味の斜面などに生えます。やわらかい若葉が伸びるころに見つけやすい山菜です。",
      "時期": "主に4月から6月。若い茎葉が食べごろで、成長しすぎると硬さや苦みが強くなります。",
      "食べ方": "おひたし、和え物、天ぷら、汁物、炒め物など。香りがあるため、軽くゆでてアクを抜き、風味を生かして食べます。",
      "人気の地方": "東北、信越、北関東などで親しまれ、地域によってはシドケの名でも知られています。",
      "注意すべき毒草": "若葉の時期は別種の草と見間違うことがあります。葉の切れ込み、茎の質感、香りを確認し、確信できないものや保護地の株は採らないでください。"
    },
    girl: {
      title: "青葉の小天狗 モミジガサ",
      catchcopy: "この葉っぱの傘で、山道を案内してやるぞ！",
      description: [
        "もみじ葉の傘と木の杖を掲げて、山道を元気に駆ける山菜少女。小さな案内役を自称していて、道に迷いそうな人を見ると得意げに先頭へ飛び出す。",
        "香りが強く、性格も少しだけクセが強い。けれど根は面倒見がよく、仲間思い。褒められると調子に乗り、葉っぱの傘をくるくる回して山じゅうに自慢する。",
        "料理ではおひたしと天ぷらが好き。ほろ苦さを『山の大人味』だと思っていて、苦いと言われるとむっとするが、結局は笑って許してくれる。"
      ]
    }
  },
  {
    id: "fukinotou",
    name: "フキノトウ",
    reading: "雪どけに顔を出す、春を告げるつぼみ",
    image: "assets/fukinotou.png",
    girlImage: "assets/fukinotou-girl.png",
    chibiImage: "assets/fukinotou-chibi.png",
    details: {
      "特徴": "フキの花芽で、雪どけのころ地面から丸く顔を出します。独特の香りと強めの苦みがあり、春の訪れを感じさせる代表的な山菜です。",
      "生息地": "田畑のあぜ、川沿い、山ぎわ、湿り気のある道端や林縁などに見られます。日当たりのよい場所では早く芽吹きます。",
      "時期": "主に2月から4月。雪国では雪解け直後から春先にかけて採られます。つぼみが締まっているころが食べやすい時期です。",
      "食べ方": "天ぷら、ふき味噌、和え物、炒め物など。苦みが強いので、料理に応じて下ゆでやアク抜きをして使います。",
      "人気の地方": "全国で親しまれますが、特に雪国や山里では春一番の山菜として大切にされています。",
      "注意すべき毒草": "フキノトウ自体はよく知られた山菜ですが、道端や農地周辺では農薬や排気ガスの影響に注意してください。大きく開きすぎたものや傷んだものは避け、採りすぎにも気をつけましょう。"
    },
    girl: {
      title: "春告げの蕾姫 フキノトウ",
      catchcopy: "春が来たよ、いちばんに知らせに来たの！",
      description: [
        "雪が残る山里に、誰より早く顔を出す小さな山菜少女。明るい黄色の髪とふわりとしたつぼみの衣で、寒さの中にも春が近いことを知らせてくれる。",
        "とても人なつっこく、見つけてもらうのが大好き。けれど自分の苦みを『春の合図』だと思っているので、苦いと言われてもにこにこしている。",
        "料理では天ぷらとふき味噌が好き。ほろ苦さを味方につけて、冬で眠っていた舌と心をぱっと起こしてくれる。"
      ]
    }
  },
  {
    id: "warabi",
    name: "わらび",
    reading: "くるりと伸びる若芽が春を告げる、里山の定番山菜",
    image: "assets/warabi.png",
    girlImage: "assets/warabi-girl.png",
    chibiImage: "assets/warabi-chibi.png",
    details: {
      "特徴": "シダ植物の若芽を食用にする山菜。先端がくるりと巻いた若い芽が特徴で、独特のぬめりと歯ざわりがあります。",
      "生息地": "日当たりのよい草地、林縁、山すそ、野原などに生えます。群生することが多く、春の里山で見つけやすい山菜です。",
      "時期": "主に4月から6月。若芽が伸びすぎる前の、やわらかく巻きが残るころが食べごろです。",
      "食べ方": "おひたし、和え物、煮物、炊き込みご飯、山菜そばなど。アク抜きをしてから調理し、ぬめりと香りを楽しみます。",
      "人気の地方": "全国の里山で親しまれ、東北、信越、北陸など山菜文化の濃い地域でもよく食べられます。",
      "注意すべき毒草": "必ずアク抜きをしてから食べてください。生食や不十分な下処理は避け、種類に確信が持てないシダ類や伸びすぎたものは採らないでください。"
    },
    girl: {
      title: "灰あくの里山娘 わらび",
      catchcopy: "ぱっと灰をまいて、春の苦みをおいしく変えるよ！",
      description: [
        "里山の明るい草地で、くるりと巻いた若芽のように元気よく背伸びする山菜少女。手のひらから灰をさらりと舞わせ、昔ながらの知恵で春の恵みをおいしく整える。",
        "面倒見がよく、下ごしらえを大事にするしっかり者。勢いだけで食べようとする人には、笑顔のまま『アク抜き、忘れちゃだめだよ』と釘を刺す。",
        "料理ではおひたしや山菜そばが好き。派手さはないけれど、ぬめりと香りで食卓に春の里山らしさを連れてくる。"
      ]
    }
  },
  {
    id: "gyojyaninniku",
    name: "行者ニンニク",
    reading: "力強い香りを秘めた、北国の春を告げる山菜",
    image: "assets/gyojyaninniku.png",
    girlImage: "assets/gyojyaninniku-girl.png",
    chibiImage: "assets/gyojyaninniku-chibi.png",
    details: {
      "特徴": "ユリ科ネギ属の多年草。葉は幅広くつやがあり、根元が赤紫色を帯びることがあります。強いニンニクのような香りが特徴です。",
      "生息地": "山地の林内や沢沿い、湿り気のある斜面などに生えます。寒冷地に多く、北海道や東北などで特に親しまれています。",
      "時期": "主に4月から5月。葉が若くやわらかい時期が食べごろで、伸びすぎる前に利用されます。",
      "食べ方": "おひたし、しょうゆ漬け、天ぷら、炒め物、餃子や卵とじなど。香りが強いので、少量でも料理のアクセントになります。",
      "人気の地方": "北海道や東北、信越など、寒い地域の山菜文化でよく親しまれています。",
      "注意すべき毒草": "イヌサフラン、スズラン、バイケイソウなど有毒植物との誤食に注意。香りだけに頼らず、葉や根元、生える場所を含めて確実に見分けてください。"
    },
    girl: {
      title: "深山の香り姫 行者ニンニク",
      catchcopy: "静かに摘んで。香りで居場所がばれてしまうから。",
      description: [
        "雪解けの山肌を静かに歩き、湿った林の奥で若葉を集める山菜少女。控えめな表情とは裏腹に、ひとたび近づけば力強い香りで存在感を放つ。",
        "人見知りで警戒心が強いが、信頼した相手には丁寧に山の恵みを分けてくれる。採りすぎや見分けの甘さには厳しく、危ないと思えば小さな声でもきっぱり止める。",
        "料理ではしょうゆ漬けや炒め物が好き。派手に笑うことは少ないけれど、食卓に並ぶと誰よりもはっきり春の山の力を知らせてくれる。"
      ]
    }
  }
];

const storageKey = "sansai-zukan-prototype-v1";
const app = document.querySelector("#app");
const overlay = document.querySelector("#unlockOverlay");

let state = loadState();
let previousRoute = "";

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (!routeButton) return;
  window.location.hash = routeButton.dataset.route;
});

window.addEventListener("hashchange", render);
render();

function loadState() {
  const fallback = {
    entries: {},
    photos: {},
    overrides: {},
    unlocked: {}
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(storageKey)) };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getPlant(id) {
  return plants.find((plant) => plant.id === id) || plants[0];
}

function getPlantState(id) {
  state.entries[id] ||= [];
  state.photos[id] ||= [];
  state.overrides[id] ||= {};
  state.unlocked[id] ||= false;
  return {
    entries: state.entries[id],
    photos: state.photos[id],
    overrides: state.overrides[id],
    unlocked: state.unlocked[id]
  };
}

function iconFor(plant) {
  const plantState = getPlantState(plant.id);
  return plantState.overrides.icon || (plantState.unlocked ? plant.girlImage : plant.image);
}

function detailImageFor(plant) {
  const plantState = getPlantState(plant.id);
  return plantState.overrides.detail || plant.image;
}

function render() {
  const route = window.location.hash || "#/";
  const isFlip = route.includes("/girl") || previousRoute.includes("/girl");
  previousRoute = route;

  const parts = route.replace("#/", "").split("/").filter(Boolean);
  app.classList.toggle("is-flipping", isFlip);

  if (parts.length === 0) {
    renderHome();
    return;
  }

  if (parts[0] === "plant") {
    const plant = getPlant(parts[1]);
    const page = parts[2] || "detail";
    if (page === "log") renderLog(plant);
    else if (page === "photos") renderPhotos(plant);
    else if (page === "girl") renderGirl(plant);
    else renderDetail(plant);
    return;
  }

  renderHome();
}

function renderHome() {
  app.innerHTML = `
    <section class="page-title home-title">
      <h1>山菜図鑑</h1>
      <p>春の山を記録する</p>
    </section>
    <section class="download-panel" aria-label="\u30a2\u30d7\u30ea\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9">
      <div>
        <strong>\u5c71\u83dc\u56f3\u9451\u3092\u6301\u3061\u51fa\u3059</strong>
        <span>\u3053\u306e\u30a2\u30d7\u30ea\u4e00\u5f0f\u3092ZIP\u3067\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002</span>
      </div>
      <a class="download-button" href="sansai-zukan-app.zip" download>\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9</a>
    </section>
    <section class="plant-grid" aria-label="山菜一覧">
      ${plants.map((plant) => {
        const plantState = getPlantState(plant.id);
        return `
          <button class="plant-tile" type="button" data-route="#/plant/${plant.id}">
            <span class="plant-icon">
              <img src="${iconFor(plant)}" alt="${plant.name}">
              ${plantState.unlocked ? `<span class="status-chip">解放済</span>` : ""}
            </span>
            <span class="plant-name">${plant.name}</span>
          </button>
        `;
      }).join("")}
    </section>
    <section class="home-note">
      <span>春の山からの便り</span>
    </section>
  `;
}

function renderDetail(plant) {
  app.innerHTML = `
    <div class="top-actions">
      <button class="action-button" type="button" data-route="#/plant/${plant.id}/log">記録入力</button>
    </div>

    <section class="hero">
      <img class="hero-image" src="${detailImageFor(plant)}" alt="${plant.name}の写真">
    </section>

    <section class="detail-head">
      <div>
        <h1>${plant.name}</h1>
        <p>${plant.reading}</p>
      </div>
    </section>

    <section class="info-grid">
      ${Object.entries(plant.details)
        .filter(([title]) => title !== "人気の地方")
        .map(([title, text]) => `
        <article class="info-card">
          <span class="info-icon" aria-hidden="true">${iconForDetail(title)}</span>
          <h2>${titleForDetail(title)}</h2>
          <p>${text}</p>
        </article>
      `).join("")}
    </section>

    <div class="bottom-actions">
      <button class="ghost-button" type="button" data-route="#/plant/${plant.id}/photos">写真ストックへ</button>
    </div>

    <button class="chibi-gate" type="button" data-route="#/plant/${plant.id}/girl" aria-label="${plant.name}の擬人化図鑑へ">
      <img src="${plant.chibiImage}" alt="${plant.name}のミニキャラ">
      <span>擬人化図鑑へ</span>
    </button>
  `;
}

function iconForDetail(title) {
  return {
    "特徴": "葉",
    "生息地": "山",
    "時期": "暦",
    "食べ方": "膳",
    "注意すべき毒草": "注"
  }[title] || "記";
}

function titleForDetail(title) {
  return title === "注意すべき毒草" ? "注意点" : title;
}

function renderLog(plant) {
  const plantState = getPlantState(plant.id);
  const today = new Date().toISOString().slice(0, 10);

  app.innerHTML = `
    <div class="top-actions">
      <button class="ghost-button" type="button" data-route="#/plant/${plant.id}">詳細へ戻る</button>
      <button class="ghost-button" type="button" data-route="#/">一覧</button>
    </div>

    <section class="page-title">
      <h1>${plant.name}の記録</h1>
      <p>見つけた場所や、その日のメモを保存できます。</p>
    </section>

    <form class="form-panel" id="recordForm">
      <div class="form-grid">
        <div class="field">
          <label for="place">見つけた場所</label>
          <input id="place" name="place" required placeholder="例：裏山の東斜面">
        </div>
        <div class="field">
          <label for="altitude">標高</label>
          <input id="altitude" name="altitude" inputmode="numeric" placeholder="例：620m">
        </div>
        <div class="field">
          <label for="date">年月日</label>
          <input id="date" name="date" type="date" value="${today}" required>
        </div>
        <div class="field full">
          <label for="note">ひとこと</label>
          <textarea id="note" name="note" placeholder="香り、量、天気、次に探したい場所など"></textarea>
        </div>
      </div>
      <div class="bottom-actions">
        <button class="action-button" type="submit">確定して保存</button>
      </div>
    </form>

    <section id="recordList" class="record-list" aria-label="保存した記録">
      ${renderRecordList(plantState.entries)}
    </section>
  `;

  document.querySelector("#recordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    plantState.entries.unshift({
      id: crypto.randomUUID(),
      place: String(formData.get("place")).trim(),
      altitude: String(formData.get("altitude")).trim(),
      date: String(formData.get("date")).trim(),
      note: String(formData.get("note")).trim()
    });
    saveState();
    renderLog(plant);
  });

  document.querySelectorAll(".record-summary").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".record-card").classList.toggle("is-open");
    });
  });
}

function renderRecordList(entries) {
  if (!entries.length) {
    return `<p class="empty-state">まだ記録がありません。最初のコシアブラとの出会いを残しましょう。</p>`;
  }

  return entries.map((entry) => `
    <article class="record-card">
      <button class="record-summary" type="button">
        <span>
          <strong>${escapeHtml(entry.place || "場所未入力")}</strong>
          <span>${escapeHtml(entry.altitude || "標高未入力")}・${escapeHtml(entry.date || "日付未入力")}</span>
        </span>
        <span class="chevron">▽</span>
      </button>
      <div class="record-note">${entry.note ? escapeHtml(entry.note) : "ひとことは未入力です。"}</div>
    </article>
  `).join("");
}

function renderPhotos(plant) {
  const plantState = getPlantState(plant.id);

  app.innerHTML = `
    <div class="top-actions">
      <button class="ghost-button" type="button" data-route="#/plant/${plant.id}">詳細へ戻る</button>
      <button class="ghost-button" type="button" data-route="#/">一覧</button>
    </div>

    <section class="page-title">
      <h1>${plant.name}の写真</h1>
      <p>写真は登録時に軽くしてから保存します。登録した写真は一覧アイコンや詳細写真に差し替えできます。</p>
    </section>

    <section class="upload-zone">
      <label class="upload-label" for="photoInput">
        <span class="plus-mark">+</span>
        <span>写真を山菜図鑑に登録する</span>
      </label>
      <input id="photoInput" type="file" accept="image/*">
    </section>

    <div class="bottom-actions">
      <button class="ghost-button" type="button" id="resetIcon">一覧アイコンを標準に戻す</button>
      <button class="ghost-button" type="button" id="resetDetail">詳細写真を標準に戻す</button>
    </div>

    <section class="photo-grid" aria-label="登録した写真">
      ${renderPhotoGrid(plant, plantState.photos)}
    </section>
  `;

  document.querySelector("#photoInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const dataUrl = await compressImage(file);
    plantState.photos.unshift({
      id: crypto.randomUUID(),
      src: dataUrl,
      name: file.name,
      savedAt: new Date().toISOString()
    });
    saveState();
    renderPhotos(plant);
  });

  document.querySelector("#resetIcon").addEventListener("click", () => {
    delete plantState.overrides.icon;
    saveState();
    renderPhotos(plant);
  });

  document.querySelector("#resetDetail").addEventListener("click", () => {
    delete plantState.overrides.detail;
    saveState();
    renderPhotos(plant);
  });

  document.querySelectorAll("[data-photo-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const photo = plantState.photos.find((item) => item.id === button.dataset.photoId);
      if (!photo) return;
      plantState.overrides[button.dataset.photoAction] = photo.src;
      saveState();
      renderPhotos(plant);
    });
  });

  document.querySelectorAll("[data-photo-delete]").forEach((card) => {
    attachLongPressDelete(card, plant, plantState);
  });
}

function renderPhotoGrid(plant, photos) {
  if (!photos.length) {
    return `<p class="empty-state">まだ写真がありません。採った写真や現地の記録写真を追加できます。</p>`;
  }

  return photos.map((photo) => `
    <article class="photo-card" data-photo-delete="${photo.id}">
      <img src="${photo.src}" alt="${plant.name}の登録写真">
      <div class="photo-actions">
        <button class="ghost-button" type="button" data-photo-action="icon" data-photo-id="${photo.id}">一覧アイコンにする</button>
        <button class="ghost-button" type="button" data-photo-action="detail" data-photo-id="${photo.id}">詳細写真にする</button>
      </div>
    </article>
  `).join("");
}

function renderGirl(plant) {
  const plantState = getPlantState(plant.id);

  app.innerHTML = `
    <div class="top-actions">
      <button class="ghost-button" type="button" data-route="#/plant/${plant.id}">山菜詳細へ戻る</button>
      <button class="ghost-button" type="button" data-route="#/">一覧</button>
    </div>

    <section class="girl-panel">
      <div class="girl-image-wrap">
        <img class="girl-image ${plantState.unlocked ? "" : "locked"}" src="${plant.girlImage}" alt="${plant.name}の擬人化少女">
        ${plantState.unlocked ? "" : `<span class="locked-badge">未解放</span>`}
      </div>
      <div class="girl-info">
        ${plantState.unlocked ? renderUnlockedGirl(plant) : renderLockedGirl(plant)}
      </div>
    </section>
  `;

  const unlockButton = document.querySelector("#unlockGirl");
  if (unlockButton) {
    unlockButton.addEventListener("click", () => unlockGirl(plant));
  }

  const lockButton = document.querySelector("#lockGirl");
  if (lockButton) {
    lockButton.addEventListener("click", () => lockGirl(plant));
  }
}

function renderLockedGirl(plant) {
  return `
    <h1>？？？</h1>
    <p>？？？</p>
    <button class="action-button" type="button" id="unlockGirl">${plant.name}をみつけた！</button>
  `;
}

function renderUnlockedGirl(plant) {
  return `
    <h1>${plant.girl.title}</h1>
    <p class="girl-quote">${plant.girl.catchcopy}</p>
    <div class="girl-description">
      ${plant.girl.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <div class="bottom-actions">
      <button class="ghost-button danger-button" type="button" id="lockGirl">未解放に戻す</button>
    </div>
  `;
}

function unlockGirl(plant) {
  state.unlocked[plant.id] = true;
  saveState();
  document.querySelector("#unlockImage").src = plant.girlImage;
  document.querySelector("#unlockText").textContent = `${plant.name}少女 解放`;
  overlay.hidden = false;
  window.setTimeout(() => {
    overlay.hidden = true;
    renderGirl(plant);
  }, 1500);
}

function lockGirl(plant) {
  state.unlocked[plant.id] = false;
  saveState();
  renderGirl(plant);
}

function attachLongPressDelete(card, plant, plantState) {
  let timerId = 0;
  let longPressed = false;

  const clearTimer = () => {
    window.clearTimeout(timerId);
    timerId = 0;
  };

  card.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch") return;
    if (event.target.closest("button")) return;
    longPressed = false;
    timerId = window.setTimeout(() => {
      longPressed = true;
      deletePhoto(card.dataset.photoDelete, plant, plantState);
    }, 720);
  });

  card.addEventListener("pointerup", clearTimer);
  card.addEventListener("pointercancel", clearTimer);
  card.addEventListener("pointerleave", clearTimer);
  card.addEventListener("contextmenu", (event) => {
    if (longPressed) event.preventDefault();
  });
}

function deletePhoto(photoId, plant, plantState) {
  const photo = plantState.photos.find((item) => item.id === photoId);
  if (!photo) return;
  const shouldDelete = window.confirm("この写真を削除しますか？");
  if (!shouldDelete) return;

  plantState.photos = plantState.photos.filter((item) => item.id !== photoId);
  state.photos[plant.id] = plantState.photos;

  if (plantState.overrides.icon === photo.src) delete plantState.overrides.icon;
  if (plantState.overrides.detail === photo.src) delete plantState.overrides.detail;

  saveState();
  renderPhotos(plant);
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSize = 1400;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

