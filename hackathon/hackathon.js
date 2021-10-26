const puppeteer = require("puppeteer");

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });

    let allPages = await browser.pages();
    let  tab = allPages[0];
    await tab.goto("https://www.youtube.com");
    //await tab.waitForSelector('yt-simple-endpoint.style-scope.ytd-guide-entry-renderer' , {visible:true});
    // let allTags = await tab.$$('.yt-simple-endpoint.style-scope.ytd-mini-guide-entry-renderer');
    // let explore=allTags[1];
    // //await explore.click();
    // console.log(allTags,'alltags');
    // console.log(explore,'explore');
    await tab.waitForSelector('#search' , {visible:true});
    
    await tab.type("#search", "no need karan aujlanode");
    
    await tab.click("#search-icon-legacy");
    await tab.waitForTimeout(3000);
    await tab.waitForSelector('#title-wrapper' , {visible:true});
    //
    await tab.click("#title-wrapper");
    // let skipPromise = tab.waitForSelector('.ytp-ad-skip-button.ytp-button' , {visible:true});
    // skipPromise
    // .then(function (){
    //     tab.click(".ytp-ad-skip-button.ytp-button");
    // })
    // .catch(function(error){
    //     console.log("error");
    // });

    playSong();
    function playSong(){
        clearInterval();
        let check= tab.waitForSelector('#search' , {visible:true});
        check
        .then(function(){
            
            let skipPromise = tab.waitForSelector('.ytp-ad-skip-button.ytp-button' , {visible:true});
            skipPromise
            .then(function (){
            tab.click(".ytp-ad-skip-button.ytp-button");
            console.log("initial skip done");
            })
            .catch(function(error){
            console.log("no initial skip");
            });
    
            let run=1;
            setInterval(function(){
            if(run<8){
                let skip = tab.waitForSelector('.ytp-ad-skip-button.ytp-button' , {visible:true});
                skip
                .then(function (){
                    tab.click(".ytp-ad-skip-button.ytp-button");
                    console.log("skip done");
                })
                .catch(function(error){
                    console.log("no skip");
                }); 
                run++;
            }else{
                tab.click(".ytp-next-button.ytp-button");
                run=1;
                playSong();
    
            }
           
            }, 31000);
    
        
        })
        .catch(function(error){
            console.log("exit");
        });
    }

})();
        // if(myWindow.closed){
        //      let control = tab.keyboard.down('Control');
        //      control
        //      .then(function(){
        //          let alt= tab.keyboard.down('Alt');
        //          return alt;
        //      })
        //      .then(function(){
        //         let m= tab.keyboard.press("M");
        //         return m;
        //      })
        //      .catch(function(error){
        //          console.log("key error");
        //      })
             
             
        // }
       
    //skipFunction();
    // let skipPromise = tab.waitForSelector('.ytp-ad-skip-button.ytp-button' , {visible:true});
    // skipPromise
    // .then(function (){
    //     tab.click(".ytp-ad-skip-button.ytp-button");
    // })
    // .catch(function(error){
    //     console.log(error);
    // });

    //await tab.waitForSelector('.ytp-ad-skip-button.ytp-button' , {visible:true});
    //await tab.click(".ytp-ad-skip-button.ytp-button");
    // await tab.waitForSelector('.ytp-time-display.notranslate' , {visible:true});
    // let songLength= await tab.$('.ytp-time-display.notranslate');
    // console.log(songLength);
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    // console.log("....");
    
    // await tab.waitForSelector('.ytp-time-duration' , {visible:true});
    // let duration= await tab.$('.ytp-time-duration');
    // console.log(duration);
    





// yt-simple-endpoint style-scope.ytd-mini-guide-entry-renderer
// yt-simple-endpoint style-scope ytd-guide-entry-renderer