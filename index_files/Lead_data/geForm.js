$(document).ready(function() {
    $("input.clf-a-date").each(function() {
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "-50:+10"
        });
    })
    var dialogWidth = $(window).width()*.75
    if ($(window).width() < dialogWidth) {
        dialogWidth = $(window).width() - 50;
    }
    
    if ($("#FormProcessResult").html() != "") {
        $("#FormProcessResultDiv").dialog({
            modal: true,
            width: dialogWidth
        });
    }

    if ($("#ThankYouContent").html() != "") {
        $("#ThankyouDiv").dialog({
             modal: true,
             width: dialogWidth,
            close: function(event, ui) { if ($("#ThankyouDiv").attr("action") != "") window.location.href = $("#ThankyouDiv").attr("action"); }
        });
    }
    else if ($("#ThankyouDiv").attr("action") != "") {
        window.location.href = $("#ThankyouDiv").attr("action");
    }

    $("form input[maxlength]").on('input', function() {
        if ($(this).val().length == $(this).attr('maxlength')) {
            $(this).next("input").focus();
        }
    });

    $.getScript('/JavaScript/jquery.placeholder.js', function() {
        $('input, textarea').placeholder();
    });
    
    var externalStyleUrl = GetQueryStringParams('Style');
    if(externalStyleUrl){
        $('#ExternalStyle').attr('href',decodeURIComponent(externalStyleUrl));
    }
});
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{

  //var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
  //if (origin !== "http://allowedorigin.com") return;
  
  for (var item in event.data){
        $(event.data[item][0]).val(event.data[item][1]);
  }
  

}

function GetQueryStringParams(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

