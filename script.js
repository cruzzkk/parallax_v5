
// preload.js

    // Arrays of images to preload from different folders
    const imagesToPreload = [
        //Slide25-35
        'assets/Slides_25-35/Audio_button.png', 'assets/Slides_25-35/Audio_button_Mute.png', 'assets/Slides_25-35/Audio_icon.png', 'assets/Slides_25-35/Audio_icon_selected.png', 'assets/Slides_25-35/Cantonese.png', 'assets/Slides_25-35/Cantonese_selected.png', 'assets/Slides_25-35/English.png', 'assets/Slides_25-35/English_selected.png', 'assets/Slides_25-35/Grizzly_bear.png', 'assets/Slides_25-35/Grizzly_bear_outline.png', 'assets/Slides_25-35/Hills.png', 'assets/Slides_25-35/Kelp.png', 'assets/Slides_25-35/Kelp_outline.png', 'assets/Slides_25-35/Mandarin.png', 'assets/Slides_25-35/Mandarin_selected.png', 'assets/Slides_25-35/octopus.png', 'assets/Slides_25-35/Pause_Button.png', 'assets/Slides_25-35/Photo01.png', 'assets/Slides_25-35/Photo02.png', 'assets/Slides_25-35/Photo03.png', 'assets/Slides_25-35/Photo04.png', 'assets/Slides_25-35/Plau_Button.png', 'assets/Slides_25-35/Popup_window.png', 'assets/Slides_25-35/Popup_window_close.png', 'assets/Slides_25-35/Reading-Language_button.png', 'assets/Slides_25-35/Reading-Language_button_Selected.png', 'assets/Slides_25-35/Reading_Help_popup.png', 'assets/Slides_25-35/Replay_Button.png', 'assets/Slides_25-35/Salmon.png', 'assets/Slides_25-35/Salmon_outline.png', 'assets/Slides_25-35/Sky_crop.png', 'assets/Slides_25-35/Spanish.png', 'assets/Slides_25-35/Spanish_selected.png', 'assets/Slides_25-35/Tagalog.png', 'assets/Slides_25-35/Tagalog_selected.png', 'assets/Slides_25-35/Trees_ground.png', 'assets/Slides_25-35/Water_crop.png', 'assets/Slides_25-35/Water_over_octopus.png', 'assets/Slides_25-35/Yeast_crop.png', 'assets/Slides_25-35/Yeast_outline_01.png', 'assets/Slides_25-35/Yeast_plant.png', 'assets/Slides_25-35/Yeast_plant_focus.png',
        'assets/Slides11-17/Callout01.png', 'assets/Slides11-17/Consumers.png', 'assets/Slides11-17/Consumers01.png', 'assets/Slides11-17/Consumers_text_box.png', 'assets/Slides11-17/Curved_arrow.png', 'assets/Slides11-17/Curved_arrow_highlighted.png', 'assets/Slides11-17/Decomposers.png', 'assets/Slides11-17/Decomposers_text_box.png', 'assets/Slides11-17/Garden_crop.png', 'assets/Slides11-17/Grass_top_layer.png', 'assets/Slides11-17/Grass_top_layer_crop.png', 'assets/Slides11-17/House_CROP_2.png', 'assets/Slides11-17/Mountains_01.png', 'assets/Slides11-17/Octopus_inset.png', 'assets/Slides11-17/Parallax_scroll_BG_updated.png', 'assets/Slides11-17/popup_close.png', 'assets/Slides11-17/Popup_text_box.png', 'assets/Slides11-17/Producers-Consumers_text_box.png', 'assets/Slides11-17/Producers.png', 'assets/Slides11-17/Producers_text_box.png', 'assets/Slides11-17/Scroll_down_button.png', 'assets/Slides11-17/Sun_01.png', 'assets/Slides11-17/Tree.png',
        'assets/Slides18-20/bushes.png', 'assets/Slides18-20/Callout.png', 'assets/Slides18-20/Octopus_and_shells.png', 'assets/Slides18-20/Octopus_and_water.png', 'assets/Slides18-20/Octopus_side.png', 'assets/Slides18-20/Replay_Button.png', 'assets/Slides18-20/Sky_corp.png', 'assets/Slides18-20/Start_Adventure.png', 'assets/Slides18-20/Sun02.png', 'assets/Slides18-20/Trees.png', 'assets/Slides18-20/Water_.png', 'assets/Slides18-20/Water_octopus.png',
        'assets/Slides38-42/Bear.png', 'assets/Slides38-42/Bear_Visited.png', 'assets/Slides38-42/Blue_callout.png', 'assets/Slides38-42/Correct.png', 'assets/Slides38-42/Cougar.png', 'assets/Slides38-42/Cougar_Visited.png', 'assets/Slides38-42/Cross.png', 'assets/Slides38-42/Eagle.png', 'assets/Slides38-42/Eagle_Visited.png', 'assets/Slides38-42/Fish.png', 'assets/Slides38-42/Fish_Visited.png', 'assets/Slides38-42/Incorrect.png', 'assets/Slides38-42/More_Info.png', 'assets/Slides38-42/Otter.png', 'assets/Slides38-42/Otter_Visited.png', 'assets/Slides38-42/Sky_crop.png', 'assets/Slides38-42/Tick.png', 'assets/Slides38-42/Tree.png', 'assets/Slides38-42/Trees.png', 'assets/Slides38-42/Tree_Visited.png', 'assets/Slides38-42/Water_crop.png', 'assets/Slides38-42/Wolf.png', 'assets/Slides38-42/Wolf_Visited.png'
        
        ];
    
        // Audio files
        const audio1 = new Audio("assets/audio/Audios/7._A_food_chain_shows_how_differ.mp3");
        const audio2 = new Audio("assets/audio/Audios/5._Select_each_icon_to_know_abou.mp3");
        const audio3 = new Audio("assets/audio/Audios/7._When_creating_a_food_chain,_a.mp3");
        const audio4 = new Audio("assets/audio/Audios/7._Weve_learned_all_about_the_f.mp3");
        const audio5 = new Audio("assets/audio/Audios/7._Let's explore this forest together.mp3");
        const audio6 = new Audio("assets/audio/Audios/Gear_up_to_meet_my_friends_an.wav");
        const audio7 = new Audio("assets/audio/Audios/You_can_also_click_on_any_glo.wav");
        const audio8 = new Audio("assets/audio/Audios/You_can_choose_a_language_for.wav");
        const audio9 = new Audio("assets/audio/Audios/Select_another_organism_like.wav");
        const audio10 = new Audio("assets/audio/Audios/Select_hotspots_Youll_collect.wav");
    
        const audiosToPreload = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10];

// Function to preload images
function preloadImages(images, callback) {
    let loadedImages = 0;
    const totalImages = images.length;

    images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                console.log('Finished Image');
                callback();  // Call the callback function once all images are loaded
            }
        };
    });
}

// Function to preload audio files
function preloadAudios(audios, callback) {
    console.log('Starting audio preload');
    let loadedAudios = 0;
    const totalAudios = audios.length;

    audios.forEach(audio => {
        audio.preload = 'auto'; // Ensure full preload
        audio.load(); // Explicitly load the audio file
        audio.oncanplaythrough = () => {
            loadedAudios++;
            console.log(`Audio fully loaded: ${audio.src}`);
            if (loadedAudios === totalAudios) {
                console.log('All audio files fully loaded');
                callback();
            }
        };
        audio.onerror = (e) => {
            console.error(`Error loading audio: ${audio.src}`, e);
        };
    });

    if (totalAudios === 0) {
        console.log('No audio files to preload');
        callback();
    }
}




// Function to preload a video
function preloadVideo(videoElementId, videoSrc, callback) {
    const videoElement = document.getElementById(videoElementId);
    videoElement.src = videoSrc;
    videoElement.oncanplaythrough = () => {
        callback();  // Call the callback function once the video is ready to play
    };
}


