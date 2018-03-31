
 var Schedulesdb = firebase.database().ref();

    // var trname = "";
    // var endpt = "",
    // var fstStart = setTimeInterval();
    // var freqncy = SetTimeInterval();

 var trComp = "";
 var trTrain = "";
 var trEarly = "";
 var trDest = "";
 var trArvDest = "";

     //  Convert the input Early Arrival TIme to Military Time
  function convertEarlyArv() {



  }


  // function calcNextArrvl() {
  //
  //
  // }

          //  Display existing train schedules from the database
  // function shoSchedules() {

      // Calculate Next Arrival for existing trains
      // Each train will have different Earliest Arrival times
      // but all Next Arrival times will be at 15 minute intervals

      // var sScomp = '';
      // var sSname = '';
      // var sSdest = '';
      // var sSearlyarv = '';
      // var sSnxtArv = '';                    // (current time - earliet arr) - 15
      // var sSdestArv = '';

      // var listSchedulesdb = Schedulesdb.get({
      //     company, train, destination,
      //     earliestarv,.val().text                  // earliest arrival - calculated or user entry?
      //     destinarv})

      // sScomp = company.val().text;
      // sSname = train.val().text;
      // sSdest =  destination.val().text;
      // sSearlyarv =  earliestarv.val().text;           // earliest arrival - calculated or user entry?
      // sSdestArv = destinarv.val().text;           // calculated or user entry?

      // var di = $("<div>");
      // di.addClass("list-group");
      // var aa = $("<a>");
      // aa.addClass$("list-group-item");
      // aa.addAttr("href=, '#'");

      // $("document").getElementsById("#tranSched");
      //  $("#tranSched").append(di)



      //     <a href="#" class="list-group-item">
      //     <h4 class="list-group-item-heading">Train</h4>
      //     <p class="list-group-item-text tsTrain"></p>
      //     </a>
      //     <a href="#" class="list-group-item">
      //     <h4 class="list-group-item-heading">Destination</h4>
      //     <p class="list-group-item-text tsDest"</p>
      //     </a>
      //     <a href="#" class="list-group-item">
      //     <h4 class="list-group-item-heading">Arrival TIme</h4>
      //     <p class="list-group-item-text" trDestArv></p>
      //     </a>
      //     <a href="#" class="list-group-item">
      //     <h4 class="list-group-item-heading">Arrival TIme</h4>
      //     <p class="list-group-item-text" trNxtArv></p>
      //     </a>
  // }

  //  Use the Authenticated User's input to add trains
  //  and train schedules to the database.  Once added,
  //  the Next Arrival date must still be calculated
  //  and displayed in the list of Current Schedules

  function getFormInfo("compny, train, early, dest, arvDest") {

      e.preventDefault();

     return ("#compnyNT, #trainNT, #earlyNT, #destNT, #arvDestNT");

     getFormInfo("#compnyNT, #trainNT, #earlyNT, #destNT, #arvDestNT");

      trComp =   $("#compnyNT").val();
      trTrain = $("#trainNT").value;
      trEarly = $("#earlyNT").value;
      trDest = $("#destNT").value;
      trArvDest = $("#arvDestNT").value;

      console.log("trComp");
      console.log("trTrain");
      console.log("trEarly");
      console.log("trDest");
      console.log("trArvDest");

      addNewSchedules("trComp, trTrain, trEarly, trDest, trArvDest");

      // $("document").getElementById("#succss").getAttribute('style, display: block');

      // setTimeout(function () {
      //    $("document").getElementById("#succss").getAttribute('style, display: none'); }, 5000);

  }




  function addNewSchedules("trComp, trTrain, trEarly, trDest, trArvDest") {

      var trainschedules = {
          railroad: trComp,
          train: trTrain,
          earliestarv: trEarly,
          destination: trDest,
          destarv:  trArvDest
      };

      Schedulesdb = firebase.database().ref();
      var newSchedulesdb = newSchedulesdb.push();
      Schedulesdb.set(trainschedules);

     $("document").getElementById("#succss").getAttribute('style, display: block');

     setTimeout(function () {
         $("document").getElementById("#succss").getAttribute('style, display: none'); }, 5000);

     $("document").getElementById("#EntryNT").reset();

  }

// ====================================
//            BEGIN LOGIC           ===
// ====================================

                //  EXECUTE getFormInfo FUNCTION WHEN USER PRESSES SUBMIT
                //  EXECUTE getFormInfo FUNCTION WHEN USER PRESSES SUBMIT
  // $("document").on("ready", function() {

      $("button").addEventListener("submit", function() {



      $("document").getElementById("#succss").getAttribute('style, display: block');

      setTimeout(function () {
         $("document").getElementById("#succss").getAttribute('style, display: none'); }, 5000);

     $("document").getElementById("#EntryNT").reset();


  }
 </script>