import java.io.*;
import java.util.*;

INSERT_SOLUTION_SNIPPET

public class Checker {
    public static void main(String[] args) throws IOException {
        try {
           // Test case input passed and read as a file
            String testCaseFile = args[0];
            java.io.File file = new java.io.File(testCaseFile);
            Scanner testCaseReader = new Scanner(file);

            // User's output passed as system input
            InputReader userOutputReader = new InputReader(System.in);
            String userOutputLine = userOutputReader.nextLine();

            // Convert testCase
            String testCaseNumsLine = testCaseReader.nextLine();
            int[] testCaseNums = convertNumsLine(testCaseNumsLine);

            // Execute Problem
            Solution solution = new Solution();
            int solutionAns = solution.longestIncreasingSubsequence(testCaseNums);

            // Solution output must be printed
            System.out.print(solutionAns);

            // Check userOutput against solution output
            if (userOutputLine == null) System.exit(1);
            int userAns = convertLine(userOutputLine);
            boolean isCorrect = check(userAns, solutionAns);
            if (!isCorrect){
                // Exit(1) is an incorrect answer
                System.exit(1);
            }
            // Exit(0) is an accepted answer
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

    public static int convertLine(String line) {
        line = line.replaceAll("\\n", "");
        return Integer.parseInt(line);
    }

    public static boolean check(int userOutput, int solutionOutput) {
        return userOutput == solutionOutput;
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