mylist = [34, 12, 24, 9, 5, 13, 1, 32, 10]

# print(sorted(mylist))   #cheat

def sort(sort_list):
    for i in range(len(sort_list),2,-1):
        for j in range(0,i-1):
            if sort_list[j] > sort_list[j+1]:
                sort_list[j], sort_list[j+1] = sort_list[j+1], sort_list[j]
    print(sort_list)
sort(mylist)