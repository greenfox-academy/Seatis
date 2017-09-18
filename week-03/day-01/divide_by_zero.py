def divider(divisor):
    try: 
        result = 10 / divisor
        print (result)
    except ZeroDivisionError:
        print ("Fail! Cannot divide by zero!")
def main():
    divider(int(input("Please enter a number: ")))
main()