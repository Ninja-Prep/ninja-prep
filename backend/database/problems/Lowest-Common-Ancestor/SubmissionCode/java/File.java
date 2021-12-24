import java.io.*;
import java.util.*;


INSERT_SOLVER

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

            Node nodeA = null;
            Node nodeB = null;

            Node root = new Node(nums[0]);
            Queue<Node> queue = new LinkedList<>();
            queue.add(root);
            int i = 1;
            while(!queue.isEmpty()) {
                Node curr = queue.remove();
                if (curr == null) continue;
                Node left = null;
                Node right = null;
                if (i < nums.length && nums[i] != null) {
                    left = new Node(nums[i]);
                    curr.left = left;
                    if (nums[i] == nodeAVal) nodeA = left;
                    else if (nums[i] == nodeBVal) nodeB = left;
                }
                i++;
                if (i < nums.length && nums[i] != null) {
                    right = new Node(nums[i]);
                    curr.right = right;
                    if (nums[i] == nodeAVal) nodeA = right;
                    else if (nums[i] == nodeBVal) nodeB = right;
                }
                i++;
                queue.add(left);
                queue.add(right);
            }

        Solver solver = new Solver();
        Node ans = solver.lowestCommonAncestor(root, nodeA, nodeB);

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