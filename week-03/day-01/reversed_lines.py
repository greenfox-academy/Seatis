# Create a method that decrypts reversed-lines.txt

def decrypt(file_name):
    text = ""
    try:
        fr = open(file_name, "r")
        lines_list = fr.readlines()
        for line in lines_list:
            text += ''.join(reversed(line))
        text = text[1:]     # remove first \n!
        fr.close()
        # print(text)
    except IOError:
        print("Unable to read file:", file_name)
    try:
        fw = open("files/normal-lines.txt", "w")
        fw.write(text)
        fw.close()
    except IOError:
        print("Unable to write file: files/normal-lines.txt")

def main():
    decrypt("files/reversed-lines.txt")
main()