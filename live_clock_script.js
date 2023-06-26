function updateTime() {
    var indiaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata"
    });
    var USTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York"
      });
    var singaporeTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Singapore"
    });

    
    document.getElementById("india-time").textContent = indiaTime;
    document.getElementById("US-time").textContent = USTime;
    document.getElementById("singapore-time").textContent = singaporeTime;
  }

  updateTime();

  setInterval(updateTime, 1000);