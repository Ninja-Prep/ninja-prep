import ast
import sys

def validate_testcase(test_case_path):
    test_file = open(test_case_path, "r")
    test_input = user_test_case.splitlines()
    maybeString = ast.literal_eval(test_input[0])

    assert isinstance(val, str), "'%r' is not a string" % maybeList