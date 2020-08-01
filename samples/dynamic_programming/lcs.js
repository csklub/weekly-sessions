// Longest Common Subsequence
function lcs(str1, str2) {

    // create a 2d array (matrix)
    const dp = [
        ...Array(str1.length + 1),
    ].map(() => Array(str2.length + 1))

    if(str1.length == 0 && str2.length == 0) return 0

    for(let i = 0; i <= str1.length; i++) {
        for(let j = 0; j <= str2.length; j++) {
            if(i == 0 || j == 0) {
                dp[i][j] = 0
            } else if(str1.charCodeAt(i -1) === str2.charCodeAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    console.log({ dp })
    // result at the bottom right cell
    return dp[str1.length][str2.length]
}

console.log(lcs('abcde', 'ace'))
