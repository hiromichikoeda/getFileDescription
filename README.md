# getFileDescription

##概要
basefileのヤムル記述を取得しExcelに貼り付けられる形式でテキストデータとして整形する。


手順
- スコープとしたいURL群が記述されたテキストを用意
- テキストから改行区切りでURLを取得
- 不要な記述（PCのユーザー名等）は削除する
− URL一つに対しての処理
	* ファイルの内部を参照しテキストデータとして全文取得
	* 正規表現を使用しヤムルの各項目の値を取得
		− 画面ID
		- 画面名
		- 画面URL（wwwtst1〜5）
	* テキストを整形（パイプで繋いだり改行いれたり）