/**
 * const, let等の変数宣言
 */

// var val1 = "var変数名";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "letを再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// // // const変数は再宣言不可能
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// val4.name = "jake";
// val4.address = "chiba"
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
//  */
// const name = "鈴木";
// const age = 26;
// // 「私の名前は鈴木です。年齢は26歳です。」

// // 従来の方法
// const message1 =
//   "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。(template)`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// // 関数を変数に格納する
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// // 複数の引数を渡して足し算
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// 省略形
// // const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// // 分割代入 オブジェクト編
// const myProfile = {
//   name: "suzuki",
//   age: 26
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// // オブジェクトから各要素を取り出す
// // message2のコードがシンプルになる
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// // 分割代入 配列編
// const myProfile = ["suzuki", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 配列の場合は変数定義の順番で分割される
// // 以下の例だとnameが[0],ageが[1]を代入される
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。(分割代入)`;
// console.log(message4);

/**
 * デフォルト値
 */
// // 引数の後に = がある場合はデフォルト値を設定している
// // 関数呼び出しで引数が設定されていない場合に、デフォルト値が使用される
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// console.log(...arr1);
// console.log(arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // ...arr4でarr4を展開、...arr5でarr5を展開
// // arr7に展開したarr4とarr5を配列で格納している
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // 配列をそのままコピーすると、コピー先の変更が、コピー元にも反映されてしまう。
// // arr4をarr8にコピー、arr8の[0]に100を上書き
// // arr4の[0]も100になる
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "鈴木", "山田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
//   console.log(nameArr.length);
// }

// ループで取り出した配列を新たな配列に入れる
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// 配列のループ
// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

// returnの後にフィルターの条件を記述する
// 以下では2で割った値が1になる値のみ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// // 配列をmapで受け取る
// // nameに順番に値が入る。if文がtrueの場合はそのまま、falseの場合は酸をつけてnameに格納する
// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件？条件がtrueの時、：条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100　? "100を超えています！"　: "許容範囲内です";
// };
// console.log(checkSum(50, 1));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// || は左側がfalseなら右側を返す
// JavaScriptではnullはfalse判定となるので、右側が返される
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
