const plants = [
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
        "とても人なつっこく、見つけてもらうのが大好き。",
        "天ぷらがとにかく大好きで、毎日のように作ってくれる。本当は2~3個で十分なのだけど、「もっと欲しいでしょ！」と満面の笑みで言われると、仕方なく食べるしかなくなる。苦いからといって、花をもぎ取られると少し悲しそうにする。"
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
      catchcopy: "私たち、ずっと一緒だよ！！",
      description: [
        "小さな白い花をふたつ並べるように咲かせる、小さな双子の妖精。「友情」「協力」「ずっと離れない」、花言葉を象徴するような存在ではあるが、実はそうでも無かったり。",
        "まれに、というかしばしば一人でいる時もあれば、なんなら三つ子になっても気にしない能天気さがある。",
        "自身を山菜だとは思っておらず、春を感じる程度の野草として、花を添えつつ楽しんでほしいと思っている。",
        "トリカブトによる犠牲者が出ないよう、慌てて伝えに行こうとするが、花が咲くころには手遅れが多い事を、非常に不本意に感じている。"
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
      title: "早春の眠り姫 カタクリ",
      catchcopy: "お日様が暖かい、、、ちょっとだけ、起きてみようかな。",
      description: [
        "雪融け後、まだ木々や植物が生い茂る前のちょっとの間だけ目を覚ます、早春を告げる娘。暖かくなると目を覚まし、雨が降れば眠り、他の山菜たちが目を覚ます頃には、また深い眠りについてしまう。スプリング・エフェメラルを代表する娘である。",
        "花言葉は「初恋」。",
        "恥じらうようにうつむいて咲く、その可憐な姿でつけられた言葉だが、彼女は別に恋をしているわけでもない。ただ単に、寝起きで眠いだけ。"
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
      title: "里山の灰娘 わらび",
      catchcopy: "元気がないなら、まず土を見な！",
      description: [
        "山里のことなら何でも知っている、頼れる姉御肌の山菜娘。",
        "困っている人を見つけると放っておけず、誰よりも先に動き出す行動派。面倒見がよく、春の山菜たちからも「困ったらワラビ姉さん」と慕われている。",
        "口ぐせは「まずは土づくりから！」。山菜も畑も元気な土があってこそだと信じて疑わず、毎年せっせと灰を撒いている。しかし熱が入りすぎるあまり、「ちょっと撒きすぎじゃない？」と周りに止められることもしばしば。それでも本人は「これくらいでちょうどいいって！」と笑っている。"
      ]
    }
  },
  {
    id: "zenmai",
    name: "ゼンマイ",
    reading: "ふわりと巻いた若芽をほどく、山里の保存山菜",
    image: "assets/zenmai.png",
    girlImage: "assets/zenmai-girl.png",
    chibiImage: "assets/zenmai-chibi.png",
    details: {
      "特徴": "シダ植物の若芽を食用にする山菜。綿毛に包まれた渦巻き状の若芽が特徴で、下処理すると独特の歯ざわりと風味が楽しめます。",
      "生息地": "山地の林内、斜面、沢沿い、湿り気のある場所などに生えます。春先に落ち葉の間から巻いた若芽を伸ばします。",
      "時期": "主に4月から5月。若芽が伸びきる前の、やわらかく巻きが残るころが採りごろです。",
      "食べ方": "アク抜きしてから煮物、炒め煮、和え物、山菜ご飯などにします。乾燥保存されることも多く、戻して料理に使われます。",
      "人気の地方": "東北や信越、北陸などの山間部で保存山菜として親しまれ、正月料理や郷土料理にも使われます。",
      "注意すべき毒草": "食用には下処理が必要です。生食は避け、アク抜きや乾燥戻しをしてから調理してください。採りすぎると株が弱るため、必要な分だけ採るようにしてください。"
    },
    girl: {
      title: "縮れ毛のうずまき嬢 ゼンマイ",
      catchcopy: "焦らないで、1日かかったっていいと思う。",
      description: [
        "縮れ毛の黒髪に、うずまき柄の和服、フワフワの繊維を肩にかけている。非常におっとりとしており、一日中ゆっくりしていても気にしない、スローな性格。",
        "ゆでる、干す、揉む、広げる。そしてまたゆでる、戻す。行程がいくつあったって、一日かかかったって平気。ゆっくりすればいいんだから。",
        "、、、ここだけの話ではあるが、噂によると彼女には無いものが「ある」と証言するものもおり、彼女は本当に女性か？という噂が、ひっそりと流れている。"
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
      title: "若緑の丸まり嬢 コゴミ",
      catchcopy: "あ！お客さんだ！こっちに私たちの畑があるよっ！！",
      description: [
        "日当たりの良いところが好きで、暖かくなると目を覚ます。とんでもない癖毛で、いつもゴミが絡まっている。梳いても梳いてもすぐボーボーに伸びる、この髪が悩み。",
        "早起きすぎて、他の仲間たちと中々会えないのを寂しがっている。",
        "山奥に人がやってくると、手を伸ばしてアピールし、自分たちの畑を紹介しようとするが、その頃には手遅れな程ボーボーになっていることが多いので、もうちょっと早く教えてくれると助かる。"
      ]
    }
  },
  {
    id: "taranome",
    name: "タラの芽",
    reading: "山菜の王様と呼ばれる、香り高い春の若芽",
    image: "assets/taranome.png",
    girlImage: "assets/taranome-girl.png",
    chibiImage: "assets/taranome-chibi.png",
    details: {
      "特徴": "タラノキの若芽。ふっくらとした芽に細かなとげがあり、独特の香りとほろ苦さがあります。山菜の王様とも呼ばれる人気の山菜です。",
      "生息地": "山すそ、林縁、伐採跡、日当たりのよい斜面などに生えます。とげのある幹の先端に芽をつけます。",
      "時期": "主に4月から5月。芽が開きすぎる前の、ふっくらと伸び始めたころが食べごろです。",
      "食べ方": "天ぷらが定番。ほかにおひたし、和え物、炒め物などにも使われます。香りと苦みを楽しむなら、シンプルな調理が向いています。",
      "人気の地方": "全国の山間部で親しまれ、春の山菜として非常に人気があります。東北や信越などでもよく食べられます。",
      "注意すべき毒草": "ウルシ類など似た環境に生える植物との混同に注意。採る際は幹や芽の特徴を確認してください。木を弱らせないため、芽をすべて採らず、必要な分だけ残して採取してください。"
    },
    girl: {
      title: "棘衣の女帝 タラの芽",
      catchcopy: "フン、そう簡単に届くと思うな。",
      description: [
        "仁王立ちに腕組み、堂々たる風格は王に相応しい。これでも性別は女性。男勝りな体格と威厳は、まさにタラの芽を象徴するようである。",
        "自身が山菜の王と呼ばれていることは認識こそしているが、そんなことは本人にとっては当然の事。",
        "人の上に居る事を常とし、コシアブラ嬢のように優柔不断さも無いため、決して下手に出ようとしない。"
      ]
    }
  },
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
    id: "harigiri",
    name: "ハリギリ",
    reading: "鋭い棘の先に芽吹く、力強い春の若芽",
    image: "assets/harigiri.png",
    girlImage: "assets/harigiri-girl.png",
    chibiImage: "assets/harigiri-chibi.png",
    details: {
      "特徴": "ウコギ科の落葉高木。幹や枝に鋭い棘があり、春に伸びる若芽を山菜として利用します。香りとほろ苦さがあり、野性味のある味わいです。",
      "生息地": "山地の林内、林縁、斜面などに生えます。日当たりのよい場所にも見られ、太い幹から力強く芽を出します。",
      "時期": "主に4月から5月。若芽が開きすぎる前の、やわらかい時期が食べごろです。",
      "食べ方": "天ぷら、おひたし、和え物、炒め物など。香りと苦みが強めなので、天ぷらにすると食べやすく人気があります。",
      "人気の地方": "東北や北海道などで親しまれ、タラの芽に似た春の木の芽山菜として楽しまれています。",
      "注意すべき毒草": "棘が鋭いため採取時はけがに注意。ウコギ科の木の芽は似たものがあるため、葉や芽、幹の特徴を確認してください。木を弱らせないよう採りすぎは避けましょう。"
    },
    girl: {
      title: "針棘の山門番 ハリギリ",
      catchcopy: "無断で山へ踏み込むな。……用があるなら、筋を通せ。",
      description: [
        "鋭い棘をまとった枝のそばに立つ、荒々しくも美しい山菜少女。黒と緑の衣を揺らしながら山道を睨む姿は、春山の入口を守る門番のよう。",
        "警戒心が強く、初対面にはぶっきらぼう。けれど山を荒らさず、必要な分だけいただく者には静かに道を開く。口は悪いが、筋の通った相手には案外面倒見がよい。",
        "料理では天ぷらが好き。強い香りとほろ苦さを隠さず出すのが信条で、甘やかされた味つけには少し不満げな顔をする。"
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
      catchcopy: "どうか皆様、私と毒草をお間違えなさいませんよう。",
      description: [
        "白と若草色の衣をふわりとなびかせ、涼しげで美しい娘。",
        "クセが少なく誰とでも合わせられる性格で、場を荒らさずするりと溶け込むのが得意。けれど、美しい容姿、芯の通った性格、他者からの信頼はちゃっかり自認しており、特に容姿は誰にも負けないという、プライドの高さがある。褒められると謙遜はするが、内心は嬉しい。酢味噌和えの話になると少しだけ得意げになる。",
        "バイケイソウについては良く思っていないらしく、なぜあんな野蛮な者と自分を間違うのだろうか？と、これだけは全く納得がいかない様である。"
      ]
    }
  },
  {
    id: "mizu",
    name: "ミズ",
    reading: "沢音のそばで育つ、みずみずしい山の青菜",
    image: "assets/mizu.png",
    girlImage: "assets/mizu-girl.png",
    chibiImage: "assets/mizu-chibi.png",
    details: {
      "特徴": "正式にはウワバミソウと呼ばれることが多い山菜。やわらかな茎と葉を持ち、クセが少なく、シャキッとした歯ざわりとぬめりが楽しめます。",
      "生息地": "沢沿いや湿った林内、谷筋など、水気の多い涼しい場所に群生します。名前の通り、みずみずしい環境を好みます。",
      "時期": "主に5月から7月。若くやわらかい茎葉が食べごろで、地域によっては夏まで利用されます。",
      "食べ方": "おひたし、和え物、炒め物、味噌汁、漬け物など。下ゆでして皮をむくと食べやすく、独特のぬめりが料理に合います。",
      "人気の地方": "東北や日本海側の山間部で特に親しまれ、家庭料理や保存食にもよく使われます。",
      "注意すべき毒草": "似た葉を持つ野草と間違えないよう、茎や葉のつき方、生育場所を確認してください。沢沿いで採る際は足元や増水にも注意が必要です。"
    },
    girl: {
      title: "渓谷の清涼娘 ミズ",
      catchcopy: "あの流れ込みに、きっといるよ。",
      description: [
        "マイナスイオンたっぷりな場所を好み、清流の飛沫を全身に浴びている。濡れた岩場が連続するような場所を、軽やかに進む。",
        "山奥の支流で釣りをしていると会えるかもしれない。",
        "「渓流の旬は2回あるんだよ」と言い、特に春と秋のシーズンになると活発になる。"
      ]
    }
  },
  {
    id: "wasabi",
    name: "わさび",
    reading: "清流のそばで香りを磨く、涼やかな山の辛み",
    image: "assets/wasabi.png",
    girlImage: "assets/wasabi-girl.png",
    chibiImage: "assets/wasabi-chibi.png",
    details: {
      "特徴": "アブラナ科の多年草。丸みのある葉と白い小花をつけ、根茎には独特の清涼な辛みがあります。葉や茎、花も食用にされます。",
      "生息地": "冷たく澄んだ沢沿いや湧き水のある湿った場所を好みます。強い日差しを避ける、涼しい水辺に生えることが多い植物です。",
      "時期": "葉や茎は春から初夏、花は春に利用されます。根茎は栽培品として通年見かけますが、山ではむやみに採らない配慮が必要です。",
      "食べ方": "葉わさびのしょうゆ漬け、花わさびのおひたし、刻みわさび、薬味など。辛みを引き出すには下処理や温度管理が大切です。",
      "人気の地方": "静岡、長野、伊豆、安曇野など、清流を生かしたわさび栽培地で特に親しまれています。",
      "注意すべき毒草": "自生地では保護や採取制限がある場合があります。水質の悪い場所のものは避け、似た水辺植物と混同しないよう葉や花、香りを確認してください。"
    },
    girl: {
      title: "清流の白花姫 わさび",
      catchcopy: "近づきすぎると、つんと泣いちゃうかもしれません。",
      description: [
        "澄んだ沢のほとりで、白い小花と淡い緑の衣を揺らす山菜少女。声は小さく控えめだが、清流の冷たさをそのまま宿したような凛とした気配を持っている。",
        "人見知りで恥ずかしがり屋。けれど内側にはきりっとした辛みがあり、礼を欠く相手には静かな一言でぴりりと釘を刺す。",
        "料理では葉わさびのしょうゆ漬けや花わさびのおひたしが好き。派手に主張しないが、ひと口で空気を変える清らかな辛みを誇りにしている。"
      ]
    }
  },
  {
    id: "nobiru",
    name: "ノビル",
    reading: "田畑のあぜで元気に伸びる、香り軽やかな野の小ねぎ",
    image: "assets/nobiru.png",
    girlImage: "assets/nobiru-girl.png",
    chibiImage: "assets/nobiru-chibi.png",
    details: {
      "特徴": "ヒガンバナ科ネギ属の多年草。細長い葉と白い小さな球根を持ち、ネギやニラに似た爽やかな香りがあります。",
      "生息地": "田畑のあぜ、道ばた、土手、草地など、人里に近い日当たりのよい場所で見られます。群れて生えることも多い山菜です。",
      "時期": "主に3月から5月。葉がやわらかく、球根もみずみずしい春先が食べごろです。",
      "食べ方": "酢味噌和え、天ぷら、炒め物、薬味、味噌汁など。球根はシャキッとした食感があり、葉は香りづけにも使えます。",
      "人気の地方": "全国の里山や田園地帯で親しまれ、春の野草として家庭料理にも取り入れられてきました。",
      "注意すべき毒草": "スイセンなど有毒植物との誤食に注意。必ずネギのような香りを確認し、葉や球根の形、生えている場所を含めて確実に見分けてください。"
    },
    girl: {
      title: "あぜ道の球根少女 ノビル",
      catchcopy: "ゆっくりひっぱってね！！",
      description: [
        "グリーンのシャツに白いダボっとしたパンツ。足を土で汚しながら走り回る、元気な少女。髪はグリーンのヘアゴムで結び、アクセントに白い球根を模したアクセサリーが揺れている。",
        "非常に庶民的な存在で、誰とでも仲良くなれる。",
        "そのへんの畑やあぜ道を歩いていると、そこら中で会えるかもしれない。かと思えば、いないところには全然居なかったり。"
      ]
    }
  },
  {
    id: "kanzou",
    name: "カンゾウ",
    reading: "橙の花を待つ、やわらかな春の若芽",
    image: "assets/kanzou.png",
    girlImage: "assets/kanzou-girl.png",
    chibiImage: "assets/kanzou-chibi.png",
    details: {
      "特徴": "ワスレグサ属の多年草。春の若芽はすっと伸びた幅広い葉が重なり、やわらかな緑色をしています。夏には橙色の花を咲かせます。",
      "生息地": "野原、土手、林縁、山すそなど、日当たりのよい草地に生えます。株になってまとまって出ることが多い山菜です。",
      "時期": "若芽は主に3月から5月。つぼみは初夏から夏にかけて利用されることがあります。",
      "食べ方": "若芽はおひたし、酢味噌和え、天ぷら、炒め物など。つぼみは炒め物や和え物にされ、ほんのり甘みのある風味を楽しめます。",
      "人気の地方": "全国の里山で見られ、若芽やつぼみを季節の山菜として楽しむ地域があります。",
      "注意すべき毒草": "スイセンやバイケイソウなど有毒植物との誤食に注意。葉だけで判断せず、株の形や生育場所を確認し、確実にわかるものだけを採ってください。"
    },
    girl: {
      title: "忘れ草の姫君 カンゾウ",
      catchcopy: "もうすぐ美しい花が咲きますよ。",
      description: [
        "万葉集にも歌われている、オレンジ色の美しい花を咲かせる姫。高貴な存在かと思いきや庶民的な存在で、誰にでも優しく、常に甘やかせてくれる。",
        "彼女の唯一の悩みは、跳ねやすい毛先の癖。特に寝起きは寝癖がひどく、結んで抑えているはいるが、どうしても毛先があちこちに跳ねる。",
        "だからといって、ピンピン草とか、ぴょんぴょん草とか言うのはやめて欲しいと思っている。"
      ]
    }
  },
  {
    id: "itadori",
    name: "イタドリ",
    reading: "ぽきりと折れる若い茎に、春の酸味を宿す山菜",
    image: "assets/itadori.png",
    girlImage: "assets/itadori-girl.png",
    chibiImage: "assets/itadori-chibi.png",
    details: {
      "特徴": "タデ科の多年草。赤みを帯びた太い若い茎と、節のある竹のような姿が特徴です。若い茎にはさわやかな酸味があります。",
      "生息地": "川沿い、土手、道ばた、山すそ、空き地など、日当たりのよい場所に力強く生えます。群生して大きく育つこともあります。",
      "時期": "主に4月から5月。茎がやわらかく、ぽきっと折れる若いうちが食べごろです。",
      "食べ方": "皮をむいて下処理し、炒め物、煮物、酢の物、和え物、塩漬けなどにします。酸味を生かした素朴な料理に向いています。",
      "人気の地方": "高知県など西日本を中心に食文化があり、地域によっては春の定番山菜として親しまれています。",
      "注意すべき毒草": "生育場所によっては農薬や排気ガスの影響を受けるため、採取場所に注意。シュウ酸を含むため、食べすぎや生食は避け、下処理して利用してください。"
    },
    girl: {
      title: "陽だまりのかじりっ子 イタドリ",
      catchcopy: "ん～っ、この酸っぱさがいいき！",
      description: [
        "日当たりの良い場所が好きなそばかす娘。黄緑色から赤のグラデーションがかかる服を着て、髪には小さな白い花のアクセサリー。",
        "酸っぱいイタドリを千切っては生でかじっては、美味しい美味しいと言っている。",
        "高知なまりの発音で、「こんなにうまいのに、もったいないちや！」 と、周りはイタドリを食べない事を不思議そうにしている。"
      ]
    }
  },
  {
    id: "cresson",
    name: "クレソン",
    reading: "清い流れに広がる、ぴりりと辛い水辺の青菜",
    image: "assets/cresson.png",
    girlImage: "assets/cresson-girl.png",
    chibiImage: "assets/cresson-chibi.png",
    details: {
      "特徴": "アブラナ科の多年草で、丸みのある小さな葉とみずみずしい茎を持ちます。さわやかな香りと、ぴりっとした辛みが特徴です。",
      "生息地": "湧き水の流れる小川や水路、湿った水辺などに生えます。水がきれいで流れのある場所を好み、群生することがあります。",
      "時期": "春から初夏にかけてやわらかい若芽が食べごろです。環境によっては長い期間収穫できますが、花が咲く前の若い部分が食べやすいです。",
      "食べ方": "サラダ、付け合わせ、炒め物、スープ、おひたしなど。肉料理に添えると辛みと香りがよいアクセントになります。",
      "人気の地方": "全国の水辺で見られ、洋食の付け合わせとしても山菜・野草としても親しまれています。",
      "注意すべき毒草": "水質の悪い場所や農薬・生活排水の影響がある場所では採らないでください。寄生虫や雑菌の心配があるため、野生のものはよく洗い、必要に応じて加熱して利用してください。"
    },
    girl: {
      title: "蘭国の繁殖娘 クレソン",
      catchcopy: "わわ、、、！ごめんなさい！こんなに生やしちゃってっ！",
      description: [
        "明治時代に日本にやって来た、異国出身の帰化娘。日本語はペラペラで、もはや本土には完全に馴染んでいるようにすら見える。",
        "長い髪は水に濡れると更に伸びるので、小川から池まで大繁殖させてしまうこともある。幸い、水が綺麗な場所にしか広がらないうえ、栄養豊富な葉を生やすので、周りとしては全くもって大歓迎ではある。",
        "が、本人としてはいつまでたっても外来種と自認しており、大繁殖については申し訳なさげな顔をしている。"
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
      title: "修験の香り姫 行者ニンニク",
      catchcopy: "二枚のものだけ採るんだよ。",
      description: [
        "雪融けの山肌を静かに歩き、萌え出た若葉を集める山菜少女。濃紺色の美しい瞳を持ち、民族衣装を着ている。",
        "体は丈夫な民族だが、世俗の人々が多く立ち入ると、ひっそりと姿を消してしまう。信頼できそうな相手には、山菜の群生地に案内してやり、採り方や見分け方を丁寧に教えてくれる。",
        "香りの強いものを好んで食べているので、この娘は美しい見た目に反し、体臭がすごい。"
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
      title: "深山の大乙女 ウド",
      catchcopy: "あの……あんまり、見ないでください……。",
      description: [
        "山奥でひっそり暮らす、大きな体の山菜のお姉さん。すくすくと育ち過ぎた大きな体がコンプレックスで、山奥にひっそり隠れるように暮らしている。なんなら一生、土の中に埋まっていたいとすら思っている。",
        "そのコミュ障すぎる性格とクセの強さで、万人受けはしないが、豊満な体つきは包容力があり、「いい香りもする」と、彼女の知らないところで隠れファンが年々増加中。が、当の本人は全く自分に自信が無いらしく、「私、何の役にも立ちませんので」と口癖のように話す。"
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
      title: "春山の熊姫 ネマガリタケ",
      catchcopy: "ひゃっ！？ ご、ごめんなさい！ クマじゃないです！",
      description: [
        "春になると笹藪の中を四つん這いになって歩き回り、小さなネマガリタケを夢中で探している女の子。ツキノワグマの毛皮をかぶっているのは「山ではこの方が暖かいから」という本人なりの理由らしいが、その姿のまま藪から突然現れるため、ばったり出くわした人を驚かせる。",
        "もちろん本人にそんなつもりはまったくなく、「またやっちゃった……」としょんぼり謝るのがお決まり。本名で呼ばれるのはあまり好きではないらしく、ヒメタケと呼んでもらえると喜ぶ。"
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
      title: "深山の若武者 モミジガサ",
      catchcopy: "いざ出陣じゃーーーっ！！",
      description: [
        "男勝りな性格で、村のガキ大将的な存在。大きな葉っぱを軍配代わりに振り、木の棒を名槍に見立てては、毎日のように戦国ごっこを繰り広げている。憧れの人物は木下藤吉郎。「身分なんて関係ない！天下は努力でつかむものだ！」が信条で、いつか自分も天下人になると本気で信じている。が、実際は武将の事は良く知らず、木下藤吉郎も誰か良く分かっていない。",
        "大人たちはモミジガサの事を「ほろ苦さが美味しい」と言うが、自分には苦さも味噌も、大人の味も何が美味しいのかさっぱりわからない。"
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
  const shouldResetScroll = route !== previousRoute;
  const isFlip = route.includes("/girl") || previousRoute.includes("/girl");
  previousRoute = route;

  const parts = route.replace("#/", "").split("/").filter(Boolean);
  app.classList.toggle("is-flipping", isFlip);

  if (parts.length === 0) {
    renderHome();
    resetScrollPosition(shouldResetScroll);
    return;
  }

  if (parts[0] === "plant") {
    const plant = getPlant(parts[1]);
    const page = parts[2] || "detail";
    if (page === "log") renderLog(plant);
    else if (page === "photos") renderPhotos(plant);
    else if (page === "girl") renderGirl(plant);
    else renderDetail(plant);
    resetScrollPosition(shouldResetScroll);
    return;
  }

  renderHome();
  resetScrollPosition(shouldResetScroll);
}

function resetScrollPosition(shouldResetScroll) {
  if (!shouldResetScroll) return;
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    app.scrollTop = 0;
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="page-title home-title">
      <h1>山菜図鑑</h1>
      <p>春の山を記録する</p>
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
      <p>※山菜の誤食には十分注意してください。本アプリはAIによる要約を含むため、毒草の判別や情報等には十分注意し、自己責任でのアプリ使用をお願いしています。</p>
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
  document.querySelector("#unlockText").textContent = "山菜娘開放！";
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

