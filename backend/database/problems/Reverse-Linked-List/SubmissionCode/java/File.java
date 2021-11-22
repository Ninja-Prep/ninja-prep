import java.io.*;
import java.util.*;
 
INSERT_SOLVER

public class File {
    public static void main(String[] args) throws IOException {
        // Parsing
        InputReader in = new InputReader(System.in);
        PrintWriter out = new PrintWriter(System.out);
        Solver solver = new Solver();
        String line = in.nextLine();
        
        String[] stringNums = line.substring(1, line.length()-1).replaceAll("\\s", "").split(",");
        int n = stringNums.length;

        // Build Input
        Node head = new Node(Integer.parseInt(stringNums[0]));
        Node curr = head;

        for (int i = 1; i < n; i++) {
            curr.next = new Node(Integer.parseInt(stringNums[i]));
            curr = curr.next;
        }

        // Execute
        Node ans = solver.reverseLinkedList(head);

        // Print answer as string
        StringBuffer sb = new StringBuffer();
        while (ans != null) {
            sb.append(ans.value);
            sb.append(" ");
            ans = ans.next;
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
    Node next;
    int value;
    Node(int value) {
        this.value = value;
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