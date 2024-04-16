## 實作  WebRTC peer-to-peer (P2P) 實時視訊聊天

使用本專案需安裝node.js，若已安裝完畢，開啟CMD至目錄資料夾下，輸入下方指令啟動signal server

```
node WebRTC_signal_server.js
```
<br>
signal server的功能:

1.建立一個 WebRTC 訊號伺服器，用於在兩個瀏覽器之間建立 P2P 連線。

2.處理客戶端之間的訊號傳遞，例如 SDP 描述、ICE 候選人等。
<br>

之後開啟兩個WebRTC.html

WebRTC.html的功能:

1.建立一個 WebRTC 客戶端，用於與 WebRTC 訊號伺服器連線並進行 P2P 呼叫。

2.顯示本地和遠端視訊畫面。
<br>

在兩個頁面都按下初始化按鈕後`會初始化 WebRTC 客戶端

並準備進行呼叫按下Call按鈕，會向同房間中的另一個客戶端發起 P2P 呼叫，即可開始視訊聊天


