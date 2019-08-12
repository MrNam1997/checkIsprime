function checkIsprime(number) {
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;

    }
}