class Solution {
    public List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for(int i = 0; i < words.length; i++) {
            char[] charAnagram = words[i].toCharArray();
            Arrays.sort(charAnagram);
            String sortedAnagram = String.valueOf(charAnagram);
            if (map.containsKey(sortedAnagram)){
                List<String> list = map.get(sortedAnagram);
                list.add(words[i]);
            }
            else { 
                List<String> list = new ArrayList<>();
                list.add(words[i]);
                map.put(sortedAnagram, list);
            }            
        }
        List<List<String>> output = new ArrayList<>();
        output.addAll(map.values());
        return output;
    }
}