# Create a method that find the 5 most common lottery numbers otos.csv
def five_most_frequent(file_name):
    try:
        fr = open(file_name, "r")
        num_list = []
        lines_list = fr.readlines()
        for line in lines_list:
            two_digit = False
            i = len(line)-2
            j = 0
            number = 0
            while j < 5:
                if line[i] != ";":
                    if two_digit:
                        number += 10 * int(line[i])
                    else:
                        number = int(line[i])
                        two_digit = True
                else:
                    num_list.append(number)
                    j += 1
                    two_digit = False
                i -= 1
        # print(sorted(num_list))
        num_list = sorted(num_list)
        frequenty_list = []
        counter = 0
        for i in range(1, len(num_list)):
            counter += 1
            if num_list[i] > num_list[i-1] or i == len(num_list)-1:
                frequenty_list.append(counter)
                counter = 0
        dictonary = {}
        # print(frequenty_list)
        # print(sorted(frequenty_list))
        for i in range(5):
            dictonary[str(frequenty_list.index(max(frequenty_list))+1)] = max(frequenty_list)
            frequenty_list[frequenty_list.index(max(frequenty_list))] = 0
        print(dictonary)
        fr.close()
    except IOError:
        print("Unable to read file:", file_name)
def main():
    five_most_frequent("files/otos.csv")
main()