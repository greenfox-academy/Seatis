# Create a method that decrypts encoded-lines.txt
def decrypt(file_name):
    text = ""
    try:
        fr = open(file_name, "r")
        lines_list = fr.readlines()
        for line in lines_list:
            for i in range(len(line) - 1):
                if line[i] != " ":
                    text += chr(ord(line[i]) - 1)   # ASCII code - 1
                else:
                    text += " "
            text += "\n"
        fr.close()
        # print(text)
    except IOError:
        print("Unable to read file:", file_name)
    try:
        fw = open("files/decrypt-lines.txt", "w")
        fw.write(text)
        fw.close()
    except IOError:
        print("Unable to write file: files/decrypt-lines.txt")

def main():
    decrypt("files/encoded-lines.txt")
main()