# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1,2,3,4,5,6,8];

contains_it = False
for num in numbers:
    if num == 7:
        contains_it = True
if contains_it:
    print("Hoorray")
else:
    print("Noooooo")

#if 7 in numbers: