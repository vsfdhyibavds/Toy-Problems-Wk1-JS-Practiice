function speedDetector() {
    let speed = prompt("Enter car speed:");
    speed = parseInt(speed);

    if (speed < 70) {
        console.log("ok");
    } else {
        let demeritPoints = Math.floor((speed - 70) /5);
        if(demeritPoints > 12) {
            console.log("suspended");
        } else {
            console.log(`demerit points: ${demeritPoints}`);
        }
    }
}