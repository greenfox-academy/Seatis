ref_list = [1, 11, 34, 11, 52, 61, 1, 34]
output = []

# print(sorted(set(ref_list)))  #cheapest

def reduce(num_list):
    for j in range(len(num_list)):
        flag = True
        for i in range(len(output)):
            if num_list[j] == output[i]:
                flag = False
        if flag:
             output.append(num_list[j])
    print(output)

reduce(ref_list)
