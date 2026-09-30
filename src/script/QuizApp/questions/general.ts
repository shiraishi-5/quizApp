import type { Question } from "@/script/types";

export const GENERAL_QUESTIONS: Question[] = [
  {
    title: "日本の首都はどこですか？",
    answers: [
      { text: "大阪", isCorrect: false },
      { text: "名古屋", isCorrect: false },
      { text: "東京", isCorrect: true },
      { text: "福岡", isCorrect: false },
    ],
  },
  {
    title: "1年は何日ですか？（平年）",
    answers: [
      { text: "365日", isCorrect: true },
      { text: "360日", isCorrect: false },
      { text: "366日", isCorrect: false },
      { text: "364日", isCorrect: false },
    ],
  },
  {
    title: "富士山がある都道府県はどこですか？",
    answers: [
      { text: "長野県", isCorrect: false },
      { text: "山梨県", isCorrect: true },
      { text: "静岡県", isCorrect: false },
      { text: "神奈川県", isCorrect: false },
    ],
  },
  {
    title: "地球は太陽の周りを何日で1周しますか？",
    answers: [
      { text: "180日", isCorrect: false },
      { text: "365日", isCorrect: true },
      { text: "730日", isCorrect: false },
      { text: "90日", isCorrect: false },
    ],
  },
  {
    title: "人間の体で血液を送り出す臓器はどれですか？",
    answers: [
      { text: "肺", isCorrect: false },
      { text: "胃", isCorrect: false },
      { text: "心臓", isCorrect: true },
      { text: "肝臓", isCorrect: false },
    ],
  },
  {
    title: "水の化学式はどれですか？",
    answers: [
      { text: "CO2", isCorrect: false },
      { text: "H2O", isCorrect: true },
      { text: "O2", isCorrect: false },
      { text: "NaCl", isCorrect: false },
    ],
  },
  {
    title: "日本で一番大きい島はどれですか？",
    answers: [
      { text: "北海道", isCorrect: false },
      { text: "本州", isCorrect: true },
      { text: "九州", isCorrect: false },
      { text: "四国", isCorrect: false },
    ],
  },
  {
    title: "オリンピックのシンボルマークは何色で構成されていますか？",
    answers: [
      { text: "3色", isCorrect: false },
      { text: "4色", isCorrect: false },
      { text: "5色", isCorrect: true },
      { text: "6色", isCorrect: false },
    ],
  },
  {
    title: "日本の通貨単位は何ですか？",
    answers: [
      { text: "ドル", isCorrect: false },
      { text: "ウォン", isCorrect: false },
      { text: "元", isCorrect: false },
      { text: "円", isCorrect: true },
    ],
  },
  {
    title: "英語で『犬』を表す単語はどれですか？",
    answers: [
      { text: "Cat", isCorrect: false },
      { text: "Dog", isCorrect: true },
      { text: "Bird", isCorrect: false },
      { text: "Fish", isCorrect: false },
    ],
  },
  {
    title: "信号機の『進め』を表す色はどれですか？",
    answers: [
      { text: "赤", isCorrect: false },
      { text: "黄", isCorrect: false },
      { text: "青", isCorrect: true },
      { text: "白", isCorrect: false },
    ],
  },
  {
    title: "1メートルは何センチメートルですか？",
    answers: [
      { text: "10", isCorrect: false },
      { text: "100", isCorrect: true },
      { text: "1000", isCorrect: false },
      { text: "50", isCorrect: false },
    ],
  },
  {
    title: "太陽系で最も大きい惑星はどれですか？",
    answers: [
      { text: "地球", isCorrect: false },
      { text: "火星", isCorrect: false },
      { text: "木星", isCorrect: true },
      { text: "土星", isCorrect: false },
    ],
  },
  {
    title: "日本の国旗の白地に描かれている図形は何ですか？",
    answers: [
      { text: "星", isCorrect: false },
      { text: "三角形", isCorrect: false },
      { text: "円", isCorrect: true },
      { text: "四角形", isCorrect: false },
    ],
  },
  {
    title: "1週間は何日ですか？",
    answers: [
      { text: "5日", isCorrect: false },
      { text: "6日", isCorrect: false },
      { text: "7日", isCorrect: true },
      { text: "8日", isCorrect: false },
    ],
  },
];