window.onload = function() {


    // Preload images, then preload audio, then preload video, then hide preloader
    preloadImages(imagesToPreload, function() {
        preloadAudios(audiosToPreload, function() {
            preloadVideo('bgVideo', 'assets/video/Section1.mp4', function() {
                console.log('Finished');
                // Once everything is preloaded, hide the preloader
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0'; // Fade-out effect
                setTimeout(() => {
                    preloader.style.display = 'none'; // Hide the preloader after fade-out
                }, 500); // Wait for fade-out to complete

                // Add your code here that should run after preloading

                

                
            
        
                // Your other section-specific logic (like section 5, section 6, etc.) should also go here...
            });
        });
    });
};
document.addEventListener("DOMContentLoaded", () => {

    const soundbutton= document.getElementById("sound");
    const playButton= document.getElementById("play");
    const restartbutton= document.getElementById("restart");

    const section5soundbutton= document.getElementById("section5sound");
    const section5playButton= document.getElementById("section5play");
    const section5restartbutton= document.getElementById("section5restart");

    const secion5rigthTop = document.getElementById("secion5rigthTop");

    const bgVideo = document.getElementById("bgVideo");
    const nextImage = document.getElementById("nextImage");
    let section1doonce=false;
    let played=false;
    let section1mute=true;

    const section2 = document.getElementById("section2");
    const octopusContainer = document.getElementById("octopusContainer");
    const dialogBox = document.querySelector(".dialogBox");

    const whiteOverlay = document.getElementById("whiteOverlay");
    const buttonContainers = document.querySelectorAll(".button-container");
    const section2popup = document.getElementById("section2popup");
    const section2popupcross = document.getElementById("section2popupcross");
    const section2popupText = document.querySelector("#section2popup p");
    const textElement = document.getElementById('dynamicText');
    const grass_toplayer=document.getElementById("grass_toplayer");
    const section2nextImage=document.getElementById("section2nextImage");

    const gap3=document.getElementById("gap3");

    const section3 = document.getElementById("section3");
    const section3octopusContainer = document.getElementById("section3octopusContainer");
    const section3octopusContainershell= document.getElementById("section3octopusContainershell");
    const section3dialogBox = document.querySelector(".section3dialogBox");
    const section3dialogText = document.getElementById("section3dialogText");
    const section3_button= document.getElementById("section3_button");
    const foodchain_button=document.getElementById('foodchain');

    const section4 = document.getElementById("section4");
    const section4octopusContainer = document.getElementById("section4octopusContainer");
    const section4dialogBox = document.querySelector(".section4dialogBox");
    const section4dialogText = document.getElementById("section4dialogText");
    const grassContainers = document.querySelectorAll("#section4button4, #section4button2");
    let section4muted=false;

    const section5 = document.getElementById("section5");
    const section5bgVideo = document.getElementById("section5bgVideo");
    const section5nextImage = document.getElementById("section5nextImage");
    let section5mute=true;
    let section5played=false;


    const section6 = document.getElementById("section6");
    let section6doonce=false;
    const question = document.querySelector(".question-text");
    const icon = document.querySelectorAll('.icon');
    let section6muted=false;


    //Section2
    //const audio1 = new Audio("assets/audio/Audios/7._A_food_chain_shows_how_differ.mp3");
    //const audio2 = new Audio("assets/audio/Audios/5._Select_each_icon_to_know_abou.mp3");
    let section2popup_audio=new Audio("");
    //const audio3 = new Audio("assets/audio/Audios/7._When_creating_a_food_chain,_a.mp3");
    //Section3
    //const audio4 = new Audio("assets/audio/Audios/7._Weve_learned_all_about_the_f.mp3");
    //const audio5 = new Audio("assets/audio/Audios/7._Let's explore this forest together.mp3");

    //const audio6 = new Audio("assets/audio/Audios/Gear_up_to_meet_my_friends_an.wav");
    //const audio7 = new Audio("assets/audio/Audios/You_can_also_click_on_any_glo.wav");
    //const audio8 = new Audio("assets/audio/Audios/You_can_choose_a_language_for.wav");
    //const audio10 = new Audio("assets/audio/Audios/Select_hotspots_Youll_collect.wav");

    //Section 6
    //const audio9 = new Audio("assets/audio/Audios/Select_another_organism_like.wav");

    // function onResizeFn() {
    //     const shellWidth = 1920;
    //     const shellHeight = 1080;
    
    //     const sections = document.querySelectorAll('.section');
    //     const container = document.getElementById('container');
    
    //     const actWid = window.innerWidth;
    //     const actHgt = window.innerHeight;
    
    //     let newShellWidth, newShellHeight;
    //     let scale;
    
    //     // Calculate scaling factor based on window size
    //     if (actWid / actHgt > shellWidth / shellHeight) {
    //         newShellWidth = Math.min(actWid * 0.9, shellWidth); // Limit width to 90% or shellWidth
    //         scale = shellWidth / newShellWidth;
    //         newShellHeight = shellHeight / scale;
    //     } else {
    //         newShellHeight = Math.min(actHgt / sections.length - 20, shellHeight); // Adjust height for available space
    //         scale = shellHeight / newShellHeight;
    //         newShellWidth = shellWidth / scale;
    //     }
    
    //     // Apply scale and dimensions to each section
    //     sections.forEach((section) => {
    //         section.style.width = `${newShellWidth}px`;
    //         section.style.height = `${newShellHeight}px`;
    //     });
    
    //     // Ensure the container height adjusts dynamically
    //     container.style.width = `${newShellWidth}px`;
    // }
    
    // // Attach the resize function to the window
    // window.addEventListener('resize', onResizeFn);
    
    // // Initial call to set layout
    // onResizeFn();
    

    let currentSection='section1';

    playButton.addEventListener("click", () => {
        switch(currentSection){
            case 'section1':
                enableVideo();
                break;
        }
    });

    function section1vediomute( ) {
        soundbutton.querySelector("img").src="assets/Slides_25-35/Audio_button_Mute.png";
        bgVideo.muted = true;
        section1mute=true;
    }
    function section1vedioUnmute( ) {
        soundbutton.querySelector("img").src="assets/Slides_25-35/Audio_button.png";
        bgVideo.muted = false;
        section1mute=false;
    }
    soundbutton.addEventListener("click", () => {
        switch(currentSection){
            case 'section1':
                if(section1mute){
                    section1vedioUnmute();
                }else{
                    section1vediomute();
                }
                break;
        }
    });
    restartbutton.addEventListener("click", () => {
        console.log('mm',currentSection)
        switch(currentSection){
            case 'section1':
                bgVideo.currentTime = 0;
                bgVideo.play();
                section1vedioUnmute();
                played=true;
                playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";
                break;
        }
    });


    function section5vediomute( ) {
        section5soundbutton.querySelector("img").src="assets/Slides_25-35/Audio_button_Mute.png";
        section5bgVideo.muted = true;
        section5mute=true;
    }
    function section5vedioUnmute( ) {
        section5soundbutton.querySelector("img").src="assets/Slides_25-35/Audio_button.png";
        section5bgVideo.muted = false;
        section5mute=false;
    }
    section5playButton.addEventListener("click", () => {
        if(!section5played){
            section5bgVideo.play();
            section1vedioUnmute();
            section5played=!section5played;
            section5playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";
        }else{
            section5bgVideo.pause();
            section5played=!section5played; 
            section5playButton.querySelector("img").src="assets/Slides_25-35/Plau_Button.png";

        }
    });
    section5soundbutton.addEventListener("click", () => {
        let currentsection=getCurrentSection();
        if(currentsection==="section5"){

            if(section5mute){
                section5vedioUnmute();
            }else{
                section5vediomute();
            }
            currentAudio.muted=section5mute;
        }
        else if(currentsection==="section4"){
            console.log('broo');
            section4muted = !section4muted; // Toggle the mute state
            audio6.muted = section4muted;
            audio7.muted = section4muted;
            audio8.muted = section4muted;
            audio10.muted = section4muted;
            currentAudio.muted=section4muted;
            // Update button text or icon based on mute state
            section5soundbutton.querySelector("img").src = section4muted ? "assets/Slides_25-35/Audio_button_Mute.png" : "assets/Slides_25-35/Audio_button.png";
        }else if(currentsection==="section6"){
            section6muted=!section6muted;
            audio9.muted=section6muted;
            currentAudio.muted=section4muted;
            section5soundbutton.querySelector("img").src = section6muted ? "assets/Slides_25-35/Audio_button_Mute.png" : "assets/Slides_25-35/Audio_button.png";

        }
    

    });

    section5restartbutton.addEventListener("click", () => {
        console.log('mm',currentSection)
            
                section5bgVideo.currentTime = 0;
                section5bgVideo.play();
                section5vedioUnmute(); 
                section5played=true; 
                section5playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";

    });

//common
    document.querySelectorAll('.section').forEach(section => {
            section.addEventListener('click', function(event) {
                // Get the clicked element
                const target = event.target;
                console.log("clicked target:",target.className)
                // Find the parent with class 'section'
                const parentSection = target.closest('.section');
        
                if (parentSection) {
                    const sectionId = parentSection.id;
                    console.log('Clicked section ID:', sectionId);
                    // Switch statement based on sectionId
                    switch (sectionId) {
                        case 'section1':
                            if(!section1doonce){
                                bgVideo.muted = false;
                                bgVideo.play();
                                played=!played;
                                playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";
                                section1vedioUnmute();
                                section1doonce=!section1doonce;
                            }
                            break;
                        case 'section2':
                            if (handleOctopusVisible()) {
                                triggerOctopusActions();
                            }
                            break;
                        case 'section3':
                            if(handleOctopusidelVisible()){
                                section3triggerOctopusActions();
                            }
                            break;
                        case 'section4':
                            if(handleOctopus4Visible()){
                                section4triggerOctopusActions();
                            }
                            break;
                        case 'section5':
                            console.log('Section 5 clicked.');
                            // Perform actions specific to section 5
                            break;
                        case 'section6':
                            if(handleSection6Visible()&&!section6doonce){
                                triggerSection6Action();
                                section6doonce=!section6doonce;
                            }
                            break;
                        default:
                            console.log('Unknown section clicked.');
                    }
                }
            });
    });

    //Gap resize code
    function adjustGapHeights() {
        const gapElements = ['#gap2', '#gap3', '#gap4', '#gap6']; // IDs of the gap elements
        const maxWidth = 1920; // Maximum width threshold

        gapElements.forEach(selector => {
            const element = document.querySelector(selector);

            if (element) {
                // Get the original height in vw
                const vwHeight = parseFloat(getComputedStyle(element).getPropertyValue('--vw-height') || 5); // Default to 5vw if not set

                if (window.innerWidth > maxWidth) {
                    // Fix the height to the last calculated value at 1920px
                    element.style.height = `${(maxWidth * vwHeight) / 100}px`;
                } else {
                    // Use the dynamic vw-based height
                    element.style.height = `${(window.innerWidth * vwHeight) / 100}px`;
                }
            }
        });
    }

    // Adjust heights on page load
    adjustGapHeights();

    // Adjust heights on window resize
    window.addEventListener('resize', adjustGapHeights);

    //Smooth Transition to sections
    function smoothScrollTo(target, duration) {
        const start = window.scrollY;
        const end = target.offsetTop;
        const distance = end - start;
        const startTime = performance.now();
    
        function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);
    
        window.scrollTo(0, start + distance * ease);
    
        if (progress < 1) {
            requestAnimationFrame(step);
        }
        }
    
        // Easing functions for different effects
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
    
        requestAnimationFrame(step);
    }

    secion5rigthTop.style.display="none";
    // Section5 play/pause and language and reaad
    window.addEventListener("scroll", () => {
        const section4 = document.getElementById("section4");
        const section5 = document.getElementById("section5");
        const section6 = document.getElementById("section6");
        
    
        const section5play = document.getElementById("section5play");
        const section5restart = document.getElementById("section5restart");
        const section5sound = document.getElementById("section5sound");
        const section4ReadHelp = document.getElementById("section4ReadHelp");
        const section4Help = document.getElementById("section4Help");
        
        // Check if the section is enabled (display is not none)
        function isSectionVisible(section) {
            return window.getComputedStyle(section).display !== "none";
        }

        const scrollPosition = window.scrollY + window.innerHeight / 2;
    
        const isInSection4 =  isSectionVisible(section4) && scrollPosition >= section4.offsetTop && scrollPosition < section4.offsetTop + section4.offsetHeight;
        const isInSection5 = isSectionVisible(section5) && scrollPosition >= section5.offsetTop && scrollPosition < section5.offsetTop + section5.offsetHeight;
        const isInSection6 = isSectionVisible(section6) && scrollPosition >= section6.offsetTop && scrollPosition < section6.offsetTop + section6.offsetHeight;
    
        // Toggle visibility of the top-right container

        if(isSectionVisible(section4) &&scrollPosition >= section4.offsetTop){
            secion5rigthTop.style.display="block";
        }else{
            secion5rigthTop.style.display="none";
        }
        // if (isInSection4 || isInSection5 || isInSection6) {
        //     secion5rigthTop.style.display="block";
        // } else {
        //     secion5rigthTop.style.display="none";
        // }
    
        // Enable/disable buttons based on the current section
        if (isInSection4) {
            section5play.classList.add("hidden");
            section5restart.classList.add("hidden");
            section5sound.classList.remove("hidden");
            section4ReadHelp.classList.remove("hidden");
            section4Help.classList.remove("hidden");

            // change the soundimage depend upon the bool
            section5soundbutton.querySelector("img").src = section4muted ? "assets/Slides_25-35/Audio_button_Mute.png" : "assets/Slides_25-35/Audio_button.png";
        } else if (isInSection5) {
            section5play.classList.remove("hidden");
            section5restart.classList.remove("hidden");
            section5sound.classList.remove("hidden");
            section4ReadHelp.classList.remove("hidden");
            section4Help.classList.remove("hidden");
            // change the soundimage depend upon the bool
            section5soundbutton.querySelector("img").src = section5mute ? "assets/Slides_25-35/Audio_button_Mute.png" : "assets/Slides_25-35/Audio_button.png";

            
        } else if (isInSection6) {
            section5play.classList.add("hidden");
            section5restart.classList.add("hidden");
            section5sound.classList.remove("hidden");
            section4ReadHelp.classList.remove("hidden");
            section4Help.classList.remove("hidden");

            section5soundbutton.querySelector("img").src = section6muted ? "assets/Slides_25-35/Audio_button_Mute.png" : "assets/Slides_25-35/Audio_button.png";

        }
    });
    //to know current section
    function getCurrentSection() {
        const sections = document.querySelectorAll('.section');
        const viewportHeight = window.innerHeight;
        let visibleSection = null;
    
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible =
                rect.top < viewportHeight && // Top of the section is in the viewport
                rect.bottom > 0; // Bottom of the section is not above the viewport
    
            if (isVisible) {
                visibleSection = section.id;
            }
        });
    
        return visibleSection;
    }
    function getCurrentsectiondiv() {
        const sections = document.querySelectorAll('.section');
        const viewportHeight = window.innerHeight;
        let visibleSection = null;
    
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible =
                rect.top < viewportHeight && // Top of the section is in the viewport
                rect.bottom > 0; // Bottom of the section is not above the viewport
    
            if (isVisible) {
                visibleSection = section;
            }
        });
    
        return visibleSection;
    }
    
    // function getCurrentSection() {
    //     const sections = document.querySelectorAll('.section');
    //     const viewportHeight = window.innerHeight;
    //     let visibleSection = null;
    
    //     sections.forEach((section) => {
    //       const rect = section.getBoundingClientRect();
    //       if (rect.top >= 0 && rect.top < viewportHeight / 2) {
    //         visibleSection = section.id;
    //       }
    //     });
    
    //     return visibleSection;
    //   }
    
    










