import java.io.*;
import java.util.*;

INSERT_SOLUTION_SNIPPET

public class Checker {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            String testCaseFile = args[0];
            java.io.File file = new java.io.File(testCaseFile);
            FileInputStream fileInputStream = new FileInputStream(file);
            InputReader testCaseReader = new InputReader(fileInputStream);
            String userLine = reader.readLine();

            String numsLine = testCaseReader.nextLine();
            String[] stringNums = numsLine.substring(1, numsLine.length()-1).replaceAll("\\s", "").split(",");  
            int n = stringNums.length;
            // Build Input
            Node head = new Node(Integer.parseInt(stringNums[0]));
            Node curr = head;

            for (int i = 1; i < n; i++) {
                curr.next = new Node(Integer.parseInt(stringNums[i]));
                curr = curr.next;
            }

            Solution solution = new Solution();
            Node ansHead = solution.reverseLinkedList(head);
            Node ans = ansHead;
            // Print answer as string
            StringBuffer sb = new StringBuffer();
            while (ans != null) {
                sb.append(ans.value);
                sb.append(" ");
                ans = ans.next;
            }
            System.out.print(sb);
            if (userLine == null) System.exit(1);
            int[] userAns = convertLine(userLine);
            boolean isCorrect = check(ansHead, userAns);
            if (!isCorrect){
                System.exit(1);
            }
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    public static int[] convertNumsLine(String line) {
        String[] stringNums = line.substring(1, line.length()-1).replaceAll("\\s", "").split(",");
        int n = stringNums.length;
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(stringNums[i]);
        }
        return nums;
    }

    public static int[] convertLine(String line) {
        line = line.replaceAll("\\n", "");
        String [] numbers = line.split("\\s+");
        int[] parsed = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            parsed[i] = Integer.parseInt(numbers[i]);
        }
        return parsed;
    }

    public static boolean check(Node ans, int[] userOutput) {
        int i = 0;
        while (ans != null) {
            if (i == userOutput.length) return false;
            if (userOutput[i] != ans.value) return false;
            i++;
            ans = ans.next;
        }
        return true;
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