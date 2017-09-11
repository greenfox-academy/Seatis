# - Create a variable named `af`
#   with the following content: `[4, 5, 6, 7]`
# - Print all the elements of `af`
af = [4, 5, 6, 7]   #print list
print(af)

for i in af:        #print elements of list
    print(i)

string = ""         #print elements of a list in a row as a string
for i in af:
    string += str(i)
    string += " "
print(string)