// 1st 

    const enableVideo = () => {
        if(!played){
            bgVideo.play();
            section1vedioUnmute();
            played=!played;
            playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";
        }else{
            bgVideo.pause();
            played=!played; 
            playButton.querySelector("img").src="assets/Slides_25-35/Plau_Button.png";

        }
        
        
    };
    // Event: When the video ends
    bgVideo.addEventListener("ended", () => {
        nextImage.style.display = "block"; // Show the image after the video ends
        document.getElementById("gap2").style.display="block"
        section2.style.display = "visible";
        section2.style.display = "block";
        smoothScrollTo(section2,1500);
        
    });





// 2nd
    let firstactiontriggered=false;
    let lastScrollY = 0;
    let ticking = false;

    // Function to apply parallax effect
    function applyParallaxEffect(sectionId, screenPresenceFactor) {
        const viewportHeight = window.innerHeight; // Height of the viewport
        const scrollY = window.scrollY; // Amount scrolled from the top

        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop; // Top position of the section relative to the document
        const sectionHeight = section.offsetHeight;

        const visibilityThreshold = sectionTop + sectionHeight * screenPresenceFactor; // Screen presence for the section
        const sectionVisible = scrollY + viewportHeight - visibilityThreshold;

        // Loop through all image containers
        document.querySelectorAll(`#${sectionId} .image-container`).forEach(layer => {
            const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
            const minMovement = parseFloat(layer.getAttribute("data-min")) || 0;
            const maxMovement = parseFloat(layer.getAttribute("data-max")) || 0;

            const screenPresence = parseFloat(layer.getAttribute("data-screen-presence")) || screenPresenceFactor; // Default screen presence

            // Calculate visibility percentage relative to the section
            const sectionFactor = Math.min(Math.max(sectionVisible / (sectionHeight * screenPresence), 0), 1);

            // Calculate movement in percentage
            let movement = sectionFactor * 100 * speed;

            // Restrict movement within min and max bounds
            movement = Math.max(minMovement, Math.min(maxMovement, movement));

            // Apply parallax transform
            layer.style.transform = `translateX(-50%) translateY(${movement}%)`;
        });

        ticking = false; // Allow next animation frame
    }

    // Event listener for scroll
    window.addEventListener("scroll", () => {
        lastScrollY = window.scrollY;

        // Request animation frame for smooth rendering
        if (!ticking) {
            requestAnimationFrame(() => applyParallaxEffect("section2", 0.8)); // Apply parallax for Section 2
            requestAnimationFrame(() => applyParallaxEffect("section3", 0.5)); // Apply parallax for Section 3
            requestAnimationFrame(() => applyParallaxEffect("section4", 0.4)); // Apply parallax for Section 4
            requestAnimationFrame(() => applyParallaxEffect("section6", 0.4));  
            ticking = true;
        }
    });

    
    
    
    // Trigger 1: Display Octopus and Play First Audio
    const handleOctopusVisible = () => {
        const octopusRect = octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        // Check if the octopus is fully visible in the viewport
        if (
            octopusRect.bottom >= 0 &&
            octopusRect.top <= windowHeight &&
            octopusRect.right >= 0 &&
            octopusRect.left <= windowWidth&&!firstactiontriggered
        ) {
            return true;
        }
        return false;
    };
    // Trigger method when octopus is visible
    const triggerOctopusActions = () => {
        // Add your additional logic here
        dialogBox.style.display = "block";
        
        textElement.textContent ="A food chain shows how different living things in nature rely on each other for food and energy. Take a closer look at the food chain happening in our kitchen garden.";
        adjustImageHeight();
        audio1.play();
        firstactiontriggered=!firstactiontriggered;
    };

    // Trigger 2: When First Audio Ends, Play Second Audio
    audio1.addEventListener("ended", () => {
        textElement.innerHTML =  "A food chain shows how different living things in nature rely on each other for food and energy. Take a closer look at the food chain happening in our kitchen garden."+"<br><span style='color: red;font-weight: bold;'>Select each icon to know about them.</span>";
        adjustImageHeight();
        dialogBox.querySelector('.text').style.fontFamily = "Heinemann";
        dialogBox.querySelector('.text').style.fontWeight = "italic";
        audio2.play();
    });

    // Trigger 3: When Second Audio Ends, Show White Image and Buttons
    audio2.addEventListener("ended", () => {
        whiteOverlay.style.display = "block";
                // Loop through all button containers and make them visible
        buttonContainers.forEach(element => {
            element.style.display = "block";
        });
    });
    // Track clicked buttons
    const clickedButtons = new Set();

    // Total number of buttons
    const totalButtons = document.querySelectorAll('.button-container').length;
    console.log('total',totalButtons)
    // Variable to track whether all buttons have been clicked
    let allButtonsClicked = false;
    // Add click event listeners for each button
    document.querySelectorAll('.button-container').forEach((buttonContainer, index) => {
        buttonContainer.addEventListener('click', () => {
            //   // Hide all labels and arrows
            //   document.querySelectorAll('.label, .arrow').forEach(element => {
            //     element.style.display = 'none';
            //   });

            buttonContainer.style.pointerEvents="none";
                console.log('clicked',index)

            // Show the specific label and arrow for the clicked button
            const label = document.querySelector(`#label${index + 1}`);
            const arrow = document.querySelector(`#arrow${index + 1}`);
            if (label) label.style.display = 'block';
            if (arrow) arrow.style.display = 'block';


            section2popup_audio.pause(); // Pause the audio
            section2popup_audio.currentTime = 0; // Reset playback position to the start
            //enable popup and change text
            section2popup.style.display = 'block';
            switch(index + 1){
                case 4:
                    
                    if (section2popupText) {
                        section2popupText.innerHTML  = "Plants like tomatoes grow big and healthy because they get energy from the sun. Because they make (or produce) their own food, they are called <strong>producers</strong>.";
                        section2popup.querySelector('h3').innerHTML="Producers"
                        section2popup_audio=new Audio("assets/audio/Audios/7._Plants_like_tomatoes_grow_big.mp3");
                    }
                break;
                case 1:
                    if (section2popupText) {
                        section2popupText.innerHTML = "These plants have leaves that caterpillars munch on because they need food to grow. Then, sparrows visit the garden and eat the caterpillars they find on the tomato plants. As they can't make their own food, they are known as <strong>consumers</strong>. They consume, or eat, food.";
                        section2popup.querySelector('h3').innerHTML="Consumers"
                        section2popup_audio=new Audio("assets/audio/Audios/7._These_plants_have_leaves_that.mp3");
                    }
                break;
                case 2:
                    if (section2popupText) {
                        section2popupText.innerHTML = "These plants have leaves that caterpillars munch on because they need food to grow. Then, sparrows visit the garden and eat the caterpillars they find on the tomato plants. As they can't make their own food, they are known as <strong>consumers</strong>. They consume, or eat, food.";
                        section2popup.querySelector('h3').innerHTML="Consumers"
                        section2popup_audio=new Audio("assets/audio/Audios/7._These_plants_have_leaves_that.mp3");
                    }
                break;
                case 3:
                    if (section2popupText) {
                        section2popupText.innerHTML = "After sparrows eat the caterpillars, leftovers like droppings or parts are left behind. Worms and bacteria, known as <strong>decomposers</strong> then break down these leftovers into tiny pieces. This helps tomato plants grow better by turning them into nutrients for the soil.";
                        section2popup.querySelector('h3').innerHTML="Decomposers"
                        section2popup_audio=new Audio("assets/audio/Audios/7._After_sparrows_eat_the_caterp.mp3");
                    }
                break;
            }
            section2popup_audio.play();
            adjustImageHeightsection2popup();
            clickedButtons.add(index);

        
        });
    });


    audio3.addEventListener("ended", () => {
        
        // grass_toplayer.querySelector('img').src=imagesToPreload.find(src => src.includes('Grass_top_layer.png'));//"assets/Slides11-17/Grass_top_layer.png";
        // grass_toplayer.style.bottom="-36%"
        // gap3.style.display="block";
        // section3.style.display = "block";
        // section3.style.overflow="visible";//change after to visible
        // section2nextImage.style.display="block";
        // //scroll down image enable
        // smoothScrollTo(section3,1500);
        // Assign the image source to grass_toplayer and adjust its position
        const grassTopLayerImg = grass_toplayer.querySelector('img');
        const newSrc = imagesToPreload.find(src => src.includes('Grass_top_layer.png'));

        if (newSrc) {
            grassTopLayerImg.src = newSrc;
            grassTopLayerImg.onload = () => {
                // Adjust position after the image is loaded
                grass_toplayer.style.bottom = "-36%";

                // Perform the subsequent actions only after the above changes
                gap3.style.display = "block";
                section3.style.display = "block";
                section3.style.overflow = "visible"; // Change overflow to visible
                section2nextImage.style.display = "block";

                // Scroll down smoothly to section3
                smoothScrollTo(section3, 1500);
            };
        } else {
            console.error("Image 'Grass_top_layer.png' not found in the preload list.");
        }
    });

    section2popupcross.addEventListener("click",()=>{
        console.log('cross clicked')
        section2popup.style.display='none';
        section2popup_audio.pause(); // Pause the audio
        section2popup_audio.currentTime = 0; // Reset playback position to the start

                // Check if all buttons have been clicked
                if (!allButtonsClicked && clickedButtons.size === totalButtons) {
                    console.log('finished');
                    allButtonsClicked = true;
                    audio3.play();
                    textElement.textContent = "When creating a food chain, arrows are used to show the feeding relationships. The arrow always points in the direction where energy is being passed along the chain.";
                    dialogBox.querySelector('.text').style.fontFamily = "Heinemann";
                    dialogBox.querySelector('.text').style.fontWeight = "normal";
                    adjustImageHeight();
                }
    });


    function adjustImageHeight() {
    const textHeight = textElement.offsetHeight;
    const imageHeight = document.getElementById('dialogBoxImage').offsetHeight;
    document.getElementById('dialogBoxx').style.width = `${(imageHeight + textHeight)*0.8}px`; // Combine image and text heights
    }

    function adjustImageHeightsection2popup(){
        const textHeight=  section2popupText.offsetHeight;
        
        const imageHeight = document.getElementById('section2popupimg').offsetHeight;
        console.log('offside',imageHeight);
        section2popup.style.width=`${(imageHeight + textHeight)}px`;
    }

    // Adjust on load
    adjustImageHeight();

    // Optional: Recalculate height when text changes dynamically
    textElement.addEventListener('input', adjustImageHeight);





