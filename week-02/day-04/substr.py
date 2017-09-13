str_1 = "this is what I'm searching in"
str_2 = "searching"

def substr(string_1,string_2):
    j = 0
    a = 0
    i = 0
    while i < len(string_2):
        flag = False
        while not flag and j < len(string_1):
            if string_2[i] == string_1[j]:
                flag = True
                a += 1
                index = j
            else:
                flag = False
                i = 0
                a = 0
            j += 1    
        i += 1
    if a == len(string_2):
        return j-len(string_2)
    else:
        return -1
print(substr(str_1,str_2))

# print (string_1.find(string_2))     #cheat

