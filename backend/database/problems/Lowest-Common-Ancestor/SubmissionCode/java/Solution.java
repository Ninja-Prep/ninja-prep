class Solution {
    public Node lowestCommonAncestor(Node root, Node a, Node b) {
        if (root == null) return null;
        if (root.value == a.value || root.value == b.value) return root;
        
        Node left = lowestCommonAncestor(root.left, a, b);
        Node right = lowestCommonAncestor(root.right, a, b);
        
        if (right != null && left != null) return root;
        if (right != null) return right;
        if (left != null) return left;
        return null;
    }   
}