//3rd
    let section3Octopusidelvisible = false;    

    // Trigger 1: Display Octopus and Play First Audio
    const handleOctopusidelVisible = () => {
            const octopusRect = section3octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            // Check if the octopus is fully visible in the viewport
            if (
                octopusRect.bottom >= 0 &&
                octopusRect.top <= windowHeight &&
                octopusRect.right >= 0 &&
                octopusRect.left <= windowWidth&&!section3Octopusidelvisible
            ){
                return true;
            }
            return false;
    };
    const section3triggerOctopusActions = () => {
        section3dialogBox.style.display = "inline-block";
        section3dialogText.innerHTML = "We've learned all about the food chain in our kitchen garden.";
        adjustSection3ImageHeight();
        audio4.play();
        section3Octopusidelvisible=!section3Octopusidelvisible;
    };

    audio4.addEventListener("ended", () => {
        section3dialogText.innerHTML = "Let's explore this forest together, meet my friends, and help them find their meals along the way. Are you ready to start?<br><span style='color: red;font-weight: bold;'>Select Start Adventure.</span>";
        adjustSection3ImageHeight();
        audio5.play()
        
    });
    audio5.addEventListener("ended", () => {
        section3_button.style.display = "block";
        section3dialogBox.style.display = "none";
    });
    // Add a click event listener to the container
    section3_button.addEventListener('click', () => {
        console.log('section3_button_clicked');
        section3octopusContainer.style.display = "none";
        section3octopusContainershell.style.display = "block";
        section3_button.style.display = "none";
    });

    // Add click event listener to the 'foodchain' element
    foodchain_button.addEventListener('click', () => {
        document.getElementById("gap4").style.display="block";
        section4.style.overflow="visible";
        section4.style.display="block"
        smoothScrollTo(section4,1500);
        document.getElementById("section3nextImage").style.display="block";

    });
    function adjustSection3ImageHeight() {
        const textHeight = section3dialogText.offsetHeight;
        const imageHeight = document.getElementById('section3dialogBoxImage').offsetHeight;
        document.getElementById('section3dialogBoxx').style.width = `${(imageHeight + textHeight)*0.8}px`; // Combine image and text heights
    }



