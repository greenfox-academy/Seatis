# Write a program that asks for two numbers and prints the bigger one
a = int(input("Please enter the 1st number: "))
b = int(input("Please enter the 2nd number: "))
if a > b:
    print ("The bigger one is: " + str(a))
elif b > a:
    print ("The bigger one is: " + str(b))
else:
    print ("The two numbers are equal!")
