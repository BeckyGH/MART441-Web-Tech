let viewFinder = new Array()

            class SocialJustice 
            {
                constructor(imagePath, title, description, artist, date, source) 
                {
                    this.imagePath = imagePath;
                    this.title = title;
                    this.description = description;
                    this.artist = artist;
                    this.date = date;
                    this.source = source;
                }

               display()
                {
                    return this.imagePath
                }
            
                toString() 
                {
                    let str;
                    str = 'Title: ' + this.title + '<br>' + '<br>'+ 'Description: ' + this.description + '<br>' + '<br>' + "Artist: " + this.artist + '<br>' + 'Date: ' + this.date + '<br>'+ "Source: " + this.source; 
                    return str;
                }
                
            }
            
        function createAndShow()
            {
                let homelessNess = new SocialJustice("./images/homeless.jpg", "Invisible Homeless", `A glass sculpture of a sleeping body on cardboard that is diplayed boldly in the city of Bristol.
                The artist wanted to represent how people experiencing homelesness struggle to be seen by others.`, "Luke Jerram", 'December ' + 2015, "https://www.bbc.com/news/uk-england-bristol-35159686" )
              

                let gender = new SocialJustice("./images/gender-women01.jpg", "Stop Telling Women To Smile", `A street art display of posters that feature women and quotes that represent
                incidents of street harassment they have experienced. The artists intent is to make a statement about gender injustices women face on the streets.`, "Tatyana Fazlalizadeh", 
                'Fall of ' + 2012 + ' -ongoing', "http://stoptellingwomentosmile.com/About")
            
                
                let refugee = new SocialJustice("./images/refugee.jpg", "14,000 Used Life Jackets", `A display of pillars that are wrapped with life vests that were worn by refugees
                 that traveled from Turkey to Lesbos. The artist wanted to bring awareness to the severity of the ongoing refugee crisis throughout the world.`, "Ai WeiWei", 'Installed February ' + 2015 + ' in Berlin.',
                 "https://news.artnet.com/art-world/ai-weiwei-life-jackets-installation-berlin-427247")
           

                let peace = new SocialJustice("./images/lennon-peace.jpg", "Non-Violence", `It is a sculpture that was originally created after John Lennon was shot to honor the singers vision of peace. It now has a permanent display at the 
                UN headquarters in NYC. Over the years it has come to represent a symbol for non-violence and gun control worldwide. `, "Carl Fredrk Reutersward", 'Original Installation NYC at Lennons home ' + 1984, 
                "https://en.wikipedia.org/wiki/Non-Violence_(sculpture)")
     

                let race = new SocialJustice("./images/race.jpg ", "Stand Tall Stand Loud", `This is a sculpture featuring a noose like head on a body that has a windmill for a heart. The artists intent was to
                tie the history of the current racial discrimination to the historical roots of black oppression. `, "Aaron Bell", 'Permanently displayed in Riverside Park, NYC', "https://ncac.org/news/blog/stand-tall-stand-loud-censored-by-nyc-department-of-parks/PhotoCredit: @Courtneyharristuten/Instagram")
            



                /////pushing the objects into the new Array----
                viewFinder.push(homelessNess);
                viewFinder.push(gender);
                viewFinder.push(refugee);
                viewFinder.push(peace);
                viewFinder.push(race);

              
            }

            /////function to display the imagepath and string randomly----
            function accessInformation()
            {

            var randomNumber = Math.floor(Math.random() * viewFinder.length);
            document.getElementById("image").src = viewFinder[randomNumber].display();
            document.getElementById("demo").innerHTML = viewFinder[randomNumber].toString();
            //get rid of message on first page when moving on to the button randomNess :) 
            document.getElementById("messageToClick").style.display= "none";

            }


