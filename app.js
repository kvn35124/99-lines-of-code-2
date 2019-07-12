let friends = ["Kevin", "Kyle", "Stephen", "Jack", "Bill"];
var word = "lines";
var count = 99;




for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    while (count > 0) {
        if (count == 1) {
            var word = "line"
        }
        console.log(count + " " + word + " of code in the file");
        console.log(count + " " + word + " of code,");
        console.log(friends[i] + " strikes one out, clears it all out,");
        count = count - 1;
        if (count > 0) {
            if (count == 1) {
                var word = "line"
            }
            console.log(count + " " + word + " lines of code in the file.");
        } else {
            if (count < 1) {
                var word = "lines"
            }
            console.log("No more " + word + " of code in the file.");
        }
    }
}



