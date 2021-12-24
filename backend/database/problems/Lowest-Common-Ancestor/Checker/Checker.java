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
            int userAns = Integer.parseInt(reader.readLine()); // User's solution
            String testCaseLine = testCaseReader.nextLine(); 
            String[] stringNums = testCaseLine.substring(1, testCaseLine.length()-1).replaceAll("\\s", "").split(",");

            int nodeAVal = testCaseReader.nextInt();
            int nodeBVal = testCaseReader.nextInt();
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

            Solution solution = new Solution();
            Node ans = solution.lowestCommonAncestor(root, nodeA, nodeB);

            StringBuffer sb = new StringBuffer();
            sb.append(ans.value);
            System.out.print(sb); // Expected Answer
            boolean isCorrect = check(userAns, ans.value);
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

    public static boolean check(int userOutput, int ans) {
        return userOutput == ans;
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