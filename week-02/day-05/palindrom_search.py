# mystring = input("Type something pls: ")

def palindrome_finder(finder_string):                           # check is it a palindrome
    return finder_string == ''.join(reversed(finder_string))

def palindrome_core(string):
    palindrome_string = []
    for j in range(0,len(string)-2):                            # length of the string -2 beacuse we need at least 3 char words
        for k in range(j+3,len(string)+1):                      # add one more character, until the end of the string
            puffer = ""
            for i in range(j,k):                                # make a substring until k index, k is at least 3 char long, because, we need at least 3 char words
                puffer += (string[i])                           # put substring in puffer 
            if palindrome_finder(puffer):                       # check if puffer is a palindrome
                palindrome_string.append(puffer)                # if it is a palindrome, put it in a list
    return palindrome_string

def main():
    mystring = "dog goat dad duck doodle never" 
    print(palindrome_core(mystring))

main()
