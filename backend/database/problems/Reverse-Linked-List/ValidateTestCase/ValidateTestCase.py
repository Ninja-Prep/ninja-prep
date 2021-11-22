import ast
import sys

def validate_testcase(test_case_path):
    test_file = open(test_case_path, "r")
    test_input = test_file.read().splitlines()

    maybeList = ast.literal_eval(test_input[0])
    assert type(maybeList) == list, "'%r' is not an integer list" % maybeList
    assert all(isinstance(val, int) for val in maybeList), "'%r' is not an integer list" % maybeList