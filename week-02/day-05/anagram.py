my_string_1 = input("Type the first world pls: ")
my_string_2 = input("Type the second world pls: ")

def anagram(string_1, string_2):
    if len(string_1) != len(string_2):
        return False
    else:
        return sorted(string_1) == sorted(string_2)
print(anagram(my_string_1, my_string_2))