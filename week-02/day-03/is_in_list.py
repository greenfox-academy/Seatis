# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

param_list = [4,8,12,16]
listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
The_Truth_Is_Out_There = [False, False, False, False]


def checker (numbers_to_check):
    flag = True
    for i in range(len(param_list)):
        The_Truth_Is_Out_There[i] = False
    j = 0
    for num_1 in param_list:
        for num_2 in numbers_to_check:
            if num_1 == num_2:
                The_Truth_Is_Out_There[j] = True
        j += 1
    for statement in The_Truth_Is_Out_There:
        if statement == False:
            flag = False
    if flag:
        print("True")
    else:
        print("False")

checker(listOfNumbers)