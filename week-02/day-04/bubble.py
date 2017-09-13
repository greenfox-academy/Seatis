mylist = [34, 12, 24, 9, 5, 13, 1, 32, 10]

# print(sorted(mylist))   #cheat

def sort(inside_list):
    for i in range(len(inside_list),2,-1):
        for j in range(0,i-1):
            if inside_list[j] > inside_list[j+1]:
                inside_list[j], inside_list[j+1] = inside_list[j+1], inside_list[j]
    print(inside_list)
sort(mylist)