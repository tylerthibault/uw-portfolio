$(document).ready(function(){
    // type-it-out
    typeItOut()
})

function typeItOut(){
    // get txt 
    let txt_container = $('.type-it-out')
    txtList = txt_container.text().split(',')

    txt_container = txt_container.text("")

    var listCount = 0
    var i = 0
    setInterval(async() => {
        let word = txtList[listCount]
        let letter = word[i]
        
        let newText = txt_container.text() + letter
        txt_container.text(newText)
        
        i++
        if (i > word.length){
            if (listCount === txtList.length - 1){
                listCount = 0
            } else {
                listCount++
            }
            sleep(1000)
            txt_container.text('')
            i=0
        }
    }, 100)
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }