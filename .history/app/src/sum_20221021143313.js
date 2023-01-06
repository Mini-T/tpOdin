function smallNumberSum(a, b) {
    if (a > 9 || a < 0 || b > 9 || b < 0 ) {
        throw new Error("not small Numbers")
    } else {
        return a + b
    }
    
}