import java.io.*;
import java.util.*;


class Solver {
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

public class File {
    public static void main(String[] args) throws IOException {
        InputReader in = new InputReader(System.in);
        PrintWriter out = new PrintWriter(System.out);
        String line = in.nextLine();

        int nodeAVal = in.nextInt();
        int nodeBVal = in.nextInt();

        String[] stringNums = line.substring(1, line.length()-1).replaceAll("\\s", "").split(",");
        int n = stringNums.length;
        Integer[] nums = new Integer[n];

        for (int i = 0; i < n; i++) {
            if (stringNums[i].equals("null")) nums[i] = null;
            else nums[i] = Integer.parseInt(stringNums[i]);
        }

        Node[] nodes = new Node[n];
        Node nodeA = null;
        Node nodeB = null;

        nodes[0] = new Node(nums[0]);
        for (int i = 1; i < n; i++) {
            Node node = null;
            if (nums[i] != null)  {
                node = new Node(nums[i]);
                if (nums[i] == nodeAVal) nodeA = node;
                if (nums[i] == nodeBVal) nodeB = node;
            }

            nodes[i] = node;
            if (nodes[i/2] == null) continue;
            if (i % 2 == 1) {
                nodes[i/2].left = node;
            }
            else {
                nodes[i/2].right = node;
            }
        }

        Solver solver = new Solver();
        Node ans = solver.lowestCommonAncestor(nodes[0], nodeA, nodeB);

        StringBuffer sb = new StringBuffer();

        sb.append(ans.value);
        try {
            //args[0] is user output path
            String outputPath = args[0];
            FileWriter fileWriter = new FileWriter(outputPath);
            fileWriter.write(sb.toString());
            fileWriter.close();
        } catch (IOException e) {
            System.out.println(e);
            e.printStackTrace();
        }
    }
}
 
class Node {
    int value;
    Node left;
    Node right;

    Node(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class InputReader {
    public BufferedReader reader;
    public StringTokenizer tokenizer;
 
    public InputReader(InputStream stream) {
        reader = new BufferedReader(new InputStreamReader(stream), 32768);
        tokenizer = null;
    }
 
    public String next() {
        while (tokenizer == null || !tokenizer.hasMoreTokens()) {
            try {
                tokenizer = new StringTokenizer(reader.readLine());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return tokenizer.nextToken();
    }
 
    public int nextInt() {
        return Integer.parseInt(next());
    }
 
    long nextLong() {
        return Long.parseLong(next());
    }
 
    double nextDouble() {
        return Double.parseDouble(next());
    }
 
    String nextLine() {
        String s = "";
        try {
            s = reader.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return s;
    }
}