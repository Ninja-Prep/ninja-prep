import os
import random
for i in range(4, 11):
    filename = f"./Testcases/TestCase{i}.txt"
    if not os.path.exists(filename):
        f = open(filename, "w")
        length = random.randrange(3, 200)
        testCase = []
        target = random.randrange(-20000, 20000)
        smallHalf = random.randrange(-20000, target)
        largeHalf = target - smallHalf
        testCase.append(smallHalf)
        testCase.append(largeHalf)
        for j in range (length-2):
            testCase.append(random.randrange(-20000, 20000))
        random.shuffle(testCase)
        output = ", ".join(map(str, testCase))
        f.write(str(target)+"\n")
        f.write("["+output+"]")
        f.close()