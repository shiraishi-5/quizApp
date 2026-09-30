import type { Question } from "@/script/types";

export const IT_QUESTIONS: Question[] = [
  {
    title: "コンピュータで情報を一時的に記憶する部品はどれですか？",
    answers: [
      { text: "CPU", isCorrect: false },
      { text: "SSD", isCorrect: false },
      { text: "メモリ(RAM)", isCorrect: true },
      { text: "GPU", isCorrect: false },
    ],
  },
  {
    title: "Webサイトを見るために使用するソフトウェアはどれですか？",
    answers: [
      { text: "Excel", isCorrect: false },
      { text: "ブラウザ", isCorrect: true },
      { text: "Photoshop", isCorrect: false },
      { text: "PowerPoint", isCorrect: false },
    ],
  },
  {
    title: "HTMLの主な役割は何ですか？",
    answers: [
      { text: "デザインを適用する", isCorrect: false },
      { text: "データベースを操作する", isCorrect: false },
      { text: "Webページの構造を作る", isCorrect: true },
      { text: "サーバーを起動する", isCorrect: false },
    ],
  },
  {
    title: "CSSの主な役割は何ですか？",
    answers: [
      { text: "Webページの見た目を装飾する", isCorrect: true },
      { text: "データを保存する", isCorrect: false },
      { text: "サーバーを構築する", isCorrect: false },
      { text: "プログラムをコンパイルする", isCorrect: false },
    ],
  },
  {
    title: "JavaScriptは主にどこで実行されますか？",
    answers: [
      { text: "ブラウザ", isCorrect: true },
      { text: "プリンター", isCorrect: false },
      { text: "ルーターのみ", isCorrect: false },
      { text: "USBメモリ", isCorrect: false },
    ],
  },
  {
    title:
      "Vue.jsで画面にデータを表示するためによく使われるディレクティブはどれですか？",
    answers: [
      { text: "v-if", isCorrect: false },
      { text: "v-model", isCorrect: false },
      { text: "{{ }}", isCorrect: true },
      { text: "@click", isCorrect: false },
    ],
  },
  {
    title: "TypeScriptは何を拡張した言語ですか？",
    answers: [
      { text: "Java", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "C#", isCorrect: false },
    ],
  },
  {
    title: "Gitの主な用途は何ですか？",
    answers: [
      { text: "画像編集", isCorrect: false },
      { text: "動画再生", isCorrect: false },
      { text: "バージョン管理", isCorrect: true },
      { text: "データ分析", isCorrect: false },
    ],
  },
  {
    title: "データベースからデータを取得する際によく使われる言語はどれですか？",
    answers: [
      { text: "HTML", isCorrect: false },
      { text: "CSS", isCorrect: false },
      { text: "SQL", isCorrect: true },
      { text: "JSON", isCorrect: false },
    ],
  },
  {
    title: "HTTPのステータスコード200が意味するものはどれですか？",
    answers: [
      { text: "リダイレクト", isCorrect: false },
      { text: "成功", isCorrect: true },
      { text: "認証エラー", isCorrect: false },
      { text: "サーバーエラー", isCorrect: false },
    ],
  },
  {
    title: "URLの『https』で通信を暗号化するために使われる技術はどれですか？",
    answers: [
      { text: "SSL/TLS", isCorrect: true },
      { text: "SSH", isCorrect: false },
      { text: "FTP", isCorrect: false },
      { text: "SMTP", isCorrect: false },
    ],
  },
  {
    title: "Spring Bootは主にどの言語で開発するためのフレームワークですか？",
    answers: [
      { text: "Java", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "PHP", isCorrect: false },
      { text: "Ruby", isCorrect: false },
    ],
  },
  {
    title: "APIとは主に何のために使われますか？",
    answers: [
      { text: "プログラム同士が連携するため", isCorrect: true },
      { text: "画面デザインをするため", isCorrect: false },
      { text: "画像を編集するため", isCorrect: false },
      { text: "パソコンを起動するため", isCorrect: false },
    ],
  },
  {
    title: "配列の先頭要素のインデックス番号は通常いくつですか？",
    answers: [
      { text: "0", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "-1", isCorrect: false },
      { text: "10", isCorrect: false },
    ],
  },
  {
    title:
      "Vue.jsでリアクティブな値を保持する際によく使われる関数はどれですか？",
    answers: [
      { text: "watch", isCorrect: false },
      { text: "computed", isCorrect: false },
      { text: "ref", isCorrect: true },
      { text: "emit", isCorrect: false },
    ],
  },
];
