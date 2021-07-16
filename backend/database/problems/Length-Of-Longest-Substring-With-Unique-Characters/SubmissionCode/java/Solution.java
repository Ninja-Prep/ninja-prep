class Solution {
    public int longestSubstring(String word) {
        char[] letters = word.toCharArray();
        HashSet<Character> set = new HashSet<>();
        int start = 0;
        int best = 0;
        
        for (int i = 0; i < letters.length; i++) {
            while (set.contains(letters[i]) && start < i) {
                set.remove(letters[start]);
                start++;
            }
            set.add(letters[i]);
            best = Math.max(best, i - start + 1);
        }

        return best;
    }
}