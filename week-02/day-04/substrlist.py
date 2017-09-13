string_row = ["this", "is", "what", "I'm", "searching", "in"]
ref_string = "ching"

def substrlist(string_list,string):
    for i in range(len(string_list)):
        if string_list[i].find(string) >= 0:
            return string_list[i].find(string)
    return -1
print(substrlist(string_row,ref_string))