# Create a method that decrypts reversed-order.txt

def decrypt(file_name):
    text = ""
    try:
        fr = open(file_name, "r")
        lines_list = fr.readlines()
        for i in range(len(lines_list)-1, -1, -1):
            text += lines_list[i]
            if i == len(lines_list)-1:      # Because \n is missing at the end of the last line!
                text += "\n"
        fr.close()
        # print(text)
    except IOError:
        print("Unable to read file:", file_name)
    try:
        fw = open("files/normal-order.txt", "w")
        fw.write(text)
        fw.close()
    except IOError:
        print("Unable to write file: files/normal-order.txt")

def main():
    decrypt("files/reversed-order.txt")
main()