import java.io.*;
import java.util.*;
 
INSERT_SOLVER

public class File {
    public static void main(String[] args) throws IOException {
        // Test case input passed as system input
        InputReader in = new InputReader(System.in);
        
        // Convert testCase
        String testCaseNumsline = in.nextLine();
        int[] testCaseNums = convertLine(testCaseNumsline);

        // Execute Problem
        Solver solver = new Solver();
        int userAns = solver.longestIncreasingSubsequence(testCaseNums);

        // Build submission output as string
        String submissionOutput = parseSubmissionOutput(userAns);

        // Write UserOutput to file
        try {
            //args[0] is user output path
            String outputPath = args[0];
            FileWriter fileWriter = new FileWriter(outputPath);
            fileWriter.write(submissionOutput);
            fileWriter.close();
        } catch (IOException e) {
            System.out.println(e);
            e.printStackTrace();
        }
    }

    public static String parseSubmissionOutput(int userAns) {
        StringBuffer sb = new StringBuffer();
        sb.append(userAns);
        return sb.toString();
    }

    public static int[] convertLine(String line) {
        line = line.substring(1, line.length()-1).replaceAll("\\s", "");
        String[] numbers = line.split(",");
        int[] parsed = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            parsed[i] = Integer.parseInt(numbers[i]);
        }
        return parsed;
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