import java.io.*;
import java.util.*;
 
INSERT_SOLVER

public class File {
    public static void main(String[] args) throws IOException {
        InputReader in = new InputReader(System.in);
        PrintWriter out = new PrintWriter(System.out);
        Solver s = new Solver();
        String line = in.nextLine();
        while (line != null) {
            int target = Integer.parseInt(line);
            
            line = in.nextLine();
        
            String[] stringNums = line.substring(1, line.length()-1).replaceAll("\\s", "").split(",");
            int n = stringNums.length;
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = Integer.parseInt(stringNums[i]);
            }

            int [] ans = s.twoSum(nums, target);

            StringBuffer sb = new StringBuffer();
            if (ans != null)
            for (int num: ans) {
                sb.append(num);
                sb.append(" ");
            }
            sb.append("\n");
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
            line = in.nextLine();
        }
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