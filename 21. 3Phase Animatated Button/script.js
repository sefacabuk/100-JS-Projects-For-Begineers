$(function () {
    $("#app").on("click", function () {
      setTimeout(function () {
        $("#message").addClass("sending").text("Sending");
        $("#send_btn").addClass("sending");
      }, 0);
  
      setTimeout(function () {
        $("#message").addClass("sent").text("Sent");
        $("#send_btn").addClass("sent");
      }, 2600);
    });
  });
  