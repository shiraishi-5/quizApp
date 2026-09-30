import type { Question } from "../types";


export const QUESTIONS: Question[] = [
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
    title: "Javaでクラスを継承するときに使用するキーワードは？",
    answers: [
      { text: "implements", isCorrect: false },
      { text: "extends", isCorrect: true },
      { text: "import", isCorrect: false },
      { text: "package", isCorrect: false },
    ],
  },
  {
    title: "地球が太陽の周りを1周する期間は？",
    answers: [
      { text: "約30日", isCorrect: false },
      { text: "約100日", isCorrect: false },
      { text: "約365日", isCorrect: true },
      { text: "約730日", isCorrect: false },
    ],
  },
  {
    title: "HTTPのデフォルトポート番号は？",
    answers: [
      { text: "80", isCorrect: true },
      { text: "21", isCorrect: false },
      { text: "25", isCorrect: false },
      { text: "443", isCorrect: false },
    ],
  },
  {
    title: "日本で最も高い山は？",
    answers: [
      { text: "阿蘇山", isCorrect: false },
      { text: "富士山", isCorrect: true },
      { text: "桜島", isCorrect: false },
      { text: "八甲田山", isCorrect: false },
    ],
  },
  {
    title: "SQLでデータを取得する命令は？",
    answers: [
      { text: "INSERT", isCorrect: false },
      { text: "UPDATE", isCorrect: false },
      { text: "DELETE", isCorrect: false },
      { text: "SELECT", isCorrect: true },
    ],
  },
  {
    title: "人間の血液を全身へ送り出す臓器は？",
    answers: [
      { text: "肝臓", isCorrect: false },
      { text: "胃", isCorrect: false },
      { text: "心臓", isCorrect: true },
      { text: "腎臓", isCorrect: false },
    ],
  },
  {
    title: "Vue.jsでリアクティブな値を定義する際によく使用するものは？",
    answers: [
      { text: "ref", isCorrect: true },
      { text: "static", isCorrect: false },
      { text: "final", isCorrect: false },
      { text: "package", isCorrect: false },
    ],
  },
  {
    title: "日本国憲法が施行された年は？",
    answers: [
      { text: "1947年", isCorrect: true },
      { text: "1950年", isCorrect: false },
      { text: "1964年", isCorrect: false },
      { text: "1970年", isCorrect: false },
    ],
  },
  {
    title: "CSSで文字色を指定するプロパティは？",
    answers: [
      { text: "font-size", isCorrect: false },
      { text: "background-color", isCorrect: false },
      { text: "color", isCorrect: true },
      { text: "text-align", isCorrect: false },
    ],
  },
  {
    title: "水の化学式は？",
    answers: [
      { text: "CO₂", isCorrect: false },
      { text: "H₂O", isCorrect: true },
      { text: "O₂", isCorrect: false },
      { text: "CH₄", isCorrect: false },
    ],
  },
  {
    title: "Spring BootでREST APIを作成する際によく使用するアノテーションは？",
    answers: [
      { text: "@Entity", isCorrect: false },
      { text: "@Repository", isCorrect: false },
      { text: "@RestController", isCorrect: true },
      { text: "@Getter", isCorrect: false },
    ],
  },
  {
    title: "日本の国鳥は？",
    answers: [
      { text: "キジ", isCorrect: true },
      { text: "スズメ", isCorrect: false },
      { text: "ツバメ", isCorrect: false },
      { text: "ハト", isCorrect: false },
    ],
  },
  {
    title: "配列の先頭のインデックスは通常いくつですか？",
    answers: [
      { text: "0", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "-1", isCorrect: false },
      { text: "10", isCorrect: false },
    ],
  },
  {
    title: "タスク管理アプリにおいて、一般的に最も優先度が高いことを表すのは？",
    answers: [
      { text: "Low", isCorrect: false },
      { text: "Medium", isCorrect: false },
      { text: "High", isCorrect: true },
      { text: "None", isCorrect: false },
    ],
  },
];