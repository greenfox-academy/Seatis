def printer(num,random_num,lives):
    if num < random_num:
        num_new = int(input(("Too low. You have",lives,"lives left.")))
        return num_new
    elif num > random_num:
        num_new = int(input(("Too high. You have",lives,"lives left.")))
        return num_new
    else:
        print("Congratulations. You won!")
        return 0

def main():
    random_number = 50
    number = int(input("I've the number between 1-100. You have 5 lives."))
    for lives_remain in range(6,0,-1):
        number = printer(number,random_number,lives_remain-1)
        if number == 0:
            return
main()