import subprocess
import sys
import glob
import json
import re 

from concurrent.futures import ThreadPoolExecutor
from ValidateTestCase import validate_testcase


def execute_code_submission(test_case_path, id):
    user_result = {
        'test_case': b'',
        'runtimeExitCode': b'',
        'verdictExitCode': b'',
        'userStdout': b'',
        'userStderr': b'',
        'userOutput': b'',
        'expectedOutput': b'',
        'duration': b''
    }

    test_file = open(test_case_path, "r")
    test_input = test_file.read()

    user_result['test_case'] = test_input
    # (Move the user answer to file: UserOutput1.txt)
    user_output_file_name = "UserOutput"+str(id)+".txt"

    try: 
        validate_testcase(test_case_path)
    except (SyntaxError, ValueError) as e:
        user_result['userStderr'] = "{}:\n{}".format(test_input, str(e))
    except AssertionError as e:
        user_result['userStderr'] = str(e)
    except Exception as e:
        user_result['userStderr'] = str(e)

    if user_result['userStderr'] == b'':
        commands = []
        commands.append(sys.argv[1])
        if len(sys.argv) == 3:
            commands.append(sys.argv[2])
        commands.append(user_output_file_name)
        try: 
            run_result = subprocess.run(commands, text=True, input=test_input, capture_output=True, timeout=2)
            user_result['runtimeExitCode'] = run_result.returncode
            user_result['userStderr'] = run_result.stderr
            user_result['userStdout'] = run_result.stdout   
        except subprocess.TimeoutExpired as e:
            user_result['runtimeExitCode'] = 137
            user_result['userStderr'] = e.stderr
            user_result['userStdout'] = e.stdout   

        if user_result['runtimeExitCode'] == 0:
            user_output_file = open(user_output_file_name, "r")
            user_output_content = user_output_file.read()
            user_result['userOutput'] = user_output_content
            checker_result = subprocess.run(["java", "Checker", test_case_path], text=True, input=user_output_content, capture_output=True)
            user_result['verdictExitCode'] = checker_result.returncode
            user_result['expectedOutput'] = checker_result.stdout

    for key in user_result:
        if isinstance(user_result[key], bytes):
            user_result[key] = user_result[key].decode('utf-8')
    return user_result

test_case_paths = glob.glob("TestCase*.txt")
def natural_sort(l): 
    convert = lambda text: int(text) if text.isdigit() else text.lower() 
    alphanum_key = lambda key: [ convert(c) for c in re.split('([0-9]+)', key) ] 
    return sorted(l, key = alphanum_key)

test_case_paths = natural_sort(test_case_paths)

submissionOutput = []

with ThreadPoolExecutor() as executor:
    judged_test_case_futures = [executor.submit(execute_code_submission, test_case_path, id) 
        for id, test_case_path in enumerate(test_case_paths)]
    judged_test_cases = [future.result() for future in judged_test_case_futures]

    with open("output.json", 'w') as output_file:
        json.dump(judged_test_cases, output_file)
    