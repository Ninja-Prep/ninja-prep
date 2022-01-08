import ast
import sys
from typing import List

INSERT_SOLVER

lines = sys.stdin.readlines()
target = ast.literal_eval(lines[0])
nums = ast.literal_eval(lines[1])

solver = Solver()
result = solver.searchInSortedRotatedArray(nums, target)

output_path = sys.argv[1]
output_file = open(output_path, 'w')
output_file.write(str(result))