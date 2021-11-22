class Solution {
    public int[] breadthFirstSearch(Node root) {
        List<Integer> ansList = new ArrayList<>();
        Queue<Node> q = new LinkedList<Node>();
        q.add(root);
        while (!q.isEmpty()) {
            Node curr = q.remove();
            ansList.add(curr.value);
            for (int i = 0; i < curr.children.size(); i++) {
                q.add(curr.children.get(i));
            }
        }

        int[] ansArray = new int[ansList.size()];
        for (int i = 0; i < ansArray.length; i++) {
            ansArray[i] = ansList.get(i);    
        }
        return ansArray;
    }   
}