//workig thru examples from readings
/*(function ($) 
{
	var shade01 = "blue";
	var shade02 = "white";
	var font01 = "60px";
	$.fn.testing = function () 
        {

          this.css("background-color", shade01);
		  this.css("color", shade02);
		  this.css("font-size", font01);
		  return this;
        };

}(jQuery));
*/
		
//animate.css duration change of animation
const element = document.querySelector('#worldPic');
element.style.setProperty('--animate-duration', '2.5s');

//-----my simple plugin-----
$.fn.headerPi = function ()
{
	this.css ("background-color", "rgb(16, 104, 204)");
	this.css ("border", "4px solid black")
	this.css ("color", "white");
	this.css ("padding", "10px");

	return this;
}



$(document).ready(function()
{
 
      //---animate image on first "page"
      $("#worldPic").animate({width: "40%"});
            //start of onlick----->>>>>>>>>>>>>>>>>>.
            $("button").click(function()
                {

                    //different animations/methods for id's
                      $("#table").show().animate({
                        
                        width: "50%",
                      });
                
                      $("#worldPic").hide();
                      $("#mainTitle").hide();

                      $("#dataInfo").headerPi().animate(
                        {
                          fontSize: "1.5em",
                        }).fadeOut(8000);
                      
                    
                    //------------BEGINNING OF GETTING JSON INFO AND INSERTING DATA INTO A TABLE
                    $.getJSON("./data/climateData.json", function(data)
                      {
          
                          var dataInfo = '';
                          $.each(data, function(i, value)
                              {
                      
                                  $("#dataInfo").append( value.description.title + "<br>" );
                                  $("#dataInfo").append("Units of Measurement: " + value.description.units + "<br>" );
                                  $("#dataInfo").append("Time Period: " + value.description.base_period + "<br>" );
                  
                    
                                  dataInfo += '<tr>' + '<td>' + "1900" + '<td>' + value.data["1900"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1905" + '<td>' + value.data["1905"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1910" + '<td>' + value.data["1910"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1914" + '<td>' + value.data["1915"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1920" + '<td>' + value.data["1920"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1925" + '<td>' + value.data["1925"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1930" + '<td>' + value.data["1930"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1935" + '<td>' + value.data["1935"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1940" + '<td>' + value.data["1940"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1945" + '<td>' + value.data["1945"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1950" + '<td>' + value.data["1950"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1955" + '<td>' + value.data["1955"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1960" + '<td>' + value.data["1960"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1965" + '<td>' + value.data["1965"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1970" + '<td>' + value.data["1970"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1975" + '<td>' + value.data["1975"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1980" + '<td>' + value.data["1980"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1985" + '<td>' + value.data["1985"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1990" + '<td>' + value.data["1990"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "1995" + '<td>' + value.data["1995"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "2000" + '<td>' + value.data["2000"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "2005" + '<td>' + value.data["2005"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "2010" + '<td>' + value.data["2010"] + '</td>';
                                  dataInfo += '<tr>' + '<td>' + "2015" + '<td>' + value.data["2015"] + '</td>';
                        
                     
                                  dataInfo += '</tr>';
                              });
                      
                          $('#table').append(dataInfo);
            
                      });
    
                });
  
  });




 