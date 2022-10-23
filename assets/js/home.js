$(function () {
    let Home = {
        init: function() {
            this.handleEvent();
            this.cssForElement();
        },
        handleEvent: function() {
            // add sticky animation for header when scroll down
            this.AddStickyWhenScrollDown();
    
            // On or Off tap bar
            this.HandleOnOrOffTapBar();
    
            // handle animation of proposal section
            this.ProposalHandleAnimations();    
    
            // handle slide in the best beaches section
            this.handleSlideOfTheBestBeaches();     
        },
        cssForElement: function() {
            this.SetHeightForTapBar();
        },
    
        // function
        AddStickyWhenScrollDown: function() {
            // sticky header
            window.onscroll = () => {
                let scroll = document.querySelector('header');
    
                if (window.pageYOffset > 100) {
                    scroll.classList.add('sticky');
                } else {
                    scroll.classList.remove('sticky');
                }
            }
        },
        HandleOnOrOffTapBar: function() {
            $(".header-bars-close").unbind().click(e => {
                $(".header-bar-packages").removeClass("open");
            });
        },
        ProposalHandleAnimations: function() {
            $(".body-container-content-global").unbind().click(function(e) {
                if(window.innerWidth <= 768) {
                    let $this = $(this)
                    let img =  $this.find(".body-container-content-img");
                    let imgHeight = img.height() + "px";
                    let animationDiv = $this.find(".body-container-content-hover");
                    animationDiv.css({
                        "height": `${imgHeight}`,
                    });
                } else {
                    console.log("You clicked on PC")
                }
             });
        },
        handleSlideOfTheBestBeaches: function() {

            $(".body-beaches-dot-item").each(function (index, dot) {
                // element == this
                $(dot).click(e => {
                    let dotDataIndex = $(this).data("index");
                    $('.body-beaches-img-item').removeClass("active");
                    $('.body-beaches-img-item')[dotDataIndex].classList.add("active");

                });
            });
        },
    
        // css
        SetHeightForTapBar: function() {
            $(".header-bars-icon").unbind().click(e => {
                let windowHeight = window.innerHeight + "px";
                $(".header-bar-packages").css({
                    "max-height": `${windowHeight}`,
                });
            });
        },
    };
    
    Home.init(); 
});