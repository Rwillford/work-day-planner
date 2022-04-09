$(document).ready(function(){
    //getting current day
    var currentDate = moment().format('MMMM Do YYYY, hh:mm');
    $("#currentDay").text(currentDate);
    
    //Getting the save button to save task to planner
   $(".saveBtn").on("click", function(){
        
        var textValue = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
        //saving it in localstorage
        localStorage.setItem(timeBlock, textValue);

   })

   keepinTime()
   //setting the time to past present and future to reflict current time
   function keepinTime(){
        var currentHour = moment().hours();
        $(".time-block").each(function(){
            var timeBlockHour = parseInt($(this).attr("id"))
            //adding correct class
            if(timeBlockHour < currentHour){
                $(this).addClass("past");
            } else if(timeBlockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present")
            } else {
                $(this).removeClass("past", "present");
                $(this).addClass("future")
            }
        })

   }

   //For statement to get task from Local storage
   for(var i = 9; i < 17; i++){
   // $('#' +[i]+ '.description').val(localStorage.getItem([i]))
   // doing same thing as line above but using interpolation
    $(`#${i} .description`).val(localStorage.getItem([i]));
   }
  
   




})

