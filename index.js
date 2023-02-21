console.log('connected');

// on selecting and increment selected item quantity

let allitemcards = document.getElementsByClassName('item-card')
for (let i = 0; i < allitemcards.length; i++) {
    let totalquantity = 0
    let [decrement_btn, increment_btn] = allitemcards[i].getElementsByTagName('button')
    let show_quantity = allitemcards[i].getElementsByTagName('label')[0]
    if(decrement_btn===undefined || increment_btn===undefined){
        continue
    }
    increment_btn.addEventListener('click', () => {
        decrement_btn.style.visibility = 'visible'
        show_quantity.style.visibility = "visible"
        increment_btn.style.borderTopLeftRadius = '0px'
        increment_btn.style.borderBottomLeftRadius = '0px'
        totalquantity++
        show_quantity.innerText = totalquantity.toString()
    })
    decrement_btn.addEventListener('click', () => {
        totalquantity--
        if (totalquantity == 0) {
            increment_btn.style.borderTopLeftRadius = '5px'
            increment_btn.style.borderBottomLeftRadius = '5px'
            decrement_btn.style.visibility = 'hidden'
            show_quantity.style.visibility = "hidden"
        }
        show_quantity.innerText = totalquantity.toString()
    })
}





// slider 
let slider = document.getElementById("slider")
let slideritems = slider.getElementsByClassName("item-card")
let sliderleftbtn = document.getElementById("slider-left-btn")
let sliderrightbtn = document.getElementById("slider-right-btn")

sliderleftbtn.addEventListener('click',()=>{
    slider.scrollLeft-=300
    

})
sliderrightbtn.addEventListener('click',()=>{
    slider.scrollLeft+=300

})
// l = 0
// sliderleftbtn.addEventListener('click', () => {
//     l--
//     for (var i of slideritems) {
//         if (l == 0) { i.style.left = "0px"; }
//         if (l == 1) { i.style.left = "-960px"; }
//         if (l == 2) { i.style.left = "-1920px"; }
//         if (l == 3) { i.style.left = "-2880px"; }
//         if (l < 0) { l = 0 }
//     }
// })


// sliderrightbtn.addEventListener('click', () => {
//     l++
//     for (var i of slideritems) {
//         if (l == 0) { i.style.left = "0px"; }
//         if (l == 1) { i.style.left = "-960px"; }
//         if (l == 2) { i.style.left = "-1920px"; }
//         if (l == 3) { i.style.left = "-2880px"; }
//         if (l > 4) { l = 4 }
//     }
// })



//video player controller
let videoplaybtn = document.getElementById("video-play-btn")
let videplayer = document.getElementById('video-player')
videoplaybtn.addEventListener('click', () => {
    console.log('clicked');
    document.getElementById('video-player').play()
    videoplaybtn.style.visibility = "hidden"
})
videplayer.addEventListener('click', () => {
    document.getElementById('video-player').pause()
    videoplaybtn.style.visibility = "visible"
})



// cart modal
let cardpopup = document.getElementById('cart-popup')
let cardpopupmodal = document.getElementById('cart-popup-modal')
let shopbtn = document.getElementById('cart-btn')

shopbtn.addEventListener('click', showCartModal)
cardpopup.addEventListener('click', hideCartModal)

function showCartModal() {
    cardpopup.setAttribute('class', 'cart-modal-show')
    cardpopupmodal.setAttribute('class', 'cart-modal-show')
}
function hideCartModal() {
    cardpopup.setAttribute('class', 'cart-modal-hide')
    cardpopupmodal.setAttribute('class', 'cart-modal-hide')
}



//request modal
let requestbtn = document.getElementById('request-a-dish-btn')
let requestpopup = document.getElementById('request-popup')
let requestmodal = document.getElementById('request-modal')

requestbtn.addEventListener('click', showRequestModal)
requestpopup.addEventListener('click', hideRequestModal)
function showRequestModal() {
    window.scrollTo({ top: 0, behavior: "smooth" })
    requestpopup.setAttribute('class', 'request-modal-show')
    requestmodal.setAttribute('class', 'request-modal-show')
}
function hideRequestModal() {
    requestpopup.setAttribute('class', 'request-modal-hide')
    requestmodal.setAttribute('class', 'request-modal-hide')
}

