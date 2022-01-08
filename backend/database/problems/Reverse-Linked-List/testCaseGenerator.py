import os
import random
from collections import deque
for i in range(1, 11):
    filename = f"./Testcases/TestCase{i}.txt"
    if not os.path.exists(filename):
        f = open(filename, "w")
        length = random.randrange(3, 2000)
        testCase = []
        for j in range (length):
            testCase.append(random.randrange(-20000, 20000))
        output = ", ".join(map(str, testCase))
        f.write("["+output+"]")
        f.close()