# mystring = input("Type something pls: ")

def palindrom_finder(finder_string):        # check is it a palindrom
    return finder_string == ''.join(reversed(finder_string))

def palindrom_core(string):
    palindrom_string = []
    for j in range(0,len(string)-2):        # length of the string -2 beacuse we need at least 3 char words
        for k in range(j+3,len(string)+1):  # add one more character, until the end of the string
            puffer = ""
            for i in range(j,k):            # make a substring until k index, k is at least 3 char long, because, we need at least 3 char words
                puffer += (string[i])       # put substring in puffer 
            if palindrom_finder(puffer):    # check if puffer is a palindrom
                palindrom_string.append(puffer)
    return palindrom_string

def main():
    mystring = "dog goat dad duck doodle never" 
    print(palindrom_core(mystring))

main()
