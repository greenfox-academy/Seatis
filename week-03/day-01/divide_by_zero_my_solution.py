def divider(number):
    if number != 0:
        print (10 / number)
    else:
        print ("Fail!")
def main():
    divider(int(input("Please enter a number: ")))
main()