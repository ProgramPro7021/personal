// const navlinkels = document.querySelectorAll('.navlinks');
// const windowpathname = window.location.pathname;

// navlinkels.forEach(navlinkel =>{
//     const navlinkpathname = new URL(navlinkel.href).pathname;

//     if(windowpathname === navlinkpathname ){
//         navlinkel.classList.add('active');
//     }
// });


// const navlinkssss = document.querySelectorAll(".navlinks");
// const pathnamee = window.location.pathname;


// navlinkssss.forEach(naveeee =>{
//     const newpathnlinks = new URL (naveeee.href).pathname

//  if ( pathnamee === newpathnlinks ){
//     naveeee.classList.add('active');
//  }

// })


// const newnavigationliunks = document.querySelectorAll('.navlinks');
// const pathnamed = window.location.pathname;

// newnavigationliunks.forEach(newage =>{
//     newurllist = new URL(newage.href).pathname;

//     if ( pathnamed === newurllist ){
//         newage.classList.add('active')
//     }
// })

const navlinkse = document.querySelectorAll(".navlinks");
const pathnamedd = window.location.pathname;

navlinkse.forEach(newparameter =>{
    newurl = new URL (newparameter.href).pathname;

    if (pathnamedd === newurl ){
        newparameter.classList.add('active')  
    }
})