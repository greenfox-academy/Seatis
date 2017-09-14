input_1 = input("Type the first world pls: ")
input_2 = input("Type the second world pls: ")
def anagram(string_1,string_2):
    string_3 = []
    for i in range(len(string_1)-1,-1,-1):
        string_3.append(string_1[i])
    string_4 = ''.join(string_3)
    if string_4 == string_2:
        return True
    else:
        return False

print(anagram(input_1,input_2))