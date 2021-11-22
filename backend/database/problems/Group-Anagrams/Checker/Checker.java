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
            String[] testCaseInput = convertLine(testCaseReader.nextLine());

            // Execute Problem
            Solution solution = new Solution();
            List<List<String>> ans = solution.groupAnagrams(testCaseInput);

            // Build submission output as string
            String submissionOutput = parseSolutionOutput(ans);

            // Solution output must be printed
            System.out.print(submissionOutput);

            // Check userOutput against solution output
            if (userOutputLine == null) {
                System.exit(1);
            }
            try {
                List<List<String>> userAns = convertUserOutput(userOutputLine);
                boolean isCorrect = check(userAns, testCaseInput);
                if (!isCorrect){
                    // Exit(1) is an incorrect answer
                    System.exit(1);
                }
                // Exit(0) is an accepted answer
            }
            catch(Exception e) {
                System.out.println(e);
            }
        }
        catch (FileNotFoundException e) {
            System.out.println(e);
            System.exit(1);
        }
    }

    public static String parseSolutionOutput(List<List<String>> userAns) {
       return Arrays.deepToString(userAns.toArray());
    }

    public static String[] convertLine(String line) {
        line = line.substring(1, line.length()-1).replaceAll("\\s", "");
        String[] words = line.split(",");
        for (int i = 0; i < words.length; i++) {
            words[i] = words[i].replaceAll("\\s", "").replaceAll("\"", "");;
        }
        return words;
    }

    public static List<List<String>> convertUserOutput(String userOutput) {
        String[] wordGroups = stringArrayToArray(userOutput);
        List<List<String>> output = new ArrayList<>();
        for (String group: wordGroups) {
            String[] wordGroup = group.split(",");
            output.add(Arrays.asList(wordGroup));
        }
        return output;
    }

    public static boolean check(List<List<String>> userOutput, String[] testCaseInput) {
        List<String> testCaseInputList = new ArrayList<>(Arrays.asList(testCaseInput));
        for (List<String> groupList: userOutput) {
            String prevAnagram = null;
            for (String anagram: groupList) {
                char[] letters = anagram.toCharArray();
                Arrays.sort(letters);
                String sortedAnagram = Arrays.toString(letters);
                if (prevAnagram == null) {
                    prevAnagram = sortedAnagram;
                }
                else if (!prevAnagram.equals(sortedAnagram)) {
                    return false;
                };
                if (!testCaseInputList.contains(anagram)) {
                    return false;
                };
                testCaseInputList.remove(anagram);
            }
        }
        return testCaseInputList.size() == 0;
    }

    public static String[] stringArrayToArray(String arrayString) {
        char[] letters = arrayString.substring(1, arrayString.length()-1).replaceAll("\\s", "").replaceAll("\"", "").toCharArray();
        StringBuilder sb = new StringBuilder();
        sb.append(letters[0]);
        List<String> list = new ArrayList<>();
        for (int i = 1; i < letters.length; i++) {
            if (letters[i] == ',' && letters[i-1] == ']') {
                list.add(sb.toString().substring(1, sb.length()-1));
                sb = new StringBuilder();
            }
            else sb.append(letters[i]);
        }
        list.add(sb.toString().substring(1, sb.length()-1));
        return list.toArray(new String[list.size()]);
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