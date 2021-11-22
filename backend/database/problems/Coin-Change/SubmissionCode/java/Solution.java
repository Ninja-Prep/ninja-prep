class Solution {
    public int coinChange(int[] coins, int target) {
        int[] dp = new int[target+1];
        Arrays.fill(dp, target+1);
        dp[0] = 0;
        for (int j = 1; j <= target; j++) {
            for (int i = 0; i < coins.length; i++) {
                if(coins[i] <= j){
                    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
                }           
        } 
    }
        return dp[target] > target ? -1 : dp[target];
    }
}

