const music=document.querySelector("audio");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const img=document.querySelector("img");
const progress=document.getElementById("progress");
let total_duration=document.getElementById("duration");
let current_time=document.getElementById("current_time")
const progress_div=document.getElementById("progress_div")
const songs=[
{
    name:"Ferrari",
    title:"Aaja Ferrari Mein",
    artist:"Armaan Malik"
},
{
    name:"mnkirt",
    title:"Choorey Wali Bahh",
    artist:"Mankirat Aulakh"
},
{
    name:"Daru Badnaam",
    title:"Daru Badnaam",
    artist:"Kamal Kahlon & Param Singh"
},
{
    name:"sush",
    title:"Ik Vaari Aa",
    artist:"Arijit Singh"
},
// {
//     name:"Life",
//     title:"Life",
//     artist:"Akhil"
// },


]

play.addEventListener("click",()=>{
    if(music.paused){
    music.play()
    play.classList.replace("fa-play","fa-pause")
img.classList.add("anime")
}
    else{
        music.pause()
        play.classList.replace("fa-pause","fa-play") 
        img.classList.remove("anime")
    }
});
 
 const loadSong=(songs)=>{
     title.textContent=songs.title;
     artist.textContent=songs.artist;
     music.src="music/" + songs.name + ".mp3";
     img.src="img/" + songs.name + ".png"

}
songIndex=0;
// loadSong(songs[2]);
   const nextSong=()=>{
       songIndex=(songIndex+1)%songs.length;

    loadSong(songs[songIndex])
     music.play()
     img.classList.add("anime")
   }
   const prevSong=()=>{
    songIndex=(songIndex-1 + songs.length)%songs.length;

 loadSong(songs[songIndex])
 music.play()
 img.classList.add("anime");
}
//    progress js work...

music.addEventListener('timeupdate',(event)=>{
    const {currentTime,duration}=event.srcElement;
    let progress_time=(currentTime/duration)*100;
    progress.style.width=`${progress_time}%`

    // music duration update..
    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
let tot_duration=`${min_duration}:${sec_duration}`
if(duration){
    total_duration.textContent=`${tot_duration}`
}

// current upd
let min_currentTime=Math.floor(currentTime/60);
let sec_currentTime=Math.floor(currentTime%60);

if(sec_currentTime<10){
    sec_currentTime=`0${sec_currentTime}`
}
let tot_currentTime=`${min_currentTime}:${sec_currentTime}`

current_time.textContent=`${tot_currentTime}`

})
// progress on click

progress_div.addEventListener("click",(event)=>{
    const {duration}=music;

    let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
    music.currentTime=move_progress;
});

music.addEventListener("ended",nextSong);


   next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);




// theme options

let theme=localStorage.getItem('theme')
if(theme==null){
    setTheme('light')
}
else{
    setTheme(theme)
}


let themeDots=document.getElementsByClassName('theme-dot')
for(var i=0;themeDots.length>i;i++){
themeDots[i].addEventListener('click',function(){
    let mode =this.dataset.mode;
    setTheme(mode)

})

}

function setTheme(mode)
{
    if(mode=='light'){
        document.getElementById('theme-style').href='style.css';
    }
   if(mode=='blue'){
        document.getElementById('theme-style').href='blue.css';
    }
     if(mode=='green'){
        document.getElementById('theme-style').href='green.css';
    }
     if(mode=='purple'){
        document.getElementById('theme-style').href='purple.css';
    }
    localStorage.setItem('theme',mode)
}



