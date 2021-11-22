import java.io.*;
import java.util.*;

INSERT_SOLUTION_SNIPPET

public class Checker {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            String testCaseFile = args[0];
            java.io.File file = new java.io.File(testCaseFile);
            Scanner testCaseReader = new Scanner(file);
            String userLine = reader.readLine();
            String testCaseLine = testCaseReader.nextLine();
            String[] stringNums = testCaseLine.substring(1, testCaseLine.length()-1).replaceAll("\\s", "").split(",");
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

            Solution solution = new Solution();
            int[] ans = solution.breadthFirstSearch(root);

            StringBuffer sb = new StringBuffer();
            if (ans != null)
                for (int num: ans) {
                    sb.append(num);
                    sb.append(" ");
                }
            System.out.print(sb); // Expected Answer
            if (userLine == null) System.exit(1);
            int[] userAns = convertLine(userLine);
            boolean isCorrect = check(userAns, ans);
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

    public static boolean check(int[] userOutput, int[] nums) {
        if (userOutput.length != nums.length) return false;
        for (int i = 0; i < nums.length; i++) {
            if (userOutput[i] != nums[i]) return false;
        }
        return true;
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