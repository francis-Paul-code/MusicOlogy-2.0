function togglesidebar(){
    document.getElementById('stream-menu').classList.toggle('active')
}
function translateicon(){
    document.getElementById('Menu-icon').classList.toggle('moveIcon')
}
function switchsectionone(){
    document.getElementById('Library-Section').classList.remove('moveTo100')
    document.getElementById('Library-Section').classList.add('moveToZero')
    document.getElementById('Music-Section').classList.add('moveTo100')
    document.getElementById('Chart-Section').classList.add('moveTo100')
}

function switchsectionthree(){
    document.getElementById('Music-Section').classList.remove('moveTo100')
    document.getElementById('Music-Section').classList.add('moveToZero')
    document.getElementById('Library-Section').classList.add('moveTo100')
    document.getElementById('Chart-Section').classList.add('moveTo100')

}

function switchsectiontwo(){
    document.getElementById('Chart-Section').classList.remove('moveTo100')
    document.getElementById('Chart-Section').classList.add('moveToZero')
    document.getElementById('Library-Section').classList.add('moveTo100')
    document.getElementById('Music-Section').classList.add('moveTo100')

}

function moveBehind(){
    document.getElementById('textOne').classList.add('nextText') 
    document.getElementById('textTwo').classList.add('nextText')
    document.getElementById('textThree').classList.add('nextText')
    
}

function moveFront(){
    document.getElementById('textOne').classList.remove('nextText')
    document.getElementById('textTwo').classList.remove('nextText')
    document.getElementById('textThree').classList.remove('nextText')
}
