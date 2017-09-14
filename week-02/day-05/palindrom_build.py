mystring = input("Type a word pls: ")
def palindrom_build(string_1):
    string_2 = []
    for i in range(len(string_1)-1,-1,-1):
        string_2.append(string_1[i])
    string_back = ''.join(string_2)
    string_1 += string_back
    return string_1

print(palindrom_build(mystring))