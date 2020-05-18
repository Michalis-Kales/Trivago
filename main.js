$(document).ready(function () {




    // pairnw dedomena me ajax call apo json
    $.ajax({

        dataType: 'json',
        type: 'get',
        url: 'data.json',// topothesia json
        success: handleSuccess,
        error: function () {

            console.log("error");
        }

    })

    let hotelsData;


    function handleSuccess(data) {


        hotelsData = data;
        let datalist = document.querySelector("datalist");

        let options = "";


        for (let i = 0; i < 3; i++) {
            const option = `<option value= "${data[1].entries[i].city}"> ${data[1].entries[i].city}</option>`;

            options += option;

        }


        datalist.innerHTML = options; //prosthetw datalist sto element me id=datalist

        let selectLocation = document.querySelector("#location");

        selectLocation.innerHTML = options;  //prosthetw drop down list sto element me id=location


        let searchButton = document.getElementById("search-btn");

        searchButton.addEventListener("click", handleClick);//add event listener into button



        let searchBox = document.getElementById("searchBox");



        let hotels = data[1].entries;




        function handleClick(e) {

            e.preventDefault();


            if (searchBox.value === "Paris" || searchBox.value === "paris") {


                $('#hotelsElements').html("");


                chooseTheRightHotel(0)

                chooseTheRightHotel(3);

                chooseTheRightFrame(0);



            } else if (searchBox.value === "Toulouz" || searchBox.value === "toulouz") {

                $('#hotelsElements').html("");


                chooseTheRightHotel(1);
                chooseTheRightFrame(1);


            } else if (searchBox.value === "Marseille" || searchBox.value === "marseille") {
                $('#hotelsElements').html("");


                chooseTheRightHotel(2);
                chooseTheRightFrame(2);

            } else {
                alert("Incorrect City. Please type again!");


            }



        }



        function chooseTheRightFrame(i) {

            $('.modal-body').html("");

            $('.modal-body').append(
                '<iframe src="' + hotels[i].mapurl + '"' + ' style="width: 450px; height: 350px; "></iframe>'

            )


        }




        function chooseTheRightHotel(i) {



            $('#hotelsElements').append(
                '<section>' +
                '<div class="row  margin-0 mt-3 p-1">' +
                '<div class="col-md-3 col-sm-1 text-center">' +
                '<img class="d-block w-100 image-size" src="' + hotels[i].thumbnail + '" alt="First slide">' +
                '</div>' +
                ' <div class="col-md-3 col">' +
                ' <blockquote class="blockquote">' +
                '<h5 class="card-title mb-0">"' + hotels[i].hotelName + '"</h5>' +
                '<footer>' +
                '<h6 id="next-stars"><span id="stars">' + ratingsHotel(hotels[i].rating) + '</span>Hotel</h6>' +
                '</footer>' +
                '</blockquote>' +
                '<div class="info-hotels">' +
                '<div>' +
                '<h6>"' + hotels[i].city + '"</h6>' +
                '</div>' +
                '<div>' +
                '<h6 id="next-to-rate"><button type="button" class="border-0" disabled>"' + hotels[i].ratings.no + '"</button><strong>"' + hotels[i].ratings.text + '"</strong></h6>' +
                '</div>' +
                '<div>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3 col">' +
                '</div>' +
                '<div class="col-md-3 col text-center flexing">' +
                '<div class="price-nights" id="prices">' +
                '<h5 id="website">Hotel Website</h5>' +
                '<h6 id="price-hotel">"' + hotels[i].price + '$' + '"</h6>' +
                '</div>' +
                '<button type="submit" class="deal-buttons btn-lg" id="deal-btn">View Deal ></button>' +
                '</div>' +
                '</div>' +
                '</section>'
            )

        }





        function ratingsHotel(stars) {
            if (stars == 1) {
                return '&starf;'
            }
            else if (stars == 2) {
                return '&starf;&starf;'
            }
            else if (stars == 3) {
                return '&starf;&starf;&starf;'
            }
            else if (stars == 4) {
                return '&starf;&starf;&starf;&starf;'
            }
            else {
                return '&starf;&starf;&starf;&starf;&starf;'
            }
        }




        let slider = document.getElementById("slider");
        let sliderOutput = document.getElementById("max-price");
        sliderOutput.innerHTML = "<" + slider.value + "$";

        slider.oninput = function () {
            sliderOutput.innerHTML = "<" + this.value + "$";
        }



        slider.addEventListener("change", handleSliderChange)


        function handleSliderChange(e) {
            e.preventDefault();

            if (slider.value >= 706) {
                $('#hotelsElements').html("");

                chooseTheRightHotel(0);

            } else {

                $('#hotelsElements').html("");
            }

            if (slider.value >= 1213) {
                $('#hotelsElements').html("");

                chooseTheRightHotel(0);
                chooseTheRightHotel(1);

            }
            if (slider.value == 1500) {
                $('#hotelsElements').html("");


                chooseTheRightHotel(0);
                chooseTheRightHotel(1);
                chooseTheRightHotel(2);
                chooseTheRightHotel(3);


            }




            if (slider.value >= 706 && (searchBox.value == "Paris" || searchBox.value === "paris")) {
                $('#hotelsElements').html("");

                chooseTheRightHotel(0);

            }
            if (slider.value == 1500 && (searchBox.value == "Paris" || searchBox.value === "paris")) {
                $('#hotelsElements').html("");

                chooseTheRightHotel(0);
                chooseTheRightHotel(3);


            }


            if (searchBox.value == "Toulouz" || searchBox.value === "toulouz") {
                $('#hotelsElements').html("");

                chooseTheRightHotel(1);

            }

            if (searchBox.value == "Marseille" || searchBox.value === "marseille") {
                $('#hotelsElements').html("");

                chooseTheRightHotel(2);

            }




        }



        locationDropDownList = document.getElementById("location")

        locationDropDownList.addEventListener("click", handleLocationList)



        function handleLocationList(e) {

            e.preventDefault();



            searchBox.value = locationDropDownList.value;

            handleClick();


        }

    }

});
















