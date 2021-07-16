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


            int target = Integer.parseInt(testCaseReader.nextLine());
            String numsLine = testCaseReader.nextLine();
            int[] nums = convertNumsLine(numsLine);


            Solution solution = new Solution();
            int[] ans = solution.twoSum(nums, target);

            StringBuffer sb = new StringBuffer();
            if (ans != null)
                for (int num: ans) {
                    sb.append(num);
                    sb.append(" ");
                }
            sb.append("\n");
            System.out.print(sb);
            if (userLine == null) System.exit(1);
            int[] userAns = convertLine(userLine);
            boolean isCorrect = check(userAns, nums, target);
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