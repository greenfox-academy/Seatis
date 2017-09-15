def armstrong_checker(number):
    armstrong_number = 0
    for digit in number:
        armstrong_number += int(digit) ** len(number)
    return int(number) == armstrong_number

def main():
    my_number = input("Type a number please: ")
    if armstrong_checker(my_number):
        print("The", my_number, "is an Armstrong number.")
    else:
        print("The", my_number, "is NOT an Armstrong number.")

main()
