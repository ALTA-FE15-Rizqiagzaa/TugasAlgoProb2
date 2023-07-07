function bilanganPrima (prima : number) : string{
    if ( prima % 1 === 0 && prima % prima === 0 ){  //// maaf kakk ini aku salah dan akuuuu blm mengerti jawabannya, nanti aku perbaiki dan pelajari lagi kak
        return "true"
    } else{
        return "false"
    }
}

console.log(bilanganPrima(4))