// 4th

    let section4actiontriggered = false;
    let section4objectsisclickable=false;
    let section4languageguidedoonce=false;
    let section4readguidedoonce=false;
    let currentAudio = new Audio();

    function adjustSection4ImageHeight() {
        document.getElementById('section4dialogBoxx').style.width= document.querySelector('.section4dialogBox').style.minWidth;
        const textHeight = section4dialogText.offsetHeight;
        const imageHeight = document.getElementById('section4dialogBoxImage').offsetHeight;
        document.getElementById('section4dialogBoxx').style.width = `${(imageHeight + textHeight)*0.8}px`; // Combine image and text heights
    }


    // Handle visibility of Section 4 Octopus
    const handleOctopus4Visible = () => {
        const octopusRect = section4octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Check if the octopus is fully visible in the viewport
        if (
            octopusRect.bottom >= 0 &&
            octopusRect.top <= windowHeight &&
            octopusRect.right >= 0 &&
            octopusRect.left <= windowWidth &&
            !section4actiontriggered
        ) {
            return true;
        }
        return false;
    };
    // Trigger method when octopus is visible
    const section4triggerOctopusActions = () => {
        section4dialogBox.style.display = "inline-block";
        section4dialogText.style.display = "block";
        section4dialogText.innerHTML = "Gear up to meet my friends and explore the Great Bear Forest, home to a diverse array of life!";
        adjustSection4ImageHeight();
        audio6.play().catch((error) => {
            console.error('Error playing audio:', error);
        });

        section5soundbutton.querySelector("img").src="assets/Slides_25-35/Audio_button.png";
        section4muted=false;

        section4actiontriggered=!section4actiontriggered;
    };
    audio6.addEventListener('ended',()=>{
        section4dialogText.innerHTML = "You can also click on any glossary term to get more information.";
        adjustSection4ImageHeight();
        audio7.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
        

    });
    audio7.addEventListener('ended',()=>{
        document.getElementById('section4Help').style.pointerEvents='visible';
        document.getElementById('section4HelpImage').src = "assets/Slides_25-35/Reading-Language_button_Selected.png";


    });
    audio8.addEventListener('ended',()=>{
        document.getElementById('section4ReadHelp').style.pointerEvents='visible';
        document.getElementById('section4ReadHelpImage').src = "assets/Slides_25-35/Reading-Language_button_Selected.png";

    });
    // Handle visibility of Section 4 Grass
    const handleGrassVisible = () => {
        let allVisible = true; // Flag to check if all elements are visible
    
        grassContainers.forEach((container) => {
            const rect = container.getBoundingClientRect(); // Get the bounding box of the element
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
    
            // Check if the element is fully visible in the viewport
            if (
                rect.bottom < 0 || // Completely above the viewport
                rect.top > windowHeight || // Completely below the viewport
                rect.right < 0 || // Completely to the left of the viewport
                rect.left > windowWidth // Completely to the right of the viewport
            ) {
                allVisible = false; // Set flag to false if any container is not visible
            }
        });
    
        // Show or hide 'section4ReadHelp' based on visibility of all containers
        if (allVisible) {
            document.getElementById("section4ReadHelp").style.display = "block";
            document.getElementById("section4Help").style.display = "block";
        } else {
            document.getElementById("section4ReadHelp").style.display = "none";
            document.getElementById("section4Help").style.display = "none";
        }
    };
    
    // Listen for scroll to check visibility
    //window.addEventListener("scroll", handleGrassVisible);

    let section4allButtonsClicked=false;
        // Track clicked buttons
    const section4clickedButtons = new Set();
    let correctbuttoninsection4allButtons="section4button4"

    // Buttons to track
    const buttons = [
        document.getElementById("section4button1"),
        document.getElementById("section4button2"),
        document.getElementById("section4button3"),
        document.getElementById("section4button4")
    ];
    // Function to check if all buttons are clicked
    function checkAllClicked() {
        if (section4clickedButtons.size === buttons.length&&!section4allButtonsClicked) {
            // All buttons clicked, trigger your code
            console.log("All buttons clicked!");
            // Add your trigger code here
            // Section5 start
            section4allButtonsClicked=true;
            enablesection5video();
            
        }
    }
    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (!section4allButtonsClicked) {
                if (button.id === correctbuttoninsection4allButtons) {
                    section4allButtonsClicked = true;
                    console.log("Correct button clicked!");
                    enablesection5video();
                } else {
                    console.log("Incorrect button clicked!");
                }
            }
        
        });
    });
    


    audio10.addEventListener("ended", () => {
        // Change images dynamically
        document.querySelector("#section4button1 img").src = "assets/Slides_25-35/Kelp_outline.png";
        document.querySelector("#section4button2 img").src = "assets/Slides_25-35/Grizzly_bear_outline.png";
        document.querySelector("#section4button3 img").src = "assets/Slides_25-35/Salmon_outline.png";
        document.querySelector("#section4button4 img").src = "assets/Slides_25-35/Yeast_outline_01.png";
        clickedButtons.clear();
        section4dialogBox.style.display = "none";
        buttons.forEach(button => {
            button.style.cursor = "pointer"; // Set cursor to pointer
            button.style.pointerEvents="visible"
        });
        section4objectsisclickable=true;

    });


    document.getElementById('section4ReadHelp').addEventListener('click', function() {
        const currentSectiondiv = getCurrentsectiondiv();
        currentSectiondiv.appendChild(secion5rigthTop);
        // document.querySelector('.overlay').style.display = 'flex'; 
        const textElement = document.getElementById("section4ReadHelpText");
        textElement.classList.add("active"); 
        const overlay = document.querySelector('.overlay');
        if (overlay) {
        overlay.remove();
        }
        const currentSection = getCurrentSection();
        console.log('insection',currentSection);
        if (currentSection === 'section4' || currentSection === 'section5' || currentSection === 'section6') {
            AddOverlay(currentSection);
            switch(currentSection){
                case "section4":
                    currentAudio.muted=section4muted;
                break;
                case "section5":
                    currentAudio.muted=section5mute;
                break;
                case "section6":
                    currentAudio.muted=section6muted;
                break;

            }

        }
        
        
    });


    document.getElementById('section4Help').addEventListener('click', function() {
        // document.querySelector('.overlay2').style.display = 'block'; // Hide overlay
        const currentSectiondiv = getCurrentsectiondiv();
        currentSectiondiv.appendChild(secion5rigthTop);
        const textElement = document.getElementById("section4HelpText");
        textElement.classList.add("active"); 
        const overlay = document.querySelector('.overlay2');
        if (overlay) {
        overlay.remove();
        }
        const currentSection = getCurrentSection();
        console.log('insection',currentSection);
        if (currentSection === 'section4' || currentSection === 'section5' || currentSection === 'section6') {
            AddOverlayRead(currentSection);
        }
    });



    function AddOverlay(section){

        const insection = document.getElementById(section);
        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.style.display = 'none';
        overlay.innerHTML = `
         
        
        <div class="image-container" id="popupWindow">
        <img src="assets/Slides_25-35/Popup_window.png" alt="PopupWindow" />
                <!-- Close Button -->
        <button id="closePopupBtn" class="close-btn">
            <img src="assets/Slides_25-35/Popup_window_close.png" alt="Close" />
        </button>
        <!-- New Headings -->
        <div class="headings-container">
            <h1 class="heading heading-1">Language Help</h1>
        </div>
        <div class="headings-container2">
            <h1 class="heading heading-1">Important Words and Phrases</h1>
        </div>
            <!-- Country Selector Container -->
        <div id="country-container">
            <div class="country-list">
                <button class="country-btn" data-clicked="assets/Slides_25-35/English_selected.png" data-unclicked="assets/Slides_25-35/English.png">
                    <img src="assets/Slides_25-35/English_selected.png" alt="English" />
                    <p id="section4countryText">English</p>

                </button>
            </div>
            <div class="country-list">
                <button class="country-btn"  data-clicked="assets/Slides_25-35/Spanish_selected.png" data-unclicked="assets/Slides_25-35/Spanish.png">
                    <img src="assets/Slides_25-35/Spanish.png" alt="English" />
                    <p id="section4countryText">Spanish</p>

                </button>
            </div>
            <div class="country-list">
            <button class="country-btn"  data-clicked="assets/Slides_25-35/Tagalog_selected.png" data-unclicked="assets/Slides_25-35/Tagalog.png">
                <img src="assets/Slides_25-35/Tagalog.png" alt="English" />
                <p id="section4countryText">Tagalog</p>

                </button>
            </div>
            <div class="country-list">
                <button class="country-btn"  data-clicked="assets/Slides_25-35/Cantonese_selected.png" data-unclicked="assets/Slides_25-35/Cantonese.png">
                    <img src="assets/Slides_25-35/Cantonese.png" alt="English" />
                    <p id="section4countryText">Cantonese</p>

                </button>
            </div>
            <div class="country-list">
            <button class="country-btn"  data-clicked="assets/Slides_25-35/Mandarin_selected.png" data-unclicked="assets/Slides_25-35/Mandarin.png">
                <img src="assets/Slides_25-35/Mandarin.png" alt="English" />
                <p id="section4countryText">Mandarin</p>

                </button>
            </div>
        </div>
        <div class="language-help">
            <div class="content">
                <div class="phrases-container">
                    <div class="phrase-row">
                        <div class="phrase-box">
                            <div class="audio-btn" id="lang-audiobtn" data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                            </div>
                            <div class="phrase-word">Kelp</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">algae and seaweed that live in the ocean</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>
                        <div class="phrase-word">Shallow</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">Not very deep</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>                              
                        <div class="phrase-word">Nutrient:</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">Nourishment that helps things grow</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>                              
                        <div class="phrase-word">Nutrient-rich:</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">having many nutrients</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>                              
                        <div class="phrase-word">Environment:</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">what surrounds a plant or animal; where a plant or animal lives</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>                              
                        <div class="phrase-word">Photosynthesis:</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">a process where plants use sunlight to make food</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="phrase-row">
                        <div class="phrase-box">
                        <div class="audio-btn" id="lang-audiobtn"data-audio="assets/audio/kelp.mp3">
                            <img src="assets/Slides_25-35/Audio_icon.png" alt="">
                        </div>                              
                        <div class="phrase-word">Herbivore:</div>
                        </div>
                        <div class="phrase-box2">
                            <div class="phrase-definition">an animal that feeds on plants</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
     
        `;

        // Append overlay to section4
        insection.appendChild(overlay);
        const images = overlay.querySelectorAll('img');
        let imagesLoaded = 0
        images.forEach((img) => {
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                    overlay.style.display = 'flex'; // Show overlay after all images are loaded
                }
            };
        });
        // overlay.style.display='flex';


        document.getElementById('closePopupBtn').addEventListener('click', function() {
            document.querySelector('.overlay').remove();
            section4.appendChild(secion5rigthTop);
            if(!section4languageguidedoonce){
                section4dialogText.innerHTML = "<span style='color: red;'>Select hotspots. You'll collect a starfish for completing each.</span>";
                adjustSection4ImageHeight();
                audio10.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
                document.getElementById('section4ReadHelpImage').src = "assets/Slides_25-35/Reading-Language_button.png";
                section4languageguidedoonce=!section4languageguidedoonce;
            }
    
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = new Audio();
            }
            const textElement = document.getElementById("section4ReadHelpText");
            textElement.classList.remove("active"); 
            
        });

            //COUNTRY BUTTON CLICK AND UNCLICK IMAGE CHANGE
        // Define the data for each language
        const countryData = {
        English: [
        { word: "Kelp", definition: "algae and seaweed that live in the ocean",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/kelp._algae_and_seaweed_th.mp3" },
        { word: "Shallow", definition: "Not very deep",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/shallow._not_very_deep__.mp3"},
        { word: "Nutrient", definition: "Nourishment that helps things grow",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/nutrient._nourishment_that.mp3" },
        { word: "Nutrient-rich", definition: "having many nutrients",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/nutrientrich._having_many.mp3" },
        { word: "Environment", definition: "what surrounds a plant or animal; where a plant or animal lives",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/environment._what_surround.mp3"},
        { word: "Photosynthesis", definition: "a process where plants use sunlight to make food",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/photosynthesis._a_process_.mp3"},
        { word: "Herbivore", definition: "an animal that feeds on plants",audiopath:"assets/audio/Audios/Language_Help_Audios/English_Artist_Christopher/herbivore._an_animal_that_.mp3" },
        ],
        Spanish: [
        { word: "Quelpo", definition: "algas y algas que viven en el océano",audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/quelpo.__algas_y_algas_que_v.mp3"},
        { word: "Poco profundo", definition: "No muy profundo" ,audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/Poco_profundo._No_muy_profun.mp3"},
        { word: "Nutritivo", definition: "alimento que ayuda a las cosas a crecer",audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/nutritivo._alimento_que_ayud.mp3" },
        { word: "Rica en nutrientes", definition: "tener muchos nutrientes" ,audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/Rica_en_nutrientes._tener_mu.mp3"},
        { word: "Ambiente", definition: "lo que rodea a una planta o animal; donde vive una planta o un animal",audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/ambiente._lo_que_rodea_a_una.mp3" },
        { word: "Fotosíntesis", definition: "Un proceso en el que las plantas utilizan la luz solar para producir alimentos",audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/fotosíntesis._Un_proceso_en_.mp3" },
        { word: "Herbívoro", definition: "un animal que se alimenta de plantas" ,audiopath:"assets/audio/Audios/Language_Help_Audios/Spanish_Artist_Mimi/herbívoro._un_animal_que_se_.mp3"},
        ],
        Tagalog: [
        { word: "Kelp", definition: "algae at seaweed na nabubuhay sa karagatan",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/kelp._algae_at_seaweed_na_na.mp3" },
        { word: "Mababaw", definition: "hindi masyadong malalim",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/mababaw._hindi_masyadong_mal.mp3"  },
        { word: "Nakapagpapalusog", definition: "pagpapakain na tumutulong sa mga bagay na lumago",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/nakapagpapalusog._pagpapakai.mp3"  },
        { word: "Mayaman sa sustansya", definition: "pagkakaroon ng maraming sustansya",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/mayaman_sa_sustansya._pagkak.mp3"  },
        { word: "Kapaligiran", definition: "kung ano ang nakapaligid sa isang halaman o hayop; kung saan nakatira ang isang halaman o hayop",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/kapaligiran._kung_ano_ang_na.mp3"  },
        { word: "Potosintesis", definition: "isang proseso kung saan ginagamit ng mga halaman ang sikat ng araw sa paggawa ng pagkain",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/potosintesis._isang_proseso_.mp3"  },
        { word: "Herbivore", definition: "isang hayop na kumakain ng mga halaman",audiopath:"assets/audio/Audios/Language_Help_Audios/Tagalog-Filipino_Artist_Amanda/herbivore._isang_hayop_na_ku.mp3"  },
        ],
        Cantonese: [
        { word: "海帶", definition: "生活喺海洋入面嘅藻類同海藻",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio02.mp3"  },
        { word: "淺", definition: "唔係好深",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio03.mp3"  },
        { word: "營養", definition: "幫助事物生長嘅滋養",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio04.mp3"  },
        { word: "營養豐富", definition: "有好多營養",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio05.mp3"  },
        { word: "環境", definition: "植物或動物周圍嘅嘢；植物或動物住嘅地方",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio06.mp3"  },
        { word: "光合作用", definition: "植物用陽光嚟製造食物嘅過程",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio07.mp3"  },
        { word: "食草動物", definition: "以植物為食嘅動物",audiopath:"assets/audio/Audios/Language_Help_Audios/Contonese_Artist_Adam/Audio08.mp3"  },
        ],
        Mandarin: [
        { word: "海带", definition: "生活在海洋中的藻类和海藻",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio02.mp3"  },
        { word: "浅的", definition: "不是很深",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio03.mp3" },
        { word: "养分", definition: "帮助事物生长的营养",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio04.mp3" },
        { word: "营养丰富", definition: "有很多营养成分",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio05.mp3" },
        { word: "环境", definition: "植物或动物周围有什么；植物或动物生活的地方",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio06.mp3" },
        { word: "光合作用", definition: "植物利用阳光制造食物的过程",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio07.mp3" },
        { word: "食草动物", definition: "以植物为食的动物",audiopath:"assets/audio/Audios/Language_Help_Audios/Mandarin_Chinese_Artist_Barry/Audio08.mp3" },
        ],
        };
    
    // Function to dynamically update phrases based on selected language
        function updatePhrases(language) {
            const phraseRows = document.querySelectorAll('.phrase-row');
            const audioparameter= document.querySelectorAll(".audio-btn");
            // Get the phrases for the selected language
            const phrases = countryData[language];
        
            phraseRows.forEach((row, index) => {
                if (phrases[index]) {
                    // Update the word and definition
                    row.querySelector('.phrase-word').textContent = phrases[index].word; // Update the word
                    row.querySelector('.phrase-definition').textContent = phrases[index].definition; // Update the definition
                }
            });
            audioparameter.forEach((row, index) => {
                if (phrases[index]) {
                    row.setAttribute("data-audio", phrases[index].audiopath);
                }
            });
    
        }
    
    
    // Add event listeners to the country buttons
        document.querySelectorAll('.country-btn').forEach(button => {
        button.addEventListener('click', () => {
        // Reset all buttons to their unclicked state
        document.querySelectorAll('.country-btn').forEach(btn => {
            const img = btn.querySelector('img');
            img.src = btn.getAttribute('data-unclicked'); // Set to unclicked image
        });
    
        // Set clicked button to its clicked state
        const clickedImg = button.querySelector('img');
        clickedImg.src = button.getAttribute('data-clicked'); // Set to clicked image
    
        // Update phrases based on selected language
        const language = button.querySelector('p').textContent.trim(); // Get language name from button text
        updatePhrases(language);
        });
        });
    
    
    
    // Play audio when an audio-btn is clicked
        document.querySelectorAll(".audio-btn").forEach((button) => {
            button.addEventListener("click", () => {
            const audioSrc = button.getAttribute("data-audio");
    
            // Stop current audio if playing
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
    
            // Create a new audio instance and play it
            currentAudio.src=audioSrc;
            currentAudio.play().catch((err) => {
                console.error("Audio playback failed:", err);
            });
            });
        });

        updatePhrases("English");

    }

    function AddOverlayRead(section){
        const insection = document.getElementById(section);
        // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay2';
    overlay.innerHTML = `
     
    <!-- Close Button -->
    <button id="closePopupBtn2" class="close-btn">
        <img src="assets/Slides_25-35/Popup_window_close.png" alt="Close" />
    </button>
    <div class="contentContainer">
        <img src="assets/Slides_25-35/Popup_window.png" alt="Reading Help Background" class="backgroundImage">
        <div class="readingHelpTitle">Reading Help</div>
        <div class="helpContent">
            <p>• Kelp are algae and seaweed. Kelp are found in large batches called 
                <span class="underline" onclick="showPopup(1)">forests</span>.
            </p>
            <p>• Kelp grows in an shallow <span class="underline" onclick="showPopup(2)">nutrient-rich enviroment</span>. where sunlight can reach.</p>
            <p>• Kelp absorb its nutrients from the sun and waters around it. It uses photosynthesis to make its own food.Things that <span class="underline" onclick="showPopup(3)">consume</span>, or eat, kelp are marine <span class="underline" onclick="showPopup(4)">herbivores</span>(something that eat plants).Sea urchins,mollusks, and some fish species also consume kelp.</p>
        </div>
    </div>
        <!-- Popup -->
        <div id="popup1" class="popup">
        <div class="popupContainer">
            <img src="assets/Slides_25-35/Reading_Help_popup.png" alt="Popup1">
            <button onclick="hidePopup('popup1')">✖</button>
            <div id="grassImage">
                <img src="assets/Slides_25-35/Photo01.png" alt="GrassImage" />
                <p>A large grouping of kelp that provides food and shelter for many other species.</p>
            </div>
        </div>
        </div>
        <div id="popup2" class="popup">
        <div class="popupContainer">
            <img src="assets/Slides_25-35/Reading_Help_popup.png" alt="Popup2">
            <button onclick="hidePopup('popup2')">✖</button>
            <div id="grassImage">
                <img src="assets/Slides_25-35/Photo02.png" alt="GrassImage" />
                <p>An environment that has lots of important elements like nitrogen, carbon, phosphorus, sulfur, and potassium.</p>
            </div>
        </div>
        </div>
        <div id="popup3" class="popup">
        <div class="popupContainer">
            <img src="assets/Slides_25-35/Reading_Help_popup.png" alt="Popup3">
            <button onclick="hidePopup('popup3')">✖</button>
            <div id="grassImage3">
                <img src="assets/Slides_25-35/Photo03.png" alt="GrassImage" />
                <p>To eat or drink something.</p>
            </div>
        </div>
        </div>
        <div id="popup4" class="popup">
    <div class="popupContainer">
        <img src="assets/Slides_25-35/Reading_Help_popup.png" alt="Popup4">
        <button onclick="hidePopup('popup4')">✖</button>
        <div id="grassImage4"  >
            <img src="assets/Slides_25-35/Photo04.png" alt="GrassImage" />
            <p>An animal that feeds on plants.</p>
        </div>
    </div>
        </div>
    
 
    `;

    // Append overlay to section4
    insection.appendChild(overlay);
    const images = overlay.querySelectorAll('img');
    let imagesLoaded = 0
    images.forEach((img) => {
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                overlay.style.display = 'block'; // Show overlay after all images are loaded
            }
        };
    });
        // document.querySelectorAll('.overlay2').forEach(element => {
        //     element.style.display = 'block';
        // });

    document.getElementById('closePopupBtn2').addEventListener('click', function() {
            section4.appendChild(secion5rigthTop);
            const textElement = document.getElementById("section4HelpText");
            textElement.classList.remove("active"); 
            document.querySelector('.overlay2').style.display = 'none'; // Hide overlay

            if(!section4readguidedoonce){
                section4dialogText.innerHTML = "You can choose a language for translations. Explore and learn!";
                adjustSection4ImageHeight();
                audio8.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
                section4readguidedoonce=!section4readguidedoonce;
                document.getElementById('section4HelpImage').src = "assets/Slides_25-35/Reading-Language_button.png";

            }

        });
    }










//5th
    function enablesection5video(){
        section5.style.display="block"
        document.getElementById("section4nextImage").style.display="block";
        section5.style.overflow="hidden";
        section5bgVideo.play()
        section5played=true;
        section5vedioUnmute();
        section5playButton.querySelector("img").src="assets/Slides_25-35/Pause_Button.png";
        smoothScrollTo(section5,1500);
    }
    
    // Event: When the video ends
    section5bgVideo.addEventListener("ended", () => {
        section5nextImage.style.display = "block";
        document.getElementById("gap6").style.display="block";  
        section6.style.display = "block";
        section6.style.overflow = "visible";
            // Disable pointer events on all elements with the 'icon' and 'clickableobject' classes
        document.querySelectorAll('.icon').forEach(element => {
            element.style.pointerEvents = 'none';
        });
        
        document.querySelectorAll('.clickableobject').forEach(element => {
            element.style.pointerEvents = 'none';
        });

        smoothScrollTo(section6,1500);

    });




    //6th

    const handleSection6Visible = () => {
        // Get all button containers
        const buttons = document.querySelectorAll('.section6button-container');
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Check visibility for each button
        const allVisible = Array.from(buttons).every(button => {
            const rect = button.getBoundingClientRect();
            return (
                rect.bottom >= 0 &&
                rect.top <= windowHeight &&
                rect.right >= 0 &&
                rect.left <= windowWidth
            );
        });

        if (allVisible) {
            return true
        }
        return false;
    };
    const triggerSection6Action = () => {
        section6muted=false;
        audio9.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
        question.style.display='block'
        icon.forEach(image => {
            image.style.display = 'block';
        });
    
    };

    audio9.addEventListener("ended", () => {

        document.querySelectorAll('.icon').forEach(element => {
            element.style.pointerEvents = 'auto';
            element.style. cursor= 'pointer';
        });
        
        document.querySelectorAll('.clickableobject').forEach(element => {
            element.style.pointerEvents = 'visible';
        });

    });

    document.querySelectorAll('.icon').forEach(button => {
        button.addEventListener('click',function(event)  {
            const icon = event.target;
            console.log("Clicked");
                // Define fixed percentage positions for each icon
            const positions = {
                icon1: { top: 41, left: 30},
                icon2: { top: 44, left: 48 },
                icon3: { top: 23, left: 60 },
                icon4: { top: 41, left: 43.5 },
                icon5: { top: 32, left: 59 },
                icon6: { top: 50, left: 75 },
                icon7: { top: 74, left: 66 },
            };
            // Define the text for each icon
            const iconText = {
                icon1: "Cougars are large carnivores that primarily hunt and eat deer, small mammals, and occasionally birds.",
                icon2: "Wolves are carnivorous mammals that hunt and eat other animals like deer and rabbits.",
                icon3: "Eagles are birds of prey that hunt and eat fish, birds, and small mammals.",
                icon4: "Grizzly bears are large mammals that eat plants, berries, and sometimes small animals like fish.",
                icon5: "Trees are producers that use photosynthesis to convert sunlight into energy.",
                icon6: "Otters are aquatic mammals that eat fish, crustaceans, and other small aquatic animals.",
                icon7: "Salmon are fish that eat smaller fish, kelp, and insects in rivers and oceans."
            };

            const popup = document.getElementById("iconpopupcall");


            const iconId = icon.id;
            if (positions[iconId]) {
                popup.style.position = "absolute";
                popup.style.top = `${positions[iconId].top}%`;
                popup.style.left = `${positions[iconId].left}%`;
                popup.style.display = "block";
    
                // Access the <p> element inside the popup
                const popupText = document.getElementById('iconpopuptext');
            if (iconText[iconId]) {
                popupText.innerHTML = iconText[iconId];
            }
            const img = popup.querySelector("img");
            // Apply rotation for specific icons (e.g., icon7)
            if (icon.id === "icon4" || icon.id === "icon5"||icon.id === "icon6" || icon.id === "icon7") {
                img.style.transform = "rotate(0deg)";
                popupText.style.left="49%"
                //popupText.style.left="51.5%";
                //popupText.style.transform = "rotate(0deg)";
            } else {
                img.style.transform = "rotate(180deg)";
                popupText.style.left="51%"
                //popupText.style.left="51.5%";
                //popupText.style.transform = "rotate(180deg)";
            }
        }

    });
    });
    document.querySelectorAll('.clickableobject').forEach(button => {
        button.addEventListener('click', function (event) {
        const popup = document.getElementById("iconpopupcall");
        const feedback = document.getElementById("correctfeedback");
        const objectText = {
            object1: "Cougars are large carnivores that primarily hunt and eat deer, small mammals, and occasionally birds.",
            object2: "Wolves are carnivorous mammals that hunt and eat other animals like deer and rabbits.",
            object3: "Eagles are birds of prey that hunt and eat fish, birds, and small mammals.",
            object4: "Grizzly bears are large mammals that eat plants, berries, and sometimes small animals like fish.",
            object5: "Trees are producers that use photosynthesis to convert sunlight into energy.",
            object6: "Otters are aquatic mammals that eat fish, crustaceans, and other small aquatic animals.",
            object7: "Salmon are fish that eat smaller fish, kelp, and insects in rivers and oceans."
            };
        // Hide the popup initially
        popup.style.display = "none";
        feedback.style.display='block'
    
        // Define the correct button ID
        const correctButtonId = "object5"; // ID of the correct button
    
        // Get the ID of the clicked button
        const clickedButtonId = button.id;

        // Get the feedback elements
            const feedbackText1 = document.getElementById('feedbacktext1');
            const feedbackText2 = document.getElementById('feedbacktext2');
            const feedbackImage1 = document.getElementById('feedbackimage1');
            const feedbackImage3 = document.getElementById('feedbackimage3');
        
        // Update the feedback text based on the object clicked
            feedbackText2.textContent = objectText[clickedButtonId] || "No description available";

            // Get the image URLs from custom attributes
        const nonVisitedImage = button.getAttribute('nonvisitedimage');
        const visitedImage = button.getAttribute('visitedimg');

        button.src = visitedImage;

        // Check if the clicked button is correct
        if (clickedButtonId === correctButtonId) {
            console.log("1Correct");

            // Correct case: update feedback images and text
            feedbackImage1.src = feedbackImage1.getAttribute('correct');
            feedbackImage3.src = feedbackImage3.getAttribute('correct');
            feedbackText1.textContent = "Well done!";

        
        } else {
            console.log("1Wrong");
            // Incorrect case: update feedback images and text
            feedbackImage1.src = feedbackImage1.getAttribute('wrong');
            feedbackImage3.src = feedbackImage3.getAttribute('wrong');
            feedbackText1.textContent = "Not quite right.";
        }
        });
    });

    // Handle feedback image 2 click to show correctfeedback and reset clickableobject images
    document.getElementById('feedbackimage2').addEventListener('click', function() {
        const correctfeedback = document.getElementById('correctfeedback');
        console.log('fkass');
        // Show the feedback container
        correctfeedback.style.display = 'none';
        
        // Reset all clickableobject images
        document.querySelectorAll('.clickableobject').forEach(button => {
        const nonVisitedImage = button.getAttribute('nonvisitedimage');
        button.src = nonVisitedImage;
        });
    });



    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('click', function(event) {
            // Get the clicked element
            const target = event.target;
            console.log("clicked target:", target.className);
    
            // Check if the clicked element does not have the class 'icon'
            if (!target.classList.contains('icon')) {
                // Do something if the clicked element is not '.icon'
                document.getElementById("iconpopupcall").style.display="none";
                // Add your custom logic here
            }
        });
    });




});












 

//section4 overlay2 popup
function showPopup(i) {
    // Hide all popups
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        popup.style.display = "none";
    });

    // Display the selected popup
    const selectedPopup = document.getElementById("popup" + i);
    if (selectedPopup) {
        selectedPopup.style.display = "block";
    }
}

function hidePopup(id) {
    document.getElementById(id).style.display = "none";
}