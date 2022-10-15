const getRadius = process.argv.slice(2);

function circleZone (radius) {
    let isDiameter = 3.14 * radius * radius;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${isDiameter} şeklinde olmalıdır.`);
}

circleZone(getRadius[0] *1);