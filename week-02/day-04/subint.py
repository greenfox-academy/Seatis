num_list = [1, 11, 34, 52, 61]
number = 1

def subint(num_row,num):
    num_row_str = []
    for i in range(len(num_row)):
        num_row_str.append(str(num_row[i]))     #make 2D string list from int lsit
    print(num_row_str)
    index = []
    for i in range(len(num_row_str)):
        flag = True
        for j in range(len(num_row_str[i])):
            if num_row_str[i][j] == str(num) and flag:
                index.append(i)
                flag = False
    return index

print(subint(num_list,number))


