import java.io.*;
import java.util.*;

INSERT_SOLVER

public class File {
    public static void main(String[] args) throws IOException {
        InputReader in = new InputReader(System.in);
        PrintWriter out = new PrintWriter(System.out);
        String line = in.nextLine();

        String[] stringNums = line.substring(1, line.length()-1).replaceAll("\\s", "").split(",");
        int n = stringNums.length;
        Integer[] nums = new Integer[n];

        for (int i = 0; i < n; i++) {
            if (stringNums[i].equals("null")) nums[i] = null;
            else nums[i] = Integer.parseInt(stringNums[i]);
        }
        Stack<Node> stack = new Stack<>();
        
        Node root = new Node(nums[0]);
        stack.push(root);
        for (int i = 1; i < n; i++) {
            if (nums[i] == null) {
                stack.pop();
            }
            else {
                Node node = new Node(nums[i]);
                stack.peek().children.add(node);
                stack.push(node);
            }
        }

        Solver solver = new Solver();
        int[] ans = solver.breadthFirstSearch(root);

        StringBuffer sb = new StringBuffer();
        for (int num: ans) {
            sb.append(num);
            sb.append(" ");
        }
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
    ArrayList<Node> children;

    Node(int value) {
        this.value = value;
        this.children = new ArrayList<>();
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