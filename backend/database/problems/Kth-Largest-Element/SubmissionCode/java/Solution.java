class Solution {
    public int kthLargest(int kth, int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for(int i:nums) {
            pq.add(i);
            
            if (pq.size() > kth) {
                pq.remove();
            }
        }
        return pq.peek();
    }
}
