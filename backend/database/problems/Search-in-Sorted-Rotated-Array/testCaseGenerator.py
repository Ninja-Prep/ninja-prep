import os
import random
from collections import deque
for i in range(1, 11):
    filename = f"./Testcases/TestCase{i}.txt"
    if not os.path.exists(filename):
        f = open(filename, "w")
        length = random.randrange(3, 200)
        testCase = []
        for j in range (length):
            testCase.append(random.randrange(-20000, 20000))
        testCase = sorted(testCase)
        target = testCase[random.randrange(0,length)]
        dq = deque(testCase)
        dq.rotate(random.randrange(1, length))
        output = ", ".join(map(str, dq))
        f.write(str(target)+"\n")
        f.write("["+output+"]")
        f.close()