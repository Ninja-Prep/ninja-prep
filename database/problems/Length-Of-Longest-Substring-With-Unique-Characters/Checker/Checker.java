import java.io.*;
import java.util.*;

INSERT_SOLUTION_SNIPPET

public class Checker {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            // args[0] is always test case file path
            String testCaseFile = args[0];
            java.io.File file = new java.io.File(testCaseFile);
            Scanner testCaseReader = new Scanner(file);

            int userAns = Integer.parseInt(reader.readLine());
            Solution solution = new Solution();
            String testCase = testCaseReader.nextLine();
            int ans = solution.longestSubstring(testCase);
            System.out.println(ans);
            if (userAns != ans) System.exit(1);
        }
        catch (FileNotFoundException e) {
            System.out.print(e);
            System.exit(1);
        }
    }
 
}