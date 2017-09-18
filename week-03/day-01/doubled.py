# Create a method that decrypts the duplicated-chars.txt

def decrypt(file_name):
    text = ""
    try:
        fr = open(file_name, "r")
        lines_list = fr.readlines()
        for line in lines_list:
            for i in range(0, len(line), 2):
                text += line[i]
        fr.close()
        # print(text)
    except IOError:
        print("Unable to read file:", file_name)
    try:
        fw = open("files/single-chars.txt", "w")
        fw.write(text)
        fw.close()
    except IOError:
        print("Unable to write file: single-chars.txt")
def main():
    decrypt("files/duplicated-chars.txt")
main()