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
            int testCaseTarget = Integer.parseInt(testCaseReader.nextLine());
            String testCaseNumsLine = testCaseReader.nextLine();
            int[] testCaseNums = convertNumsLine(testCaseNumsLine);

            // Execute Problem
            Solution solution = new Solution();
            int[] ans = solution.twoSum(testCaseNums, testCaseTarget);

            // Build submission output as string
            String submissionOutput = parseSubmissionOutput(ans);

            // Solution output must be printed
            System.out.print(submissionOutput);

            // Check userOutput against solution output
            if (userOutputLine == null) System.exit(1);
            int[] userAns = convertLine(userOutputLine);
            boolean isCorrect = check(userAns, testCaseNums, testCaseTarget);
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

    public static String parseSubmissionOutput(int[] userAns) {
        StringBuffer sb = new StringBuffer();
        if (userAns != null) {
            for (int num: userAns) {
                sb.append(num);
                sb.append(" ");
            }  
        }
        return sb.toString();
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

    public static boolean check(int[] userOutput, int[] nums, int target) {
        int a = userOutput[0];
        int b = userOutput[1];
        if (a + b != target) return false;
        
        List<Integer> numsList = new ArrayList<>(nums.length);
        for (int num: nums) numsList.add(num);

        if (numsList.contains((Integer) a)) {
            numsList.remove((Integer) a);
            if (numsList.contains((Integer) b)) {
                return true;
            }
        }
        return false;
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