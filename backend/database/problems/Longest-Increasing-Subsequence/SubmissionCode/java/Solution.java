class Solution {
    public int longestIncreasingSubsequence(int[] nums) {
        int max = 0;
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        
        for (int i = 0; i < nums.length; i++) {
            for (int j = i-1; j >= 0; j--) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j]+1);
                }
            }
        }
        
        for (int num: dp) {
            max = Math.max(max, num);
        };
        
        return max;
    }
}