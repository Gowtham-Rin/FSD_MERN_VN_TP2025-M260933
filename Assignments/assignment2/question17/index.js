function Downloadfile(filename, callback){
    console.log(`preparing to download ${filename}...`);
    setTimeout(() => {
        console.log(`Downloading ${filename}...`)
        callback();
    }, 2000);
}

function Downloadcomplete(){
    console.log(`Download Complete!`)
}

Downloadfile("Movie.mp4", Downloadcomplete)